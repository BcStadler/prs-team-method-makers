// src/vendors/VendorDetailPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IVendor } from "./IVendor";
import { IProduct } from "../products/IProduct";
import { vendorAPI } from "./VendorAPI";
import { productAPI } from "../products/ProductAPI";
import { formatPhoneNumber } from "../utility/formatUtilities";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import toast from "react-hot-toast";

function VendorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<IVendor | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadVendorAndProducts() {
      if (!id) return;
      const vendorId = Number(id);

      try {
        setLoading(true);

        const [vendorData, allProducts] = await Promise.all([
          vendorAPI.find(vendorId),
          productAPI.list(),
        ]);

        setVendor(vendorData);

        const vendorProducts = allProducts.filter(
          (p: IProduct) => p.vendorId === vendorId
        );
        setProducts(vendorProducts);
      } catch (error: any) {
        toast.error(error.message || "Could not load vendor details.");
      } finally {
        setLoading(false);
      }
    }

    loadVendorAndProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="container-fluid mx-5 my-2 py-4">
        Loading vendor details...
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="container-fluid mx-5 my-2 py-4">Vendor not found.</div>
    );
  }

  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      {/* Header with Flexbox Layout */}
      <div className="d-flex justify-content-between align-items-center pb-2 mb-4 border-bottom border-1">
        <h2 className="fw-normal mb-0">Vendor</h2>
        <Link
          to={`/vendors/edit/${vendor.id}`}
          className="text-primary text-decoration-none"
          title="Edit Vendor"
        >
          <svg className="bi" width={18} height={18} fill="#007AFF">
            <use xlinkHref={`${bootstrapIcons}#pencil-fill`} />
          </svg>
        </Link>
      </div>

      {/* Vendor Information - Flexbox Grid */}
      <div className="d-flex flex-wrap mb-5 text-dark gap-4">
        {/* Column 1 */}
        <div className="d-flex flex-column flex-grow-1 min-w-0">
          <div className="mb-3">
            <small className="text-secondary d-block">Code</small>
            <span>{vendor.code}</span>
          </div>
          <div>
            <small className="text-secondary d-block">Name</small>
            <span>{vendor.name}</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="d-flex flex-column flex-grow-1 min-w-0">
          <div className="mb-3">
            <small className="text-secondary d-block">Address</small>
            <span>{vendor.address}</span>
          </div>
          <div>
            <small className="text-secondary d-block">City / State / Zip</small>
            <span>
              {vendor.city}, {vendor.state} {vendor.zip}
            </span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="d-flex flex-column flex-grow-1 min-w-0">
          <div className="mb-3">
            <small className="text-secondary d-block">Phone</small>
            <span>{formatPhoneNumber(vendor.phone)}</span>
          </div>
          <div>
            <small className="text-secondary d-block">Email</small>
            <a
              href={`mailto:${vendor.email}`}
              className="text-primary text-decoration-none"
            >
              {vendor.email}
            </a>
          </div>
        </div>
      </div>

      {/* Products Section Card with Uniform Backdrop */}
      <div className="bg-light p-4 rounded-4">
        <h4 className="fw-normal mb-3">Products</h4>

        {products.length > 0 ? (
          <div className="table-responsive">
            <table
              className="table table-borderless align-middle mb-0 text-center"
              style={
                {
                  backgroundColor: "#f8f9fa",
                  "--bs-table-bg": "#f8f9fa",
                  "--bs-table-accent-bg": "transparent",
                } as React.CSSProperties
              }
            >
              <thead>
                <tr className="border-bottom border-1 text-secondary fw-normal">
                  <th
                    className="fw-normal text-secondary py-2"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    Part number
                  </th>
                  <th
                    className="fw-normal text-secondary py-2"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    Name
                  </th>
                  <th
                    className="fw-normal text-secondary py-2"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    Price
                  </th>
                  <th
                    className="fw-normal text-secondary py-2"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    Unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product: IProduct) => (
                  <tr key={product.id} className="border-bottom border-1">
                    <td
                      className="py-3"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      {product.partNumber}
                    </td>
                    <td
                      className="py-3"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      {product.name}
                    </td>
                    <td
                      className="py-3"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      {(product.price ?? 0).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td
                      className="py-3"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      {product.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-muted mb-0">
            This vendor does not currently supply any products.
          </p>
        )}
      </div>
    </section>
  );
}

export default VendorDetailPage;
