import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IRequest } from "./IRequest";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import { getTextBackgroundByStatus } from "../utility/formatUtilities";

interface IRequestRowProps {
  request: IRequest;
  onRemove: (request: IRequest) => void;
}



function RequestRow({ request, onRemove }: IRequestRowProps) {
  return (
    <tr>
      <th scope="row">{request.id}</th>
      <td>
        {request.description} <br />
        <span className="text-body-secondary small text-wrap">
          {request.justification}
        </span>
      </td>
      <td>
        <span className={`badge ${getTextBackgroundByStatus(request.status)}`}>
          {request.status}
        </span>
      </td>
      <td>${request.total}</td>
      <td>
        {request.user?.firstName} {request.user?.lastName}
        <br />
        <span className="text-body-secondary small text-wrap">
          {request.deliveryMode}
        </span>
      </td>
      <td>
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
            <Dropdown.Item as={Link} to={`/requests/detail/${request.id}`}>
              Review
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={`/requests/edit/${request.id}`}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item
              as="a"
              href="#"
              onClick={async (event) => {
                event.preventDefault();
                if (confirm("Are you sure you want to delete this request?")) {
                  if (request.id) {
                    await requestAPI.delete(request.id);
                    onRemove(request);
                    toast.success("Successfully deleted.");
                  }
                }
              }}
            >
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}

export default RequestRow;
