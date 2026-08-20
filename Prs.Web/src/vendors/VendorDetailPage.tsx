import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../products/IProduct";
import { formatPhoneNumber } from "../utility/formatUtilities";
import toast from "react-hot-toast";
import { vendorAPI } from "./VendorAPI";
import { IVendor } from "./IVendor";

function VendorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<IVendor | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadVendor() {
      setLoading(true);
      try {
        const loadedVendor = await vendorAPI.find(Number(id));
        setVendor(loadedVendor);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadVendor();
  }, [id]);

  function renderProduct(product: IProduct) {
    return (
      <tr key={product.id}>
        <td>{product.partNumber}</td>
        <td>{product.name}</td>
        <td>${product.price?.toFixed(2)}</td>
        <td>{product.unit}</td>
      </tr>
    );
  }

  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Vendor Details</h2>
        <Link to="/vendors" className="btn btn-outline-primary">
          Back to vendors
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {vendor && (
        <>
          <div className="mb-5">
            <h3>{vendor.name}</h3>
            <div className="badge bg-secondary mb-3">{vendor.code}</div>
            <address>
              <div>{vendor.address}</div>
              <div>
                {vendor.city}, {vendor.state} {vendor.zip}
              </div>
              <div>{formatPhoneNumber(vendor.phone)}</div>
              <div>{vendor.email}</div>
            </address>
          </div>
          <h3 className="mb-3">Products</h3>
          {vendor.products && vendor.products.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Part Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Unit</th>
                  </tr>
                </thead>
                <tbody>{vendor.products.map(renderProduct)}</tbody>
              </table>
            </div>
          ) : (
            <p className="text-secondary">
              This vendor does not supply any products.
            </p>
          )}
        </>
      )}
    </section>
  );
}

export default VendorDetailPage;
