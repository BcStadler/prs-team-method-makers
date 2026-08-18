import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";
import { IVendor } from "./IVendor";
import { vendorAPI } from "./VendorAPI";
import VendorCardSkeleton from "./VendorCardSkeleton";
import toast from "react-hot-toast";

function VendorList() {
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState<IVendor[]>([]);
  const vendorCardSkeletons = Array.from(Array(12), (value, index) => {
    return <VendorCardSkeleton key={index} />;
  });

  async function loadVendors() {
    setLoading(false);
    try {
      setLoading(true);
      const data = await vendorAPI.list();
      setVendors(data);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    } finally {
      setLoading(false);
    }
  }

  function removeVendor(vendor: IVendor) {
    setVendors(vendors.filter((v) => v.id !== vendor.id));
  }

  useEffect(() => {
    loadVendors();
  }, []);

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {loading && vendorCardSkeletons}
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} onRemove={removeVendor} />
      ))}
    </section>
  );
}

export default VendorList;
