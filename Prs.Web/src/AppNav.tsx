import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import bootstrapIcons from "./assets/bootstrap-icons.svg";

function AppNav() {
  const location = useLocation();
  
  return (
    <Nav
      variant="pills"
      defaultActiveKey={location.pathname}
      as="ul"
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end min-vh-100 position-sticky"
      style={{ width: 280 }}
    >
      {/* <a href="" className="mb-4 text-decoration-none fw-bolder">
        <svg
          className="bi pe-none me-2"
          width={16}
          height={16}
          fill="currentColor"
        >
          <use xlinkHref={`${bootstrapIcons}#plus-circle-fill`} />
        </svg>
        Create new
      </a> */}
      <Nav.Item as="li" className="text-secondary fw-bold mb-2">
        Purchase
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/requests" as={Link} to="/requests">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="currentColor"
          >
            <use xlinkHref={`${bootstrapIcons}#cart`} />
          </svg>
          Requests
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/products" as={Link} to="/products">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="currentColor"
          >
            <use xlinkHref={`${bootstrapIcons}#grid`} />
          </svg>
          Products
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/vendors" as={Link} to="/vendors">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="currentColor"
          >
            <use xlinkHref={`${bootstrapIcons}#building`} />
          </svg>
          Vendors
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/users" as={Link} to="/users">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="currentColor"
          >
            <use xlinkHref={`${bootstrapIcons}#people`} />
          </svg>
          Users
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default AppNav;
