import React from "react";

const products = [
  {
    id: 1,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Tailwind", "MongoDB"],
  },

  {
    id: 1,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Tailwind", "MongoDB"],
  },
  {
    id: 1,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Tailwind", "MongoDB"],
  },
  {
    id: 1,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Tailwind", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
  {
    id: 2,
    name: "Website",
    description: "This is a website for you!",
    tags: ["html", "css", "js", "Bootstrap", "MongoDB"],
  },
];

const DisplayAllProducts: React.FC = () => {
  return (
    <div className="w-full h-full px-4 py-3">
      <div className="text-2xl text-center  font-semibold font-mono">Website For You!</div>
     

      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
           <div key={index} className="max-w-[300px] h-full mx-auto w-full md:mx-auto">
           <div>
             <div className="bg-gray-200 rounded-lg w-full">  
               <img
                 src="https://flowbite.com/docs/images/logo.svg"
                 className="w-full p-3 "
               />
             </div>

             <h3 className="text-xl font-semibold px-1">{product.name}</h3>
            
             <div className="flex flex-wrap gap-1 mt-2  justify-start items-center ">
               {product.tags.map((tag, index) => (
                 <div key={index} className="bg-gray-200 rounded-md px-2  py-1 text-xs ">
                   <span>{tag}</span>
                 </div>
               ))}
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllProducts;
