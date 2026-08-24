import { SyntheticEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import { IProduct } from "./IProduct";
import { productAPI } from "./ProductAPI";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { IVendor } from "../vendors/IVendor";
import { vendorAPI } from "../vendors/VendorAPI";

function ProductList() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [vendors, setVendors] = useState<IVendor[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productCardSkeletons = Array.from(Array(12), (_unused, index) => {
    return <ProductCardSkeleton key={index} />;
  });

  async function loadProducts() {
    setLoading(true);
    try {
      const vendorId = searchParams.get("vendorId")
        ? Number(searchParams.get("vendorId"))
        : undefined;
      const data = await productAPI.list(vendorId);
      setProducts(data);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadVendors() {
      try {
        const data = await vendorAPI.list();
        setVendors(data);
      } catch (error: any) {
        toast.error(error.message, { duration: 6000 });
      }
    }

    loadVendors();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [searchParams]);

  function removeProduct(product: IProduct) {
    setProducts(products.filter((p) => p.id !== product.id));
  }

  function handleVendorChange(event: SyntheticEvent) {
    const newParams = new URLSearchParams(searchParams);
    const value = (event.target as HTMLSelectElement).value;

    if (value) newParams.set("vendorId", value);
    else newParams.delete("vendorId");

    setSearchParams(newParams);
  }

  return (
    <>
      <div className="d-flex flex-wrap gap-4 mb-4">
        <div className="d-flex flex-column w-25">
          <label htmlFor="vendor" className="form-label">
            Vendor
          </label>
          <select
            id="vendor"
            className="form-select"
            value={searchParams.get("vendorId") ?? ""}
            onChange={handleVendorChange}
          >
            <option value="">All vendors</option>
            {vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.id}>
                {vendor.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
        {loading && productCardSkeletons}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={removeProduct}
          />
        ))}
      </section>
    </>
  );
}

export default ProductList;
