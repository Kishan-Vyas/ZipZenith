import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

interface Product {
  name: string;
  description: string;
  tags: string[];
}

export const getWebsites = async () => {
  const product = await getDocs(collection(db, "products"));
  return product.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addProduct = async (product: Product) => {
  await addDoc(collection(db, "products"), {
    name: product.name,
    description: product.description,
    tags: product.tags, 
  });
};
