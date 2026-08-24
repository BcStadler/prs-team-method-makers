import { useState, useEffect, SyntheticEvent, useRef } from "react";
import { IRequest } from "./IRequest";
import { requestAPI } from "./RequestAPI";
import RequestRow from "./RequestRow";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { IUser } from "../users/IUser";
import { userAPI } from "../users/UserAPI";
import { useUserContext } from "../App";

function RequestTable() {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useUserContext();
  const hasRestoredFilters = useRef(false);
  const isRestoringFilters = useRef(false);
  const filterKeys = [
    "status",
    "userId",
    "excludeUserId",
    "search",
    "sort",
    "direction",
  ];

  useEffect(() => {
    if (hasRestoredFilters.current) return;
    hasRestoredFilters.current = true;
    if (filterKeys.some((key) => searchParams.has(key))) return;

    const remembered = sessionStorage.getItem("requestFilters");
    if (remembered) {
      isRestoringFilters.current = true;
      setSearchParams(new URLSearchParams(remembered), { replace: true });
    }
  }, []);

  async function loadRequests() {
    try {
      const data = await requestAPI.list(
        searchParams.get("status") ?? undefined,
        searchParams.get("userId")
          ? Number(searchParams.get("userId"))
          : undefined,
        searchParams.get("excludeUserId")
          ? Number(searchParams.get("excludeUserId"))
          : undefined,
        searchParams.get("search") ?? undefined,
        searchParams.get("sort") ?? undefined,
        searchParams.get("direction") ?? undefined,
      );
      setRequests(data);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    }
  }
  useEffect(() => {
    if (isRestoringFilters.current) {
      isRestoringFilters.current = false;
      return;
    }
    loadRequests();
    sessionStorage.setItem("requestFilters", searchParams.toString());
  }, [searchParams]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await userAPI.list();
        setUsers(data);
      } catch (error: any) {
        toast.error(error.message, { duration: 6000 });
      }
    }
    loadUsers();
  }, []);

  function removeRequest(request: IRequest) {
    setRequests(requests.filter((r) => r.id !== request.id));
  }

  function handleStatusChange(event: SyntheticEvent) {
    const newParams = new URLSearchParams(searchParams);
    const value = (event.target as HTMLSelectElement).value;
    if (value) newParams.set("status", value);
    else newParams.delete("status");
    setSearchParams(newParams);
  }

  function handleUserChange(event: SyntheticEvent) {
    const value = (event.target as HTMLSelectElement).value;
    if (value.startsWith("exclude:")) {
      handleExcludeChange(event);
      return;
    }
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("excludeUserId");
    if (value) newParams.set("userId", value);
    else newParams.delete("userId");
    setSearchParams(newParams);
  }

  function handleExcludeChange(event: SyntheticEvent) {
    const value = (event.target as HTMLSelectElement).value.replace(
      "exclude:",
      "",
    );
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("userId");
    if (value) newParams.set("excludeUserId", value);
    else newParams.delete("excludeUserId");
    setSearchParams(newParams);
  }

  function handleSearchChange(event: SyntheticEvent) {
    const value = (event.target as HTMLInputElement).value;
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set("search", value);
    else newParams.delete("search");
    setSearchParams(newParams);
  }

  function handleSortClick(column: string) {
    const newParams = new URLSearchParams(searchParams);
    const direction =
      newParams.get("sort") === column && newParams.get("direction") === "asc"
        ? "desc"
        : "asc";
    newParams.set("sort", column);
    newParams.set("direction", direction);
    setSearchParams(newParams);
  }

  function sortIndicator(column: string) {
    if (searchParams.get("sort") !== column) return "";
    return searchParams.get("direction") === "desc" ? " \u2193" : " \u2191";
  }

  function applyQuickView(
    status?: string,
    userId?: number,
    excludeUserId?: number,
  ) {
    const newParams = new URLSearchParams(searchParams);
    ["status", "userId", "excludeUserId"].forEach((key) =>
      newParams.delete(key),
    );
    if (status) newParams.set("status", status);
    if (userId) newParams.set("userId", userId.toString());
    if (excludeUserId) newParams.set("excludeUserId", excludeUserId.toString());
    setSearchParams(newParams);
  }

  function clearFilters() {
    sessionStorage.removeItem("requestFilters");
    setSearchParams({});
  }

  async function exportRequests() {
    try {
      const csv = await requestAPI.export(searchParams);
      const downloadUrl = URL.createObjectURL(csv);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "requests.csv";
      link.click();
      URL.revokeObjectURL(downloadUrl);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    }
  }

  const otherUsers = users
    .filter((requester) => requester.id !== user?.id)
    .sort((a, b) =>
      `${a.firstName} ${a.lastName}`.localeCompare(
        `${b.firstName} ${b.lastName}`,
      ),
    );
  const quickView =
    user?.isReviewer &&
    searchParams.get("status") === "REVIEW" &&
    searchParams.get("excludeUserId") === user.id?.toString()
      ? "queue"
      : searchParams.get("userId") === user?.id?.toString()
        ? "mine"
        : !searchParams.get("status") &&
            !searchParams.get("userId") &&
            !searchParams.get("excludeUserId")
          ? "everything"
          : "";

  return (
    <>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button
          className={`btn ${quickView === "everything" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyQuickView()}
        >
          Everything
        </button>
        <button
          className={`btn ${quickView === "mine" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyQuickView(undefined, user?.id)}
        >
          Submitted by you
        </button>
        {user?.isReviewer && (
          <button
            className={`btn ${quickView === "queue" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => applyQuickView("REVIEW", undefined, user.id)}
          >
            Awaiting your review
          </button>
        )}
      </div>
      <div className="d-flex flex-wrap gap-4 mb-4">
        <div className="d-flex flex-column w-25">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            className="form-select"
            value={searchParams.get("status") ?? undefined}
            onChange={handleStatusChange}
          >
            <option value="">All</option>
            <option value="NEW">New</option>
            <option value="REVIEW">Review</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
        <div className="d-flex flex-column w-25">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            id="search"
            className="form-control"
            value={searchParams.get("search") ?? ""}
            onChange={handleSearchChange}
          />
        </div>
        <div className="d-flex flex-column w-25">
          <label htmlFor="requestedBy" className="form-label">
            Requested by
          </label>
          <select
            id="requestedBy"
            className="form-select"
            value={
              searchParams.get("userId") ??
              (searchParams.get("excludeUserId")
                ? `exclude:${searchParams.get("excludeUserId")}`
                : "")
            }
            onChange={handleUserChange}
          >
            <option value="">Anyone</option>
            {user && (
              <option value={user.id}>
                {user.firstName} {user.lastName} (you)
              </option>
            )}
            {otherUsers.map((requester) => (
              <option key={requester.id} value={requester.id}>
                {requester.firstName} {requester.lastName}
              </option>
            ))}
            {user?.isReviewer && (
              <option value={`exclude:${user.id}`}>Anyone else</option>
            )}
          </select>
        </div>
        <button
          className="btn btn-outline-secondary align-self-end"
          onClick={clearFilters}
        >
          Clear filters
        </button>
        <button
          className="btn btn-outline-primary align-self-end"
          onClick={exportRequests}
        >
          Export CSV
        </button>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-body-tertiary gap-5 p-4 rounded-4">
        <table className="table table-hover w-75 table rounded-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th
                scope="col"
                role="button"
                onClick={() => handleSortClick("status")}
              >
                Status{sortIndicator("status")}
              </th>
              <th
                scope="col"
                role="button"
                onClick={() => handleSortClick("total")}
              >
                Total{sortIndicator("total")}
              </th>
              <th scope="col">Requested By</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <RequestRow
                key={request.id}
                request={request}
                onRemove={removeRequest}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default RequestTable;
