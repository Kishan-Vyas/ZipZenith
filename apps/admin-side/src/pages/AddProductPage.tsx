import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar } from '@repo/ui/appbar';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>(['']);
  const [images, setImages] = useState<File[]>([]);
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [videoTutorialUrl, setVideoTutorialUrl] = useState('');

  const handleAddTag = () => setTags([...tags, '']);
  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleImageChange = (files: FileList | null) => {
    if (files) setImages([...images, ...Array.from(files)]);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const firestore = getFirestore();
      const storage = getStorage();
      
      // Upload images and get their URLs
      const imageUrls = await Promise.all(images.map(async (image) => {
        const storageRef = ref(storage, `products/images/${image.name}`);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      }));

      // Upload zip file and get its URL
      let zipFileUrl = '';
      if (zipFile) {
        const zipRef = ref(storage, `products/zips/${zipFile.name}`);
        await uploadBytes(zipRef, zipFile);
        zipFileUrl = await getDownloadURL(zipRef);
      }

      // Save product data to Firestore
      const productData = {
        name,
        description,
        tags,
        images: imageUrls,
        zipFileUrl,
        videoTutorialUrl,
      };

      await addDoc(collection(firestore, 'products'), productData);

      alert('Product added successfully!');
      navigate('/'); // Navigate to home or another page after submission
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar
        isAdmin={true}
        login={() => navigate('/login')}
        home={() => navigate('/')}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>
        <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tags:</label>
            {tags.map((tag, index) => (
              <input
                key={index}
                type="text"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 mb-2"
              />
            ))}
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
            >
              Add Tag
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Images:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImageChange(e.target.files)}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Zip File:</label>
            <input
              type="file"
              accept=".zip"
              onChange={(e) => setZipFile(e.target.files ? e.target.files[0] : null)}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Video Tutorial URL:</label>
            <input
              type="url"
              value={videoTutorialUrl}
              onChange={(e) => setVideoTutorialUrl(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md text-lg hover:bg-indigo-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
