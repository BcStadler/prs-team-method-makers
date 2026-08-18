import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "./IProduct";
import { productAPI } from "./ProductAPI";
import ProductCardSkeleton from "./ProductCardSkeleton";
import toast from "react-hot-toast";

function ProductList() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const productCardSkeletons = Array.from(Array(12), (value, index) => {
    return <ProductCardSkeleton key={index} />;
  });

  async function loadProducts() {
    setLoading(true);
    try {
      const data = await productAPI.list();
      setProducts(data);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function removeProduct(product: IProduct) {
    setProducts(products.filter((p) => p.id !== product.id));
  }

  return (
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
  );
}

export default ProductList;
