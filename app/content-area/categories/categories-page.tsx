// import {
//      Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { allCategoriesCards } from "@/app/data/categories-data/categories-data";
// import { useState } from "react";
// import {Button} from "@/components/ui/button";
// import ContentCards1 from  "@/app/components/content-cards";



// export default function CategoriesPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <Card className="mx-6 mt-10 shadow-none border-none p-3 mb-8">
//       <CardHeader className="w-full flex flex-justify-between">
//         <div className="w-full flex justify-between items-center">
//           <CardTitle className="text-2xl">Product Categories</CardTitle>
//           <CardDescription>
//             {allCategoriesCards.length - 1} Categories
//           </CardDescription>
//         </div>
//         <Button>Add Category</Button>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-col gap-6 mt-7">
//           <Input
//             className="w-1/2 h-11"
//             placeholder="Search a category..."
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <ContentCards1
//             gridLayout={true}
//             showContent={false}
//             showFooter={false}
//             cards={allCategoriesCards}
//             classNameCard="shadow-none p-0"
//             search={searchTerm}
//             noFoundCardText="No categories found that matches your search."
//             onTitleClicked={(cardId)=>{
//                 console.log(cardId);
//             }}
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


