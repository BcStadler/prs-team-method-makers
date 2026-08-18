import { Link } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import VendorList from "./VendorList";


function VendorsPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2 ">
        <h2>Vendors</h2>
        <Link to={`/vendors/create`} className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus`} />
          </svg>
          Create a vendor
        </Link>
      </div>
      <VendorList />
    </section>
  );
}
export default VendorsPage;
