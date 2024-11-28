import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { ref, onValue } from "firebase/database";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const galleryRef = ref(db, "gallery");
    const unsubscribe = onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data ? Object.entries(data).map(([id, img]) => ({ id, ...img })) : []);
    });
    return unsubscribe;
  }, []);

  return (
<div className="py-10 px-6 min-h-screen">
  <h1 className="text-3xl font-bold text-center text-white mb-8 mt-16">Gallery</h1>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {images.map((img) => (
      <div
        key={img.id}
        className="shadow-lg rounded-lg overflow-hidden bg-gray-800 transform transition-transform hover:scale-105"
      >
        <img
          src={img.src}
          alt={img.title}
          className="h-60 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white">{img.title}</h3>
          <p className="text-gray-400 mt-2">
            {img.description || "No description"}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Gallery;
