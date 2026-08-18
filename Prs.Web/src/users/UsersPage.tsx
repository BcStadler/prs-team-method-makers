import { Link } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import UserList from "./UserList";

function UsersPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex align-items-baseline justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Users</h2>
        <div
          className="toast align-items-center text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              <svg
                className="bi pe-none me-2"
                width={32}
                height={32}
                fill="#ffffff"
              >
                <use xlinkHref={`${bootstrapIcons}#check`} />
              </svg>
              Successfully saved
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
        <Link to={`/users/create`} className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus`} />
          </svg>
          Create a user
        </Link>
      </div>

      <UserList />
    </section>
  );
}

export default UsersPage;
