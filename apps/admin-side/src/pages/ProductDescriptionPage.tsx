import React from 'react'
import  ProductDescriptionPageBody  from '@repo/ui/productdescriptionpage/productdescriptionpagebody'; 
import { AppBar } from '@repo/ui/appbar';
import { useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    images: string[]; // Array of image URLs
    zipFileUrl: string; 
    videoTutorialUrl?: string;
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
    zipFileUrl: 'https://examplefile.com/file-download/36',
    videoTutorialUrl: 'https://www.youtube.com/embed/hj3oQU1z4P0?si=NlPgM-0GFiEOk6iK',
  };

const ProductDescriptionPage: React.FC = () => {

  const navigate = useNavigate();
    
  return (
    <div>
      <AppBar
          isAdmin={true}
          login={() => {
            navigate("/login");
          }}
          home={() => {
            navigate("/");
          }}
        />
        <ProductDescriptionPageBody product={product} />
    </div>
  )
}

export default ProductDescriptionPage
