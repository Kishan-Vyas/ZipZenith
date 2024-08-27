import React from 'react'
import  ProductDescriptionPageBody  from '@repo/ui/productdescriptionpage/productdescriptionpagebody'; 

interface Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    images: string[]; // Array of image URLs
  }
  

// Example usage with a product object
const product: Product = {
    id: 1,
    name: 'Sample Product',
    description: 'This is a description of the sample product.',
    tags: ['tag1', 'tag2', 'tag3'],
    images: [
      'https://via.placeholder.com/600x400?text=Image+1',
      'https://via.placeholder.com/600x400?text=Image+2',
      'https://via.placeholder.com/600x400?text=Image+3',
    ],
  };

const ProductDescriptionPage: React.FC = () => {
    
  return (
    <div>
        <ProductDescriptionPageBody product={product} />
    </div>
  )
}

export default ProductDescriptionPage
