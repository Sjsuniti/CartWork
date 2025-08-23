import {
  formatDate,
  formatPrice,
  truncateString,
} from "@/app/utils/shared_utilities";
import * as FaIcons from "react-icons/fa";
import { Product , Status } from "./initial_products_data";
import { renderBadge, renderStarRating } from "./utility-function";
import { IconType } from "react-icons";


export function transformProductsData(productArray: Product[]) {
  return productArray.map(({ icon, ...product }) => {
    // 🔹 If icon is a string, map it to the actual component
    const IconComponent =
      typeof icon === "string" && (FaIcons as Record<string, IconType>)[icon]
        ? (FaIcons as Record<string, IconType>)[icon]
        : FaIcons.FaBox;

    return {
      ...product,
      name: (
        <div className="flex items-center gap-3">
          <div className="bg-primary/5 size-9 rounded-md flex justify-center items-center text-primary">
            <IconComponent />
          </div>

          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col"
          >
            <span className="cursor-pointer hover:underline hover:text-primary">
              {truncateString(product.name, 23)}
            </span>
          </div>
        </div>
      ),
      status: renderBadge(product.status as Status),
      category: <span className="text-primary">{product.category}</span>,
      price: <span className="font-semibold">{formatPrice(product.price)}</span>,
      createdAt: <span className="text-gray-500">{formatDate(product.createdAt)}</span>,
      ratingDisplay: renderStarRating(product.rating),
      rating: product.rating,
    };
  });
}