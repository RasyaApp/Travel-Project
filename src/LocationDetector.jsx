import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function LocationDetector() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLocationDetected, setIsLocationDetected] = useState(false);
  const navigate = useNavigate(); // Digunakan untuk navigasi

  useEffect(() => {
    // Jika lokasi sudah terdeteksi, tidak melakukan apa-apa lagi
    if (isLocationDetected) return;

    // Jika geolocation didukung oleh browser, coba dapatkan lokasi
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          detectRegion(latitude, longitude); // Memanggil fungsi untuk mendeteksi wilayah
        },
        (error) => {
          setError("Geolocation error: " + error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation tidak didukung oleh browser ini.");
    }
  }, [isLocationDetected]); // Efek hanya dijalankan ketika isLocationDetected berubah

  const detectRegion = (latitude, longitude) => {
    if (latitude >= -8.1 && latitude <= -6.5 && longitude >= 108 && longitude <= 111.5) {
      // Jawa Tengah
      console.log("Anda berada di Jawa Tengah");
      navigate("/jawatengah"); // Menggunakan navigate dari react-router-dom
      setIsLocationDetected(true); // Tandai lokasi sudah terdeteksi
    } else if (latitude >= -8.7 && latitude <= -6.7 && longitude >= 111 && longitude <= 114.6) {
      // Jawa Timur
      console.log("Anda berada di Jawa Timur");
      navigate("/jawatimur");
      setIsLocationDetected(true);
    } else if (latitude >= -7.8 && latitude <= -5.9 && longitude >= 105.3 && longitude <= 108.5) {
      // Jawa Barat
      console.log("Anda berada di Jawa Barat");
      navigate("/jawabarat");
      setIsLocationDetected(true);
    } else {
      console.log("Lokasi di luar cakupan");
      setIsLocationDetected(true); // Tetap tandai untuk berhenti meskipun di luar cakupan
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {location ? (
        <div>
          {/* <h2>Lokasi Terdeteksi</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p> */}
        </div>
      ) : (
        !error && <div>Mendapatkan lokasi Anda...</div>
      )}
    </div>
  );
}

export default LocationDetector;
L