import { useState, useEffect, SyntheticEvent } from "react";
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

  async function loadRequests() {
    try {
      const data = await requestAPI.list(
        searchParams.get("status") ?? undefined,
        searchParams.get("userId")
          ? Number(searchParams.get("userId"))
          : undefined
      );
      setRequests(data);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    }
  }
  useEffect(() => {
    loadRequests();
  }, [searchParams.get("status"), searchParams.get("userId")]);

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
    newParams.set("status", (event.target as HTMLSelectElement).value);
    setSearchParams(newParams);
  }

  function handleUserChange(event: SyntheticEvent) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("userId", (event.target as HTMLSelectElement).value);
    setSearchParams(newParams);
  }

  const otherUsers = users
    .filter((requester) => requester.id !== user?.id)
    .sort((a, b) =>
      `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
    );

  return (
    <>
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
          <label htmlFor="requestedBy" className="form-label">
            Requested by
          </label>
          <select
            id="requestedBy"
            className="form-select"
            value={searchParams.get("userId") ?? ""}
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
          </select>
        </div>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-body-tertiary gap-5 p-4 rounded-4">

        <table className="table table-hover w-75 table rounded-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
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
