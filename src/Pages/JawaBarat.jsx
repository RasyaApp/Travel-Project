import React from 'react';


const JawaTengah = () => {
  return (
    <>


      {/* Section Title and Description */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen">
        <img
          src="/src/assets/Jawa Barat/JABAR.png"
          alt="Jawa Barat"
          className="w-full h-full object-cover object-center"
        />
      </div>


      <div className=" w-full">
        <h1 className="text-yellow-300 text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-center font-bold italic py-6">
          Explore Jawa Barat
        </h1>

        <h2 className="text-gray-300 text-center px-4 sm:px-10 md:px-20 lg:px-32 font-semibold italic text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
          Temukan budaya, pemandangan yang indah, dan pengalaman yang tak terlupakan
        </h2>

        <h3 className="text-gray-400 text-justify px-4 sm:px-10 md:px-24 lg:px-32 mt-10 mb-16 font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
          Jawa Barat adalah provinsi di Indonesia yang terletak di bagian barat Pulau Jawa,
          dengan ibu kota Bandung. Provinsi ini terkenal dengan kekayaan budaya Sunda, sejarah,
          dan keindahan alamnya, seperti Kawah Putih, Gunung Tangkuban Perahu, dan pantai-pantai
          di selatan. Kuliner khasnya meliputi Nasi Liwet Sunda, Surabi, dan Batagor. Jawa Barat
          menawarkan pengalaman wisata yang memadukan pesona alam pegunungan, situs budaya, dan
          tradisi yang kental.
        </h3>

        {/* Section Grid: Wisata */}
        <div className="py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ------- */}
            <div className="flex justify-center group ">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg ">
                <img
                  src="/src/assets/Jawa Barat/Wisata/Kawah Putih.png"
                  alt="Kawah Putih Bandung"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Kawah Putih
                  </p>
                </div>
              </div>
            </div>

            {/* Kawah Putih */}
            <div className="flex justify-center group  lg:hidden ">
              <div className="relative flex items-center justify-center rounded-full ">
                <img
                  src="/src/assets/Jawa Barat/Wisata/Situ Patenggang.jpg"
                  alt="Situ Patenggang"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-full"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                   Situ Patenggang
                  </p>
                </div>
              </div>
            </div>

            {/* Tangkuban Perahu */}
            <div className="flex justify-center group">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/Jawa Barat/Wisata/Tangkuban Perahu.png"
                  alt="Tangkuban Perahu"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Tangkuban Perahu
                  </p>
                </div>
              </div>
            </div>

            {/* Air Terjun Pelangi */}
            <div className="flex justify-center group">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/Jawa Barat/Wisata/Air Terjun Pelangi.png"
                  alt="Air Terjun Pelangi"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Air Terjun Pelangi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className="flex flex-col justify-center items-center text-center lg:col-span-3">
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 px-4">
            Temukan pesona Jawa Barat dengan keindahan arsitektur khas Sunda dan alam yang asri.
          </h1>
          <p className="text-lg text-white px-4 text-justify mt-10">
            Jelajahi kekayaan budaya dan alam Jawa Barat, dari Air Terjun Pelangii hingga Kawah Putih
            dan Tangkuban Perahu, yang memadukan sejarah dan keindahan alam luar biasa.
          </p>
        </div>

        {/* Section Grid: Kuliner */}
        <div className="py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* batagor */}
            <div className="flex justify-center group lg:hidden">
              <div className="relative flex items-center justify-center overflow-hidden shadow-lg rounded-lg">
                <img
                  src="/src/assets/Jawa Barat/Makanan/batagor.png"
                  alt="batagor"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-black text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    batagor
                  </p>
                </div>
              </div>
            </div>

            {/* Seblak */}
            <div className="flex justify-center group ">
              <div className="relative flex items-center justify-center overflow-hidden shadow-lg rounded-lg">
                <img
                  src="/src/assets/Jawa Barat/Makanan/Seblak.png"
                  alt="batagor"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Seblak
                  </p>
                </div>
              </div>
            </div>

            {/* Nasi Liwet */}
            <div className="flex justify-center group">
              <div className="relative flex items-center justify-center overflow-hidden shadow-lg rounded-lg">
                <img
                  src="/src/assets/Jawa Barat/Makanan/Nasi Liwet.png"
                  alt="Tangkuban Perahu"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Nasi Liwet
                  </p>
                </div>
              </div>
            </div>

            {/* Surabi */}
            <div className="flex justify-center group">
              <div className="relative flex items-center justify-center overflow-hidden shadow-lg rounded-lg">
                <img
                  src="/src/assets/Jawa Barat/Makanan/Surabi.png"
                  alt="Surabi"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Surabi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Text */}
        <div className="flex flex-col justify-center items-center text-center lg:col-span-3">
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 italic">
            Jawa Barat terkenal dengan makanan khasnya yang lezat
          </h1>

        </div>


        {/* Section Grid: Budaya */}
        <div className="py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Baju Kampret */}
            <div className="flex justify-center group ">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/Jawa Barat/Budaya/Baju Kampret.png"
                  alt="Baju Kampret"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Baju Kampret
                  </p>
                </div>
              </div>
            </div>
            {/* angklung */}
            <div className="flex justify-center group  lg:hidden">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/Jawa Barat/Budaya/angklung.png"
                  alt="angklung"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    angklung
                  </p>
                </div>
              </div>
            </div>

            {/* Tari Jaipong */}
            <div className="flex justify-center group">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/Jawa Barat/Budaya/Tari Jaipong.png"
                  alt="Tari Jaipong"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Tari Jaipong
                  </p>
                </div>
              </div>
            </div>

            {/* Wayang Golek */}
            <div className="flex justify-center group">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <img
                  src="/src/assets/Jawa Barat/Budaya/Wayang Golek.png"
                  alt="Wayang Golek"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Wayang Golek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Text */}
        <div className="flex flex-col justify-center items-center text-center lg:col-span-3">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-300 leading-tight mb-16 italic">
            Budaya dan Kesenian Jawa Barat
          </h1>
          <p className="text-lg text-white max-w-2xl mb-10 text-justify px-6">
            Budaya Jawa Barat juga kaya akan kesenian tradisional, seperti angklung dan wayang golek. Angklung adalah alat musik khas Sunda yang terbuat dari bambu dan menghasilkan nada harmonis saat digetarkan. Wayang golek adalah pertunjukan boneka kayu yang mengisahkan cerita klasik atau legenda lokal, sering kali membawa pesan moral dan kebijaksanaan. Kesenian ini mencerminkan kedalaman budaya Sunda yang penuh nilai dan warisan.
          </p>
        </div>

      </div>

    </>
  );
};

export default JawaTengah;
