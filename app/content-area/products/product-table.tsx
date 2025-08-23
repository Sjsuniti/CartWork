import { DataTable } from "@/app/components/data-table";
import { useSearchStore } from "@/app/hooks/useSearchStore";
import { transformProductsData } from "@/app/data/products/transformed-products";
import { useState } from "react";
import { Button } from "@/components/ui/button";  // ✅ Correct import
import { productListHeader, products } from "@/app/data/products/initial_products_data"; // ✅ Example import

export default function ProductTable() {
  const { searchProduct, setSearchProduct } = useSearchStore();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  return (
    <DataTable
      headers={productListHeader}
      rows={transformProductsData(products)}
      search={{
        searchValue: searchProduct,
        setSearchValue: setSearchProduct,
        keyToSearchBy: "name",
        hideSearchInput: true,
      }}
      showActionsColumn={true}
      rowHeight={44}
      title="Product List"
      className="p-5 border-none rounded-lg shadow-none"
      showBorderLine={false}
      description={`${products.length} Products Found`} // ✅ Corrected
      filterBy={["category", "status", "rating"]}
      pagination={{ rowsPerPage: 10 }}
      showCheckboxes={{ enable: true }}
      columnsToHide={["sold", "rating"]}
      showSortingButtons={true}
      sort={{ defaultProperty: "name" }}
      callToAction={<Button>Export</Button>} // ✅ Correct import
      emptyDataText="No product found!"
       sortOrder={sortOrder} // ❌ Remove if not supported
       setSortOrder={setSortOrder}
    />
  );
}
