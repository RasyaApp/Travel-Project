import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (

    <>
      {/* <div className="flex-shrink-0 w-full sm:w-1/3 mt-24 ">
      <img
        src="src/assets/Foto.png"
        alt="Foto Profil"
        className="w-full h-auto hover:scale-105 "
      />
    </div> */}





      <div className=" ">
        <div className="min-h-screen p-4 flex flex-col items-center">
          {/* Kontainer Utama */}
          <div className="flex flex-col sm:flex-row sm:px-[9px] w-full max-w-7xl items-center sm:items-start justify-between space-y-6 sm:space-y-[200px] lg:spac sm:mt-[70px] md:mt-28 lg:mt-32">
            {/* Konten Kiri */}
            <div className="w-full sm:w-2/3  flex flex-col lg:justify-evenly">
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full sm:w-2/3 flex flex-col justify-evenly sm:items-center space-y-6 px-4 sm:px-8 md:mt-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center sm:text-left"
                >
                  <h2 className="text-white italic text-justify leading-relaxed mt-[100px] lg:mt-0 lg:text-[30px] lg:leading-8 text-sm sm:text-base md:text-[25px] md:text-justify md:mt-[100px]">
                    Selamat datang di <span className="font-bold">REYZ TRAVEL</span> – platform perjalanan digital yang
                    dirancang untuk memudahkan eksplorasi keindahan Indonesia!
                    <br />
                    <br />
                    Kami percaya bahwa setiap perjalanan memiliki cerita, dan kami ingin menjadi bagian dari cerita Anda.
                    Dengan fokus utama pada destinasi di Jawa Barat, Jawa Tengah, dan Jawa Timur, kami berkomitmen untuk
                    memberikan pengalaman terbaik melalui teknologi inovatif dan fitur personalisasi.
                  </h2>
                </motion.div>
              </motion.div>
            </div>

            {/* Konten Kanan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 w-full  lg:w-1/2   mt-[100px] bg-white border-2 border-[#BF2222] rounded-lg p-4 shadow-lg  "
            >
              <h1 className="text-[#BF2222] font-extrabold italic text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                About
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-2 text-gray-700 font-light text-sm md:text-lg lg:text-xl italic"
              >
                <h3>
                  <span className="font-semibold">Name:</span> Rasya Aditiya P.P
                </h3>
                <h3>
                  <span className="font-semibold">Phone:</span> +62 098765498
                </h3>
                <h3>
                  <span className="font-semibold">Tanggal Lahir:</span> 16 Mei 2007
                </h3>
                <h3>
                  <span className="font-semibold">Status:</span> Pelajar
                </h3>
                <h3>
                  <span className="font-semibold">Jurusan:</span> TKJ
                </h3>
                <h3>
                  <span className="font-semibold">Umur:</span> 17th
                </h3>
              </motion.div>
            </motion.div>
          </div>

          {/* Tombol Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-[50px] mb-[32px] bg-[#BF2222] hover:scale-110 transition-transform duration-300 ease-in-out rounded-full flex justify-center items-center p-2 h-10 w-28 sm:h-12 sm:w-36"
          >
            <a
              href="https://rasyaaditiyaputrapratama.vercel.app/"
              className="text-white font-semibold text-sm sm:text-lg"
            >
              Portfolio
            </a>
          </motion.div>
        </div>
      </div>

    </>
  );
}