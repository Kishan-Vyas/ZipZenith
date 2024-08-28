import React from "react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Correct Swiper styles imports for Vite
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  images: string[]; // Array of image URLs
  zipFileUrl: string;
  videoTutorialUrl?: string;
}

interface CarouselProps {
  product: Product;
}

const ProductDescriptionPageBody: React.FC<CarouselProps> = ({ product }) => {
  return (
    <div className="p-4 pt-[60px] bg-gray-100 min-h-screen">
      <div className="flex ">
        <div className="flex-1 w-[50%]">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              EffectFade,
              Autoplay,
              A11y,
            ]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            a11y={{ enabled: true }}
            className="h-full"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[50%] px-4">
          <h1 className="text-3xl font-extrabold  text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600  mb-8">{product.description}</p>
          <div>
            <div className="text-lg text-gray-600 mb-4">Tech stack used</div>
            {product.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-200  rounded-lg text-sm p-2 mb-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="text-3xl font-bold  text-gray-900 ">
          How to run this site in your local machine!
        </div>
        <div className="p-2 text-lg">
          <div>
            <div>Step 1 - Download the project</div>

            <div className="my-4">
              <a
                href={product.zipFileUrl}
                download
                className="bg-blue-500 hover:bg-blue-600 text-white  py-1.5 px-3 rounded"
              >
                Download ZIP File
              </a>
            </div>
          </div>
          <div>
            <div>Step 2 - Watch the video</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hj3oQU1z4P0?si=NlPgM-0GFiEOk6iK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPageBody;
