import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import bootstrapIcons from "../assets/bootstrap-icons.svg";

import { IRequestLine } from "../requestLines/IRequestLine";
import { IProduct } from "../products/IProduct";
import { productAPI } from "../products/ProductAPI";
import { requestLineAPI } from "../requestLines/RequestLineAPI";
import { Link, useNavigate, useParams } from "react-router-dom";

function RequestLineForm() {
  let { lineId, id } = useParams<{ lineId: string; id: string }>();
  const requestLineId = Number(lineId);
  const requestId = Number(id);
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(
    undefined
  );

  let emptyRequestLine: IRequestLine = {
    id: undefined,
    quantity: 0,
    requestId: requestId,
    productId: 0,
    product: undefined,
    request: undefined
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRequestLine>({
    defaultValues: async () => {
      await loadProducts();

      if (!lineId) {
        return Promise.resolve(emptyRequestLine);
      } else {
        try {
          const requestLine = await requestLineAPI.find(requestLineId);
          return Promise.resolve(requestLine);
        } catch (error: any) {
          toast.error(error.message);
          throw new Error("There was an error loading the request line");
        }
      }
    },
  });

  async function loadProducts() {
    const data = await productAPI.list();
    setProducts(data);
  }

  let productId = watch("productId");
  let quantity = watch("quantity");

  useEffect(() => {
    let currentProduct = products.find(
      (p: IProduct) => p?.id === productId
    );
    setSelectedProduct(currentProduct);
  }, []);

  const save: SubmitHandler<IRequestLine> = async (requestLine) => {
    toast.success("Successfully saved.", { position: "bottom-center" });
    try {
      if (!requestLine.id) {
        requestLine = await requestLineAPI.post(requestLine);
      } else {
        await requestLineAPI.put(requestLine);
      }
      navigate(`/requests/detail/${requestLine.requestId}`);
    } catch (error: any) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <form className="form w-50" onSubmit={handleSubmit(save)}>
      <div className="card p-4">
        <h5 className="card-title">
          <strong>Item</strong>
        </h5>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Product
          </label>
          <select
            {...register("productId", {
              valueAsNumber: true,
              required: "Product is required",
            })}
            className={`form-select ${errors?.productId && "is-invalid"} `}
          >
            <option value="0">Select...</option>
            {products.map((p: IProduct) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errors?.productId?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <div className="form-label">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(selectedProduct?.price ?? 0)}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            id="quantity"
            {...register("quantity", {
              required: "Quantity is required",
              min: {
                value: 1,
                message: "Quantity must be at least 1",
              },
              valueAsNumber: true,
            })}
            type="number"
            className={`form-control ${errors?.quantity && "is-invalid"} `}
          />
          <div className="invalid-feedback">{errors?.quantity?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <div className="form-label">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format((selectedProduct?.price ?? 0) * quantity)}
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <Link
            to={`/requests/detail/${requestId}`}
            className="btn btn-outline-primary me-2"
          >
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <use xlinkHref={`${bootstrapIcons}#save`} />
            </svg>
            Save line
          </button>
        </div>
      </div>
    </form>
  );
}

export default RequestLineForm;
