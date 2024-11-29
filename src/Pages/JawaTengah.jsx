// sm:bg-blue-300 md:bg-yellow-300 lg:bg-green-300

import React from 'react';

const JawaTengah = () => {
  return (
    <>
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen">
        <img
          src="/src/assets/JATENG.png"
          alt="Jawa Tengah"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="">
        <div className="justify-center items-center px-4 md:px-8 lg:px-16">
          <h1 className="text-[55px] text-center font-bold italic text-white">
            Explore Jawa Tengah
          </h1>

          <h2 className="text-center mt-10 font-semibold italic text-[35px] text-yellow-300">
            Temukan budaya, pemandangan yang indah dan pengalaman yang tak terlupakan
          </h2>

          <h3 className="mt-10 mb-4 font-light text-[22px] text-gray-300 text-justify sm:mx-8 md:mx-16 lg:mx-32">
            Jawa Tengah adalah provinsi di Indonesia yang terletak di tengah Pulau Jawa, dengan ibu kota Semarang. Dikenal
            dengan kekayaan budaya, sejarah, dan alamnya, seperti Kota lama, Candi Borobudur, Danau Plateau, dan pantai-pantai
            di selatan. Kuliner khasnya meliputi Gudeg, Selat Solo, dan Lumpia. Jawa Tengah menawarkan pengalaman wisata
            yang memadukan keindahan alam, situs bersejarah, dan budaya tradisional.
          </h3>
        </div>

        <div className="py-16 px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center group">
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/JawaTengah/Kota Lama.png"
                  alt="Kota Lama in Central Java"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="text-yellow-300 font-semibold text-base lg:text-lg">Kota Lama</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center group">
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/JawaTengah/Borobudur.png"
                  alt="Borobudur"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="text-yellow-300 font-semibold text-base lg:text-lg">Candi Borobudur</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center group md:flex sm:hidden lg:block">
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/JawaTengah/DiengPlateau.png"
                  alt="Dieng Plateau"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="text-yellow-300 font-semibold text-base lg:text-lg">Dieng Plateau</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center mt-12">
            <h1 className="text-[28px] lg:text-[40px] font-bold text-yellow-300 leading-tight mb-6">
              Temukan pesona Jawa Tengah dengan keindahan arsitektur kuno dan alam yang asri
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl">
              Jelajahi kekayaan budaya dan alam yang menakjubkan, dari Kota Lama hingga Dieng Plateau, yang menyimpan sejarah
              panjang dan keindahan alam yang luar biasa.
            </p>
          </div>
        </div>

        <div className="py-16 px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex justify-center relative">
              <img
                src="/src/assets/JawaTengah/Makanan/Lumpia.png"
                alt="Lumpia Khas Semarang"
                className="w-full h-[300px] shadow-lg object-cover rounded-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black rounded-[10%] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                  Lumpia Khas Semarang
                </p>
              </div>
            </div>

            <div className="flex justify-center relative">
              <img
                src="/src/assets/JawaTengah/Makanan/Selat Solo.png"
                alt="Selat Solo"
                className="w-full h-[300px] shadow-lg object-cover rounded-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black rounded-[10%] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                  Selat Khas Solo
                </p>
              </div>
            </div>

            <div className="flex relative justify-center">
              <img
                src="/src/assets/JawaTengah/Makanan/Gudeg.png"
                alt="Gudeg Khas Jogja"
                className="w-full h-[300px] shadow-lg object-cover rounded-[10%] transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black rounded-[10%] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                  Gudeg Khas Jogja
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:col-span-3">
              <h1 className="text-[30px] lg:text-[40px] font-bold text-yellow-300 leading-tight italic">
                Jawa Tengah terkenal dengan makanan khasnya yang menggugah selera
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JawaTengah;
