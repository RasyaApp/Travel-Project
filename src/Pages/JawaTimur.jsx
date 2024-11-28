// sm:bg-blue-300 md:bg-yellow-300 lg:bg-green-300

import React from 'react'

const JawaTengah = () => {
  return (
    <>

      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen">
        <img
          src="/src/assets/Jawa Timur/JATIM.png"
          alt="Jawa Timur"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className=''>

        <div className='justify-center items-center'>
          <h1 className=' text-[55px] text-center font-bold italic text-white'>
            Explore Jawa Timur
          </h1>

          <h2 className='text-center mt-10 font-semibold italic text-[35px] px-5 text-yellow-300'>
            Temukan budaya, pemandangan yang indah dan pengalaman yang tak terlupakan
          </h2>

          <h3 className='ml-16 text-center mt-10 mb-4 font-light mr-16 px-1 text-[22px] text-gray-300'>
            Jawa Timur adalah provinsi di Indonesia dengan ibu kota Surabaya. Dikenal dengan
            keindahan alamnya seperti Gunung Bromo dan Kawah Ijen, serta situs bersejarah
            seperti Candi Penataran. Kuliner khasnya meliputi Rawon dan Rujak Cingur.
            Jawa Timur menawarkan perpaduan wisata alam, sejarah, dan budaya tradisional
            yang memikat
          </h3>
        </div>

        {/* ____________________________________________________________________________________________________________________________ */}

        <div className="py-16 px-4 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12">

            <div className="flex justify-center group ">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg ">
                <img
                  src="/src/assets/Gallery/Gunung bromo.png"
                  alt="Gunung Bromo"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Gunung Bromo
                  </p>
                </div>
              </div>
            </div>


            <div className="flex justify-center group ">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg ">
                <img
                  src="/src/assets/Jawa Timur/Candi Penataran.png"
                  alt="Candi Penataran"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Candi Penataran
                  </p>
                </div>
              </div>
            </div>


            <div className="flex justify-center group ">
              <div className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg ">
                <img
                  src="/src/assets/Jawa Timur/Kawah Ijen.png"
                  alt="Kawah Ijen"
                  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-full"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  <p
                    className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  >
                    Kawah Ijen
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:col-span-3">
              <h1 className="text-[28px] lg:text-[40px] font-bold text-yellow-300 leading-tight mb-6">
                Temukan pesona Jawa Timur dengan keindahan arsitektur kuno dan gunung yang asri
              </h1>
              <p className="text-lg text-gray-400">
                Jelajahi kekayaan budaya dan alam yang menakjubkan, dari cacndi penataran hingga Gunung Bromo, yang menyimpan sejarah panjang dan keindahan alam yang luar biasa.
              </p>
            </div>

          </div>
        </div>

        {/* ________________________________________________________________________________________________________________________________ */}

        <div className="py-16 px-24 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="flex justify-center relative">
              <img
                src="/src/assets/Jawa Timur/lontong balap.png"
                alt="lontong balap"
                className="w-full h-[300px]  lg:h-[300px] shadow-lg object-cover rounded-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black rounded-[10%] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                  Lontong Balap
                </p>
              </div>
            </div>

            <div className="flex justify-center relative">
              <img
                src="/src/assets/Jawa Timur/Rawon.png"
                alt="Rawon"
                className="w-full h-[300px] lg:h-[300px] shadow-lg object-cover rounded-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black rounded-[10%] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                  Rawon
                </p>
              </div>
            </div>

            <div className="flex relative justify-center">
              <img
                src="src/assets/Jawa Timur/Rujak Cingur.png"
                alt="Rujak Cingur"
                className="w-full h-[300px] lg:h-[300px] shadow-lg object-cover rounded-[10%]  transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black rounded-[10%] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <p className="text-yellow-300 text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                  Rujak Cingur
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:col-span-3">
              <h1 className="text-[30px] lg:text-[40px] font-bold text-yellow-300 leading-tight italic">
                Jawa Timur terkenal dengan makanan khasnya yang menggugah selera
              </h1>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default JawaTengah
