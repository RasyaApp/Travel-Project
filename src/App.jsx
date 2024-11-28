import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LocationDetector from "./LocationDetector";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Destination from "./Pages/Destination";
import Login from "./Pages/Login";
import Wisata from "./Pages/Wisata";
import Admin from "./components/Admin";

import JawaBarat from "./Pages/JawaBarat";
import JawaTimur from "./Pages/JawaTimur";
import JawaTengah from "./Pages/JawaTengah";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./AuthProvider";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-800 ">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="destination" element={<Destination />} />
            <Route path="login" element={<Login />} />
            <Route path="wisata" element={<Wisata />} />

            {/* Lindungi rute admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly={true}>
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route path="jawatengah" element={<JawaTengah />} />
            <Route path="jawabarat" element={<JawaBarat />} />
            <Route path="jawatimur" element={<JawaTimur />} />

            {/* <Route path="locationdetector" element={<LocationDetector />} /> */}
          </Routes>

          <LocationDetector />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
