import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Correct Swiper styles imports for Vite
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  images: string[]; // Array of image URLs
}

interface CarouselProps {
  product: Product;
}

const ProductDescriptionPageBody: React.FC<CarouselProps> = ({ product }) => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
        {product.name}
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        {product.description}
      </p>

    <div></div>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay, A11y]}
          
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
    </div>
  );
};


export default ProductDescriptionPageBody;


