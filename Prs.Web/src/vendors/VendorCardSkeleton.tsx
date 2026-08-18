import bootstrapIcons from "../assets/bootstrap-icons.svg";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";

function VendorCardSkeleton() {
  return (
    <Card className="w-25 bg-light" style={{ minHeight: "234px" }}>
      <ProgressBar now={60} />
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <span className="skeleton skeleton-text"> </span> <br />
            <span className="badge bg-secondary skeleton skeleton-text">
              {" "}
            </span>{" "}
          </span>
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
          </Dropdown>
        </div>
        <br />

        <div className="text-secondary skeleton skeleton-text"></div>

        <div className="text-secondary skeleton skeleton-text"></div>

        {/* <abbr title="Phone">P:</abbr> */}
        <div className="text-secondary skeleton skeleton-text"></div>

        <div className="text-secondary skeleton skeleton-text"></div>
      </address>
    </Card>
  );
}

export default VendorCardSkeleton;
