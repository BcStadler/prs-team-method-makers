import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { formatPhoneNumber } from "../utility/formatUtilities";
import { IUser } from "./IUser";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { userAPI } from "./UserAPI";
import toast from "react-hot-toast";

interface IUserCardProps {
  user: IUser;
  onRemove: (user: IUser) => void;
}

function UserCard({ user, onRemove }: IUserCardProps) {
  return (
    <div className="d-flex gap-4 " style={{ width: "25rem" }}>
      <div
        style={{ width: "6rem", height: "6rem" }}
        className="d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle me-2"
      >
        {user.firstName.substring(0, 1)}
        {user.lastName.substring(0, 1)}
      </div>
      <address>
        <strong>
          {user.firstName} {user.lastName}
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="light"
              className="no-caret"
              style={{ background: "none" }}
            >
              <svg
                className="bi pe-none me-2"
                width={20}
                height={20}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#three-dots-vertical`} />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={`/users/edit/${user.id}`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                as="a"
                href="#"
                onClick={async (event) => {
                  event.preventDefault();
                  if (confirm("Are you sure you want to delete this user?")) {
                    if (user.id) {
                      await userAPI.delete(user.id);
                      onRemove(user);
                      toast.success("Successfully deleted.");
                    }
                  }
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </strong>
        <br />
        <span className="text-secondary">
          {user.isAdmin && "Admin"}{" "}
          {!user.isAdmin && user.isReviewer && "Reviewer"}
          {!user.isReviewer && !user.isAdmin && "no role assigned"}
        </span>
        <br />
        <span className="text-secondary">{formatPhoneNumber(user.phone)}</span>
        <br />
        <div className="d-flex justify-content-start"></div>
      </address>
    </div>
  );
}

export default UserCard;
