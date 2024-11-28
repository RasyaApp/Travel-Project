import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "/src/App.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      navigate("/admin");
    } catch (error) {
      setError("Login gagal. Periksa email dan password Anda.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen w-full flex items-center justify-center relative overflow-hidden">
    {/* Animasi Latar Belakang */}
    <div className="absolute top-[-250px] left-[-250px] bg-blue-600 h-[500px] w-[500px] rounded-full animate-pulse"></div>
    <div className="absolute top-[15%] left-[90%] bg-[#93DFFF] h-[150px] w-[150px] rounded-full animate-bounce"></div>
    <div className="absolute bottom-[-300px] right-[-150px] bg-blue-500 h-[600px] w-[600px] rounded-full opacity-40 animate-pulse"></div>

  
    {/* Form Login */}
    <div className="bg-gray-900 h-screen w-full flex items-center justify-center relative overflow-hidden">
  {/* Animasi Latar Belakang */}
  <div className="absolute top-[-250px] left-[-250px] bg-blue-600 h-[500px] w-[500px] rounded-full animate-pulse"></div>
  <div className="absolute top-[15%] left-[90%] bg-[#93DFFF] h-[150px] w-[150px] rounded-full animate-bounce"></div>
  <div className="absolute bottom-[-300px] right-[-150px] bg-blue-500 h-[600px] w-[600px] rounded-full opacity-40 animate-pulse"></div>
  <div className="absolute left-[80%] top-[70%] h-[300px] w-[300px]">
    <img
      src="/src/assets/Segitiga.png"
      alt="Segitiga"
      className="animate-spin-slow opacity-70"
    />
  </div>

  {/* Form Login */}
  <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-[360px] sm:max-w-[400px] md:max-w-[500px] flex flex-col items-center z-10">
    <h1 className="text-white text-2xl md:text-3xl font-bold italic mb-4 text-center animate-fadeIn">
      Login to Your Account
    </h1>
    {error && (
      <p className="text-red-500 text-center mb-3">
        {error}
      </p>
    )}

    <form className="w-full space-y-4">
      {/* Input Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full text-base px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-transform transform hover:scale-105"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Input Password */}
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full text-base px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-transform transform hover:scale-105"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Tombol Login */}
      <button
        type="button"
        onClick={handleLogin}
        className="w-full py-2 bg-blue-600 text-lg font-semibold text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95 shadow-md"
      >
        Login
      </button>
    </form>
  </div>
</div>

  </div>
  
  );
}
