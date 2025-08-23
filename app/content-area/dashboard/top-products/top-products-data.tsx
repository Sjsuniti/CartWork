import { UniformArray } from "@/app/components/list-card";
import { Badge } from "@/components/ui/badge";
import { MdPropane } from "react-icons/md";

// ✅ Fixed typo: 'produsct' → 'product'
type Product = {
  id: string;
  product: JSX.Element;
  price: number;
  callToAction: JSX.Element;
};

// ✅ Top products array without id and price (as you intended)
export const TopProductsData: UniformArray<Omit<Product, "price" | "id">> = [
  {
    product: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
          <MdPropane size={18} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold hover:text-primary">
            Sony WH-1000XM5 Headphones
          </span>
          <span className="text-slate-600">Price: Rs 4000</span>
        </div>
      </div>
    ),
    callToAction: (
      <Badge
        variant="outline"
        className="h-10 bg-neutral-50 border-none dark:bg-neutral-800"
      >
        512 Sales
      </Badge>
    ),
  },

  {
    product: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
          <MdPropane size={18} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold hover:text-primary">Logitech MX</span>
          <span className="text-slate-600">Price: Rs 4000</span>
        </div>
      </div>
    ),
    callToAction: (
      <Badge
        variant="outline"
        className="h-10 bg-neutral-50 border-none dark:bg-neutral-800"
      >
        684 Sales
      </Badge>
    ),
  },

  {
    product: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
          <MdPropane size={18} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold hover:text-primary">Apple AirPods Pro</span>
          <span className="text-slate-600">Price: Rs 4000</span>
        </div>
      </div>
    ),
    callToAction: (
      <Badge
        variant="outline"
        className="h-10 bg-neutral-50 border-none dark:bg-neutral-800"
      >
        569 Sales
      </Badge>
    ),
  },
];
