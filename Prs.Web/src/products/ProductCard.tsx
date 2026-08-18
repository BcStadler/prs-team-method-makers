import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IProduct } from "./IProduct";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { productAPI } from "./ProductAPI";
import toast from "react-hot-toast";

interface IProductCardProps {
  product: IProduct;
  onRemove: (product: IProduct) => void;
}

function ProductCard({ product, onRemove }: IProductCardProps) {
  return (
    <Card className="" style={{ width: "23rem" }}>
      <ProgressBar now={30} variant="primary-subtle" />
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between1 align-items-center1 justify-content-end">
          {" "}
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
              <Dropdown.Item as={Link} to={`/products/edit/${product.id}`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                as="a"
                href="#"
                onClick={async (event) => {
                  event.preventDefault();
                  if (confirm("Are you sure you want to delete this product?")) {
                    if (product.id) {
                      await productAPI.delete(product.id);
                      onRemove(product);
                      toast.success("Successfully deleted.");
                    }
                  }
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br />
        <span className="fs-4 lh-l fw-medium">{product.name}</span>
        <br />
        <span className="fs-5 fw-light">${product.price}</span>{" "}
        <span className="text-lowercase fw-light text-secondary fs-6">
          /{product.unit}
        </span>
        <br />
        {/* <abbr title="Phone">P:</abbr> */}
        <div className="fw-lighter text-secondary  fs-6 mt-5">
          {product.vendor.name}
        </div>
        <div className="badge text-secondary bg-primary-subtle mt-51">
          {product.partNumber}
        </div>
      </address>
    </Card>
  );
}

export default ProductCard;
