import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { ref, set, push, onValue } from "firebase/database";
import Swal from "sweetalert2";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    avatar: "",
  });

  useEffect(() => {
    const reviewsRef = ref(db, "reviews");
    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      setReviews(data ? Object.entries(data).map(([id, r]) => ({ id, ...r })) : []);
    });
    return unsubscribe;
  }, []);

  const handleAddReview = async () => {
    const { name, rating, comment, avatar } = newReview;


    if (!name.trim() || !comment.trim() || rating < 1 || rating > 5) {
   
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama, komentar, dan rating wajib diisi. Rating tidak boleh lebih dari 5",
      });
      
      return;
    }


    try {
      const reviewsRef = ref(db, "reviews");
      await push(reviewsRef, { name, rating, comment, avatar });
      setNewReview({ name: "", rating: 5, comment: "", avatar: "" });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Ulasan berhasil di tambahkan",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan ulasan.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-100 to-blue-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-12 mt-24">Tambah Ulasan Anda</h2>
      
      {/* Form Input for Adding Review */}
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto mb-12 border border-green-200">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Nama"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="Komentar"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="URL Avatar"
            value={newReview.avatar}
            onChange={(e) => setNewReview({ ...newReview, avatar: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="number"
            max="5"
            min="1"
            placeholder="Rating"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500"
          />
          <button onClick={handleAddReview} className="bg-green-500 mt-24 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
            Tambah Ulasan
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-lg p-6 rounded-xl w-full h-full mx-auto flex space-x-4 items-start border border-blue-200 overflow-visible overflow-x-auto">
            <img src={review.avatar} alt="User avatar" className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-800">{review.name}</h3>
              <p className="text-blue-500 font-semibold">Rating: {review.rating}/5</p>
              <p className="text-gray-600 mt-2 break-words overflow-hidden text-ellipsis max-h-24">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
