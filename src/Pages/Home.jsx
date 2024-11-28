// import React from "react";
// import "/src/App.css";


// import { IoLanguage } from "react-icons/io5";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { SiVisa } from "react-icons/si";
// import { FaCloudSun } from "react-icons/fa";
// import { FaDollarSign } from "react-icons/fa";
// import { MdOutlinePhoneIphone } from "react-icons/md";
// import { PiPlugs } from "react-icons/pi";
// import { BsFillBuildingsFill } from "react-icons/bs";
// import { BiLogoTelegram } from "react-icons/bi";


// export default function Home() {
//     return (
//         <>
//             <div className="background flex flex-col justify-center items-center h-[690px] w-full">
//                 <h1 className="text-white  sm:text-[8vh] md:text-[14vh] font-bold mb-4 ">
//                     TRAVEL 
//                 </h1>
//             </div>


//             <div className=" h-100 flex flex-col  p-4">
//                 <h1 className="text-[4vh]  text-[#F18C48] font-bold italic text-center">
//                     INDONESIA TRAVEL GUIDE
//                 </h1>
//             </div>


//             <div className="h-200 ">
//                 <h2 className="text-yellow-500 text-[25px] italic ml-12">
//                     Overview
//                 </h2>
//             </div>


//             <div className=" flex justify-center items-center h-1000 p-9">
//                 <p className="font-light text-gray-800 text-[20px] max-w-6xl text-justify ml-24 mr-24">


//                     Indonesia, dengan lebih dari 17.000 pulau, adalah surga petualangan yang belum sepenuhnya terpetakan. Dari gunung berapi, air terjun, hutan tropis, hingga terumbu karang yang menakjubkan, Indonesia menawarkan keindahan alam yang tak tertandingi.

//                     Bali memang terkenal dengan sawah hijau dan resor mewahnya, namun tempat-tempat lain seperti Pulau Komodo dengan naga Komodo, Sumatera dan Sulawesi untuk melihat satwa liar eksotis, serta Sumba dengan pantai pasir putih yang tenang, juga patut dikunjungi. Di Jawa, Anda bisa menikmati pemandangan vulkanik spektakuler dan situs bersejarah seperti Borobudur dan Prambanan.

//                     Indonesia adalah tempat di mana setiap perjalanan menjanjikan petualangan baru yang luar biasa!

//                 </p>
//             </div>

//             {/* ____________________________________________________________________________________________________________________________________________ */}


//             <h1 className="text-yellow-500 text-[25px] italic ml-12 mt-10">
//                 Di mana Indonesia berada di peta dunia?
//             </h1>

//             <div className="h-[400px] w-full p-8 mt-14 flex">

//                 <img
//                     src="/src/assets/Home/bola.png"
//                     alt=""
//                     className=" mb-6 rounded-lg max-w-full h-60 object-cover ml-24 "
//                 />

//                 <div className="  text-justify p-6 rounded-lg  mb-6 font-light ml-24 mr-24 mt-[40px]">
//                     <p className="text-lg md:text-xl text-gray-800 mb-4">
//                         Indonesia adalah negara yang terletak di Asia Tenggara dan terdiri dari lebih dari 17.000 pulau. Pulau-pulau utamanya adalah
//                         Sumatra, Jawa, Kalimantan (Borneo Indonesia), Sulawesi, dan Papua.
//                         Asia Tenggara berbatasan dengan China dan India di utara, Samudra Hindia di selatan, Teluk Benggala dan Samudra Hindia di barat,
//                         serta Samudra Pasifik di timur.
//                     </p>
//                 </div>


//             </div>

//             {/* ___________________________________________________________________________________________________________________________________________________________ */}

//             <div className="h-200">
//                 <h2 className="text-yellow-500 text-[25px] italic ml-12">
//                     Sekilas Fakta
//                 </h2>
//             </div>

//             <div className="h-screen w-full flex flex-wrap justify-around items-center">


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <IoLanguage className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Bahasa
//                         </h1>
//                         <p className=" text-black">
//                             Indonesian; 'Thank you' is 'terima kasih'
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center  w-[40%]  h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <FaDollarSign className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Mata Uang
//                         </h1>
//                         <p className=" text-black">
//                             Indonesian Rupiah (IDR)
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <SiVisa className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Visa
//                         </h1>
//                         <p className=" text-black">
//                             Akses bebas visa atau VOA untuk 160+ negara
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <PiPlugs className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Colokan
//                         </h1>
//                         <p className=" text-black">
//                             Type C/F
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <BsMoonStarsFill className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Agama
//                         </h1>
//                         <p className=" text-black">
//                             Islam
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <BsFillBuildingsFill className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Ibukota
//                         </h1>
//                         <p className=" text-black">
//                             Jakarta
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <FaCloudSun className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             Cuaca
//                         </h1>
//                         <p className=" text-black">
//                             Kemarau dan Hujan
//                         </p>
//                     </div>
//                 </div>


//                 <div className=" p-4 flex items-center w-[40%] h-[20%]">
//                     <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
//                         <MdOutlinePhoneIphone className="text-white text-[50px]" />
//                     </div>
//                     <div className="ml-4">
//                         <h1 className="text-black">
//                             App Recomend Transport
//                         </h1>
//                         <p className=" text-black">
//                             <a href="https://www.grab.com" className="text-black hover:text-[#F18C48]">Grab</a>,
//                             <a href="https://www.gojek.com" className="text-black0 hover:text-[#F18C48]">Go-Jek</a>,


//                         </p>
//                     </div>
//                 </div>
//             </div>


//             {/* _____________________________________________________________________________________________________ */}

//             <div className=" h-[650px] w-full">

//                 <h1 className="text-yellow-500 font-bold text-[24px] ml-28 mt-10 ">
//                     Rekomendasi Dari Saya
//                 </h1>

//                 <h2 className="text-yellow-500 text-[25px] italic ml-12 mt-14">
//                     Gunung di indonesia
//                 </h2>

//                 <div className="  justify-center items-center h-scren p-9">
//                     <p className="font-light text-gray-800 text-[20px] max-w-6xl text-justify ml-24 mr-24">

//                         Indonesia memiliki 400 gunung berapi, dan sekitar 130 di antaranya aktif — lebih banyak daripada negara lain di dunia.
//                         Sebagian besar gunung berapi di Indonesia terbuka untuk wisatawan yang ingin mendaki, dan di beberapa tempat
//                         (seperti Gunung Bromo di Jawa), Anda bahkan bisa berjalan hingga ke tepi kawah yang mengepul!
//                     </p>

//                     <div className="flex justify-evenly mt-10">
//                         <div className="relative">
//                             <img
//                                 src="/src/assets/Gallery/Gunung Bromo.png"
//                                 alt=" "
//                                 className=" mb-6 rounded-lg  h-60 object-cover ml-24 "
//                             />
//                             <div className="ml-[96px] mr-[px] mb-[25px]  absolute inset-0 bg-black rounded-lg bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100  transition-opacity duration-300">
//                                 <p className="text-white text-center font-semibold">Gunung Bromo Smoking <br /> di Jawa</p>
//                             </div>
//                         </div>

//                         <div className="relative">
//                             <img
//                                 src="/src/assets/Home/Bromo Smoking.png"
//                                 alt=""
//                                 className=" mb-6 rounded-lg  h-60 object-cover ml-24 "
//                             />
//                             <div className="ml-[100px] mr-[3px] mb-[55px]  absolute inset-0 bg-black rounded-lg bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100  transition-opacity duration-300">
//                                 <p className="text-white text-center font-semibold">Gunung Bromo Smoking <br /> di Jawa</p>
//                             </div>



//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* _________________________________________________________________________________________________________________________________ */}

//             <div className="pulau w-full h-screen flex flex-col items-center justify-center py-8">
//                 <h1 className="text-white text-center text-3xl mt-7 font-extrabold w-full">
//                     <span className="italic">Hubungi Saya</span>
//                 </h1>

//                 <h2 className="text-white text-center text-base font-semibold mt-6 px-6 sm:px-12">
//                     Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan, komentar, atau saran tentang perjalanan.
//                 </h2>

//                 <h2 className="text-white text-center text-base font-semibold mt-4 px-6 sm:px-12">
//                     Saya akan mencoba menghubungi Anda kembali!
//                 </h2>


//                 <div className="mt-8 bg-blue-400 hover:bg-blue-600 p-4 rounded-full">
//                     <BiLogoTelegram size={30} color="white" />
//                 </div>
//             </div>




//         </>
//     );
// }


import React from "react";
import "/src/App.css";

import { IoLanguage } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { SiVisa } from "react-icons/si";
import { FaCloudSun } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { PiPlugs } from "react-icons/pi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { GiIsland } from "react-icons/gi";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[50vh] sm:h-[70vh] w-full relative">
                <img src="/src/assets/bg.svg" alt="" className="h-full w-full object-cover" />
                <h1 className="absolute text-white text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold">
                    TRAVEL
                </h1>
            </div>

        <div className="">

            <div className="w-full p-4 text-center ">
                <h1 className="text-[4vh] text-[#F18C48] font-bold italic">INDONESIA TRAVEL GUIDE</h1>
            </div>


        

            <div className="p-4 flex justify-start">
                <h2 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-semibold italic ml-4">
                    Overview
                </h2>
            </div>

            <div className="flex justify-center items-center p-6 sm:p-10">
                <p className="font-light text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-6xl text-justify mx-4 sm:mx-12">
                    Indonesia, dengan lebih dari 17.000 pulau, adalah surga petualangan yang belum sepenuhnya terpetakan. Dari gunung berapi, air terjun, hutan tropis, hingga terumbu karang yang menakjubkan, Indonesia menawarkan keindahan alam yang tak tertandingi.
                    {/* ...lebih lanjut */}
                </p>
            </div>


            <div className="p-4">
                <h2 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-semibold italic ml-4">
                    Di mana Indonesia berada di peta dunia?
                </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center p-6">
                <img src="/src/assets/Home/bola.png" alt="" className="h-40 w-full sm:w-1/2 object-cover rounded-lg" />
                <div className="text-white text-justify p-4 sm:p-6 font-light text-[16px] sm:text-[18px] md:text-[20px] max-w-lg">
                    <p>
                        Indonesia adalah negara yang terletak di Asia Tenggara dan terdiri dari lebih dari 17.000 pulau. Pulau-pulau utamanya adalah
                        Sumatra, Jawa, Kalimantan (Borneo Indonesia), Sulawesi, dan Papua.
                    </p>
                </div>
            </div>

            <div className="p-4 flex justify-center">
                <h2 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-semibold italic ml-4">
                    Sekilas Fakta
                </h2>
            </div>

            <div className="flex flex-wrap  items-center p-4 space-y-6 justify-center " >
                {/* Facts Icons */}
                {[ 
                    { icon: <IoLanguage />, title: "Bahasa", description: "Indonesian"},
                    { icon: <FaDollarSign />, title: "Mata Uang", description: "Indonesian Rupiah (IDR)" },
                    { icon: <SiVisa />, title: "Visa", description: "Akses bebas visa " },
                    { icon: <PiPlugs />, title: "Colokan", description: "Type C/F" },
                    { icon: <BsMoonStarsFill />, title: "Agama", description: "Islam" },
                    { icon: <BsFillBuildingsFill />, title: "Ibukota", description: "Jakarta" },
                    { icon: <FaCloudSun />, title: "Cuaca", description: "Kemarau dan Hujan" },
                    { icon: <GiIsland />, title: "Pulau", description: "17.000 pulau" },
                    { icon: <MdOutlinePhoneIphone />, title: "App  Transport", description: <a href="https://www.grab.com" className="text-blue-500 hover:text-[#F18C48]">Grab</a> }
                ].map((fact, index) => (
                    <div key={index} className="flex items-center w-full sm:w-[45%] lg:w-[30%] p-4">
                        <div className="bg-[#D9D9D9] hover:bg-[#F18C48] transition-transform duration-300 hover:scale-90 h-20 w-20 flex items-center justify-center rounded-full">
                            {fact.icon}
                        </div>
                        <div className="ml-4">
                            <h1 className="text-white font-semibold">{fact.title}</h1>
                            <p className="text-white">{fact.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4">
                <h2 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-semibold italic ml-4">
                    Recomendasi di Indonesia
                </h2>
            </div>

            <div className="flex justify-around items-center p-4">
                {[{ image: "/src/assets/Gallery/Gunung Bromo.png", label: "Gunung Bromo " }, 
                  { image: "/src/assets/Home/Bromo Smoking.png", label: "Gunung Bromo Smoking" }].map((mountain, index) => (
                    <div key={index} className="relative w-1/2 max-w-xs mx-4">
                        <img src={mountain.image} alt="" className="rounded-lg h-60 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 md:mr-20 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-center font-semibold">{mountain.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#333] py-8 text-center">
                <h1 className="text-white text-xl font-bold">Hubungi Saya</h1>
                <p className="text-white text-base mt-4">Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan, komentar, atau saran tentang perjalanan. Saya akan mencoba menghubungi Anda kembali!</p>
                <div className="mt-8 bg-blue-400 hover:bg-blue-600 p-4 rounded-full inline-block">
                    <BiLogoTelegram size={30} color="white" /> <a href=""></a>
                </div>
            </div>

        </div>    
        </>
    );
}
