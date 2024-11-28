import React, { useState, useEffect, useContext } from "react";
import { db } from "../Firebase"; // Pastikan path ini sesuai
import { ref, push, onValue, update, remove } from "firebase/database";
import { AuthContext } from "../AuthProvider"; // Pastikan path ini sesuai

import Swal from "sweetalert2";


const Admin = () => {

  return (
    <div className=" py-10 px-4 min-h-screen w-full">

      {/* Pengelolaan Ulasan */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4">Kelola Ulasan</h3>
        <ReviewManagement />
      </section>

      {/* Pengelolaan Galeri */}
      <section>
        <h3 className="text-xl font-bold text-white mb-4">Kelola Galeri</h3>
        <GalleryManagement />
      </section>
    </div>
  );
};



const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    avatar: "",
  });
  const [editReview, setEditReview] = useState({
    id: null,
    name: "",
    rating: 5,
    comment: "",
    avatar: "",
  });

  // Ambil data ulasan dari Firebase
  useEffect(() => {
    const reviewsRef = ref(db, "reviews");
    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      setReviews(data ? Object.entries(data).map(([id, r]) => ({ id, ...r })) : []);
    });
    return unsubscribe;
  }, []);

  // Fungsi untuk menambahkan ulasan
  const handleAddReview = async () => {
    const { name, rating, comment, avatar } = newReview;

    if (!name.trim() || !comment.trim() || rating < 1 || rating > 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama, komentar, dan rating (1-5) wajib diisi.",
      });
      return;
    }

    try {
      const reviewsRef = ref(db, "reviews");
      await push(reviewsRef, { name, rating, comment, avatar });
      setNewReview({ name: "", rating: 5, comment: "", avatar: "" });
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Ulasan berhasil ditambahkan.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Gagal menambahkan ulasan.",
      });
    }
  };

  // Fungsi untuk memperbarui ulasan
  const handleUpdateReview = async () => {
    if (!editReview.name.trim() || !editReview.comment.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama dan komentar tidak boleh kosong.",
      });
      return;
    }

    if (editReview.rating < 1 || editReview.rating > 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rating harus antara 1 dan 5.",
      });
      return;
    }

    try {
      const reviewRef = ref(db, `reviews/${editReview.id}`);
      await update(reviewRef, {
        name: editReview.name,
        rating: editReview.rating,
        comment: editReview.comment,
        avatar: editReview.avatar,
      });
      setEditReview({ id: null, name: "", rating: 5, comment: "", avatar: "" });
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Ulasan berhasil diperbarui.",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Gagal memperbarui ulasan.",
      });
    }
  };

  // Fungsi untuk menghapus ulasan
  const handleDeleteReview = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Ulasan ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await remove(ref(db, `reviews/${id}`));
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Ulasan berhasil dihapus.",
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Gagal menghapus ulasan.",
        });
      }
    }
  };

  return (
    <div className="bg-slate-400 py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-white mt-10">
        Kelola Ulasan
      </h2>

      {/* Form Tambah Ulasan */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-white text-lg font-bold mb-4">Tambah Ulasan</h3>
        <input
          type="text"
          placeholder="Nama"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="block w-full p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Avatar URL"
          value={newReview.avatar}
          onChange={(e) => setNewReview({ ...newReview, avatar: e.target.value })}
          className="block w-full p-2 mb-2 rounded"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={newReview.rating}
          onChange={(e) =>
            setNewReview({
              ...newReview,
              rating: Math.min(5, Math.max(1, e.target.value)),
            })
          }
          className="block w-full p-2 mb-2 rounded"
        />
        <textarea
          placeholder="Komentar"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          className="block w-full p-2 mb-2 rounded"
        ></textarea>
        <button
          onClick={handleAddReview}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Tambah Ulasan
        </button>
      </div>

      {/* Form Edit Ulasan */}
      {editReview.id && (
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-white text-lg font-bold mb-4">Edit Ulasan</h3>
          <input
            type="text"
            placeholder="Nama"
            value={editReview.name}
            onChange={(e) =>
              setEditReview({ ...editReview, name: e.target.value })
            }
            className="block w-full p-2 mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Avatar URL"
            value={editReview.avatar}
            onChange={(e) =>
              setEditReview({ ...editReview, avatar: e.target.value })
            }
            className="block w-full p-2 mb-2 rounded"
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={editReview.rating}
            onChange={(e) =>
              setEditReview({
                ...editReview,
                rating: Math.min(5, Math.max(1, e.target.value)),
              })
            }
            className="block w-full p-2 mb-2 rounded"
          />
          <textarea
            placeholder="Komentar"
            value={editReview.comment}
            onChange={(e) =>
              setEditReview({ ...editReview, comment: e.target.value })
            }
            className="block w-full p-2 mb-2 rounded"
          ></textarea>
          <button
            onClick={handleUpdateReview}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Simpan Perubahan
          </button>
          <button
            onClick={() =>
              setEditReview({ id: null, name: "", rating: 5, comment: "", avatar: "" })
            }
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Batal
          </button>
        </div>
      )}

      {/* Daftar Ulasan */}
      <ul>
        {reviews.map((r) => (
          <li key={r.id} className="bg-gray-800 p-4 rounded mb-2 flex items-center">
            <img
              src={r.avatar || "https://via.placeholder.com/50"}
              alt={`${r.name}'s avatar`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-lg font-bold text-white">{r.name}</h4>
              <p className="text-white">Rating: {r.rating}</p>
              <p className="text-white">{r.comment}</p>
              <div className="mt-2">
                <button
                  onClick={() => setEditReview(r)}
                  className="bg-yellow-500 px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteReview(r.id)}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



//----------------------------------------------------------------------------------------------------------------------




const GalleryManagement = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState({
    src: "",
    title: "",
    description: "",
  });
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    const galleryRef = ref(db, "gallery");
    const unsubscribe = onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data ? Object.entries(data).map(([id, img]) => ({ id, ...img })) : []);
    });
    return unsubscribe;
  }, []);

  const handleAddImage = async () => {
    if (!newImage.src.trim() || !newImage.title.trim()) {
      alert("URL dan judul gambar harus diisi.");
      return;
    }

    try {
      const galleryRef = ref(db, "gallery");
      await push(galleryRef, newImage);
      setNewImage({ src: "", title: "", description: "" });
      alert("Gambar berhasil ditambahkan.");
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan gambar.");
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      const imageRef = ref(db, `gallery/${id}`);
      await remove(imageRef);
      alert("Gambar berhasil dihapus.");
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus gambar.");
    }
  };

  const handleUpdateImage = async () => {
    if (!editImage.src.trim() || !editImage.title.trim()) {
      alert("URL dan judul gambar harus diisi.");
      return;
    }

    try {
      const imageRef = ref(db, `gallery/${editImage.id}`);
      await update(imageRef, {
        src: editImage.src,
        title: editImage.title,
        description: editImage.description || "",
      });
      setEditImage(null);
      alert("Gambar berhasil diperbarui.");
    } catch (error) {
      console.error(error);
      alert("Gagal memperbarui gambar.");
    }
  };

  return (
    <div className="bg-black py-10 px-4 min-h-screen mt-24 ">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Gallery Management</h1>
      {/* Form untuk Tambah/Edit Gambar */}
      <div className="mb-6 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-white mb-4">
          {editImage ? "Edit Image" : "Add Image"}
        </h2>
        <input
          type="text"
          placeholder="Image URL"
          value={editImage ? editImage.src : newImage.src}
          onChange={(e) =>
            editImage
              ? setEditImage({ ...editImage, src: e.target.value })
              : setNewImage({ ...newImage, src: e.target.value })
          }
          className="w-full mb-2 p-2 rounded border border-gray-600"
        />
        <input
          type="text"
          placeholder="Title"
          value={editImage ? editImage.title : newImage.title}
          onChange={(e) =>
            editImage
              ? setEditImage({ ...editImage, title: e.target.value })
              : setNewImage({ ...newImage, title: e.target.value })
          }
          className="w-full mb-2 p-2 rounded border border-gray-600"
        />
        <textarea
          placeholder="Description (optional)"
          value={editImage ? editImage.description : newImage.description}
          onChange={(e) =>
            editImage
              ? setEditImage({ ...editImage, description: e.target.value })
              : setNewImage({ ...newImage, description: e.target.value })
          }
          className="w-full mb-2 p-2 rounded border border-gray-600"
        ></textarea>
        {editImage ? (
          <button
            onClick={handleUpdateImage}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Update Image
          </button>
        ) : (
          <button
            onClick={handleAddImage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Image
          </button>
        )}
        {editImage && (
          <button
            onClick={() => setEditImage(null)}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
      </div>
      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="shadow-lg rounded-lg overflow-hidden bg-gray-800">
            <img src={img.src} alt={img.title} className="h-72 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{img.title}</h3>
              <p className="text-gray-400">{img.description || "No description"}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setEditImage(img)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteImage(img.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Admin;

