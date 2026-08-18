import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "./IProduct";
import { IVendor } from "../vendors/IVendor";
import { productAPI } from "./ProductAPI";
import toast from "react-hot-toast";
import { vendorAPI } from "../vendors/VendorAPI";
import { useState } from "react";

let emptyProduct: IProduct = {
  id: undefined,
  partNumber: "",
  name: "",
  price: undefined,
  unit: "",
  photoPath: undefined,
  vendorId: undefined,
  vendor: {} as IVendor,
};

function ProductForm() {
  const navigate = useNavigate();
  let { id } = useParams<{ id: string }>();
  const [vendors, setVendors] = useState<IVendor[]>([]);

  async function loadVendors() {
    const data = await vendorAPI.list();
    setVendors(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    defaultValues: async () => {
      await loadVendors();

      if (!id) return Promise.resolve(emptyProduct);
      const productId = Number(id);
      return await productAPI.find(productId);
    },
  });

  const save: SubmitHandler<IProduct> = async (product) => {
    try {
      delete product.vendor; //property deleted because the embedded object does not need persisted
      if (!product.id) {
        product = await productAPI.post(product);
      } else {
        await productAPI.put(product);
      }
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
      return;
    }

    toast.success("Successfully saved.");
    navigate("/products");
  };

  return (
    <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)}>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-25">
          <label htmlFor="partNumber" className="form-label">
            Product Number
          </label>
          <input
            id="partNumber"
            {...register("partNumber", {
              required: "Number is required",
              maxLength: {
                value: 20,
                message: "Exceeded maximum length",
              },
            })}
            type="text"
            className={`form-control ${errors?.partNumber && "is-invalid"} `}
            placeholder="Enter product number"
          />
          <div className="invalid-feedback">{errors?.partNumber?.message}</div>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            className={`form-control ${errors?.name && "is-invalid"} `}
            placeholder="Enter product name"
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>
      </div>
      <div className="row-2 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-25">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            {...register("price", {
              required: "Price is required",
            })}
            type="number"
            step="0.01"
            className={`form-control ${errors?.price && "is-invalid"} `}
            placeholder="Enter product's price"
          />
          <div className="invalid-feedback">{errors?.price?.message}</div>
        </div>
        <div className="mb-3 w-25">
          <label htmlFor="unit" className="form-label">
            Unit
          </label>
          <input
            id="unit"
            {...register("unit", {
              required: "Unit is required",
            })}
            type="text"
            className={`form-control ${errors?.unit && "is-invalid"} `}
            placeholder="Enter unit"
          />
          <div className="invalid-feedback">{errors?.unit?.message}</div>
        </div>
        <div className="mb-3 w-50">
          <label className="form-label" htmlFor="vendorId">
            Vendor
          </label>
          <select
            id="vendorId"
            {...register("vendorId", {
              valueAsNumber: true,
              required: "Vendor is required",
            })}
            className={`form-select ${errors?.vendorId && "is-invalid"} `}
          >
            <option value="">Select Vendor...</option>
            {vendors.map((v: IVendor) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errors?.vendorId?.message}</div>
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4"></div>
      <div className="row-3 d-flex flex-row justify-content-end w-100 gap-4">
        <div className="d-flex justify-content-end mt-4">
          <Link to={"/products"} className="btn btn-outline-primary me-2">
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
            Save product
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
