"use client"

import React, { useState, useEffect } from "react";
import { 
  FaShoppingCart, FaUser, FaFacebook, FaTwitter, FaInstagram, FaYoutube,
  FaCcVisa, FaCcMastercard, FaPaypal, FaMoneyBillWave, FaMobile, FaPlay
} from "react-icons/fa";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import { Input } from '../app/ui/input';
import { Button } from "../app/ui/button ";
import Image from 'next/image';
import Link from 'next/link';
import { QRCodeCanvas } from "qrcode.react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiSearch , FiMic} from "react-icons/fi";
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";

// -------------------------------------------------
// Authentication Modals Component (helper component)
// -------------------------------------------------
function AuthModals() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
      
  return (
    <div>
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsLoginOpen(true)}>Login</Button>
        </DialogTrigger>
        <DialogContent className="bg-white p-6 rounded-lg shadow-md">
          <DialogTitle>Login</DialogTitle>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <div className="mt-4 flex justify-end space-x-2">
            <DialogClose asChild>
              <Button onClick={() => setIsLoginOpen(false)}>Close</Button>
            </DialogClose>
            <Button>Login</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsSignupOpen(true)}>Signup</Button>
        </DialogTrigger>
        <DialogContent className="bg-white p-6 rounded-lg shadow-md">
          <DialogTitle>Signup</DialogTitle>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input 
            type="text" 
            placeholder="WhatsApp Number" 
            value={whatsappNumber} 
            onChange={(e) => setWhatsappNumber(e.target.value)} 
          />
          <div className="mt-4 flex justify-end space-x-2">
            <DialogClose asChild>
              <Button onClick={() => setIsSignupOpen(false)}>Close</Button>
            </DialogClose>
            <Button>Signup</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// -------------------------------------------------
// Categories Data    
// -------------------------------------------------
const categories = [
  { id: 1, name: "Men's Clothing", image: "/images/mens-clothing.jpg" },
  { id: 2, name: "Women's Clothing", image: "/images/womens-clothing.jpg" },
  { id: 3, name: "Bed Sheets", image: "/images/bridal-suits.jpg" },
  { id: 4, name: "Footwear", image: "/images/footwear.jpg" },
  { id: 5, name: "Accessories", image: "/images/accessories.jpg" },
  { id: 6, name: "Electronics", image: "/images/electronics.jpg" },
];

// -------------------------------------------------
// Products Data
// -------------------------------------------------
const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: ["Men's Clothing", "Women's Clothing", "Bed Sheet", "Footwear"][i % 4] + ` Product ${i + 1}`,
  price: `Rs.${1500 + (i % 5) * 500}`,
  image: [
    "/images/mens-clothing.jpg",
    "/images/womens-clothing.jpg",
    "/images/bed-sheets.jpg",
    "/images/footwear.jpg",
  ][i % 4],
}));

// -------------------------------------------------
// TopBar Component
// -------------------------------------------------
const TopBar: React.FC = () => {
  return (
    <div className="bg-orange-600 text-white text-sm py-2 px-8 flex justify-between items-center">
      <div className="flex space-x-6">
      <nav className="flex justify-between items-center px-8 py-4">
      <ul className="flex gap-6 text-white text-lg font-medium">
      <Link href="/download-app" className="px-4 py-2 hover:underline text-white rounded">
          SAVE MORE ON APP
        </Link> 
        <Link href="/help-support" className="px-4 py-2 hover:underline text-white rounded">
          Help & Support
        </Link>
        <Link href="/loginModel" className="px-4 py-2 hover:underline text-white rounded">
          LOGIN
        </Link>
        <Link href="/SignUpModel" className="px-4 py-2 hover:underline text-white rounded">
        SIGN UP
        </Link>
       <Link href="/Contact" className="px-4 py-2 hover:underline text-white rounded">
        Contact
        </Link>

     </ul>
    </nav>
   </div>
    </div>
    
  );
};

// -------------------------------------------------
// Main HomePage Component
// -------------------------------------------------
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(30);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Handle Search
  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  return (
    
    <div>
      {/* Top Bar */}
      <TopBar />  
      {/* Header and Search Section */}
      <div className="flex bg-gradient-to-r from-red-600 to-orange-500 py-3 px-6 shadow-md justify-between items-center bg-red-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl text-white text-2xl font-bold font-bold">
          Dildar.pk
          </h1>
 <div className="w-full flex flex-col items-center mt-6 px-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-red-500 text-black text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiSearch className="absolute left-4 top-3 text-gray-400" size={20} />
        <FiMic
        className="absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-red-500"
          size={25}
         />
      </div>

      {/* Filtered Results */}
      {searchQuery && (
        <div className="w-full max-w-xl mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
            <div
                key={product.id}
                 className="bg-white p-3 rounded-lg border shadow hover:shadow-md transition"
                >
                <img
                   src={"Women Fashion"}
                   alt={"Women Clothing"}
                   className="w-full h-32 object-cover rounded"
                  />
               <p className="mt-2 text-sm font-medium truncate">{"/WhatsApp women1.jpg"}</p>
             </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No products found.</p>
          )}
        </div>
      )}
    </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Women's Clothing</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
      <h1 className="flex items-center justify-center text-xl font-bold rounded-xl ">Women's Clothing</h1>
     <div className="grid grid-cols-3 gap-4">
    {[
      "/whatsApp-women1.jpg", 
      "/whatsapp-women2.jpg",
      "/whatsapp-women3.jpg",
      "/whatsApp-women4.jpg",
      "/whatsapp-women5.jpg",
      "/whatsapp-women6.jpg",
      "/whatsapp-women7.jpg",
      "/whatsApp-women8.jpg",
      "/whatsapp-women9.jpg",
      "/whatsapp-women10.jpg",
      "/whatsapp-women31.jpg",
      "/whatsApp-women11.jpg",
      "/whatsapp-women12.jpg",
      "/whatsapp-women13.jpg",
      "/whatsApp-women14.jpg",
      "/whatsapp-women15.jpg",
      "/whatsapp-women16.jpg",
      "/whatsApp-women17.jpg",
      "/whatsapp-women18.jpg",
      "/whatsapp-women19.jpg",
      "/whatsapp-women20.jpg",
      "/whatsapp-women21.jpg",
      "/whatsapp-women22.jpg",
      "/whatsApp-women23.jpg",
      "/whatsapp-women24.jpg",
      "/whatsapp-women25.jpg",
      "/whatsapp-women26.jpg",
      "/whatsapp-women27.jpg",
      "/whatsapp-women28.jpg",
      "/whatsapp-women29.jpg",
      "/whatsapp-women30.jpg",
      "/whatsApp-women32.jpg",
      "/whatsapp-women33.jpg",
      "/whatsapp-women34.jpg",
      "/whatsApp-women35.jpg",
      "/whatsapp-women36.jpg",
      "/whatsapp-women37.jpg",
      "/whatsApp-women38.jpg",
      "/whatsapp-women39.jpg",
      "/whatsapp-women40.jpg",
      "/whatsApp-women41.jpg",
      "/whatsapp-women42.jpg",
      "/whatsapp-women43.jpg",
      "/whatsapp-women44.jpg",
      "/whatsapp-women45.jpg",
      "/whatsApp-women46.jpg",
      "/whatsapp-women47.jpg",
      "/whatsapp-women48.jpg",  
      "/whatsApp-women49.jpg",
      "/whatsapp-women50.jpg",
      "/whatsapp-women51.jpg",
      "/whatsApp-women52.jpg",
      "/whatsapp-women53.jpg",
      "/whatsapp-women54.jpg",
      "/whatsapp-women55.jpg",
      "/whatsapp-women56.jpg",
      "/whatsApp-women57.jpg",
      "/whatsapp-women58.jpg",
      "/whatsapp-women59.jpg",
      "/whatsapp-women60.jpg",
      "/Whatsapp-women61.jpg",
      "/Whatsapp-women62.jpg",
      "/Whatsapp-women63.jpg",
      "/Whatsapp-women64.jpg",
      "/Whatsapp-women65.jpg",
      "/Whatsapp-women66.jpg",
      "/Whatsapp-women67.jpg",
      "/Whatsapp-women68.jpg",
      "/Whatsapp-women69.jpg",
      "/Whatsapp-women70.jpg",
      "/Whatsapp-women71.jpg",
      "/WhatsApp-women72.jpg",
      "/WhatsApp-women73.jpg",
      "/WhatsApp-women74.jpg",
      "/WhatsApp-women75.jpg",
      "/WhatsApp-women76.jpg",
      "/WhatsApp-women77.jpg",
      "/WhatsApp-women78.jpg",
      "/WhatsApp-women79.jpg",
      "/WhatsApp-women80.jpg",
      "/WhatsApp-women81.jpg",
      "/WhatsApp-women82.jpg",
      "/WhatsApp-women83.jpg",
      "/WhatsApp-women84.jpg",
      "/WhatsApp-women85.jpg",
      "/WhatsApp-women86.jpg",
      "/WhatsApp-women87.jpg",
      "/WhatsApp-women88.jpg",
      "/WhatsApp-women89.jpg",
      "/WhatsApp-women90.jpg",
      "/WhatsApp-women91.jpg",
      "/WhatsApp-women92.jpg",
      "/WhatsApp-women93.jpg",
      "/WhatsApp-women94.jpg",
      "/WhatsApp-women95.jpg",
      "/WhatsApp-women96.jpg",
      "/WhatsApp-women97.jpg",
      "/WhatsApp-women98.jpg",
      "/WhatsApp-women98(1).jpg",
      "/WhatsApp-women98(2).jpg",
      "/WhatsApp-women99.jpg",
      "/WhatsApp-women100.jpg",
      "/WhatsApp-women101.jpg",
      "/WhatsApp-women102.jpg",
      "/WhatsApp-women103.jpg",
      "/WhatsApp-women104.jpg",
      "/WhatsApp-women105.jpg",
      "/WhatsApp-women106.jpg",
      "/WhatsApp-women107.jpg",
      "/WhatsApp-women108.jpg",
      "/WhatsApp-women109.jpg",
      "/WhatsApp-women110.jpg",
      "/WhatsApp-women111.jpg",
      "/WhatsApp-women112.jpg",
      "/WhatsApp-women113.jpg",
      "/WhatsApp-women114.jpg",
      "/WhatsApp-women115.jpg",
      "/WhatsApp-women116.jpg",
      "/WhatsApp-women117.jpg",
      "/WhatsApp-women118.jpg",
      "/WhatsApp-women119.jpg",
      "/WhatsApp-women120.jpg",
      "/WhatsApp-women121.jpg",
      "/WhatsApp-women122.jpg",
      "/WhatsApp-women123.jpg",
      "/WhatsApp-women124.jpg",
      "/WhatsApp-women125.jpg",
      "/WhatsApp-women126.jpg",
      "/WhatsApp-women127.jpg",
      "/WhatsApp-women128.jpg",
      "/WhatsApp-women129.jpg",
      "/WhatsApp-women130.jpg",
      "/WhatsApp-women131.jpg",
      "/WhatsApp-women132.jpg",
      "/WhatsApp-women133.jpg",
      "/WhatsApp-women134.jpg",
      "/WhatsApp-women135.jpg",
      "/WhatsApp-women136.jpg",
      "/WhatsApp-women137.jpg",
      "/WhatsApp-women138.jpg",
      "/WhatsApp-women139.jpg",
      "/WhatsApp-women140.jpg",
      "/WhatsApp-women141.jpg",
      "/WhatsApp-women142.jpg",
      "/WhatsApp-women143.jpg",
      "/WhatsApp-women144.jpg",
      "/WhatsApp-women145.jpg",
      "/WhatsApp-women146.jpg",
      "/WhatsApp-women147.jpg",
      "/WhatsApp-women148.jpg",
      "/WhatsApp-women149.jpg",
      "/WhatsApp-women150.jpg",
      "/WhatsApp-women151.jpg",
      "/WhatsApp-women152.jpg",
      "/WhatsApp-women153.jpg",
      "/WhatsApp-women154.jpg",
      "/WhatsApp-women155.jpg",
      "/WhatsApp-women156.jpg",
      "/WhatsApp-women157.jpg",
      "/WhatsApp-women158.jpg",
      "/WhatsApp-women159.jpg",
      "/WhatsApp-women160.jpg",
      "/WhatsApp-women161.jpg",
      "/WhatsApp-women162.jpg",
      "/WhatsApp-women163.jpg",
      "/WhatsApp-women164.jpg",
      "/WhatsApp-women165.jpg",
      "/WhatsApp-women166.jpg",
      "/WhatsApp-women167.jpg",
      "/WhatsApp-women168.jpg",
      "/WhatsApp-women169.jpg",
      "/WhatsApp-women170.jpg",
      "/WhatsApp-women171.jpg",
      "/WhatsApp-women172.jpg",
      "/WhatsApp-women173.jpg",
      "/WhatsApp-women174.jpg",
      "/WhatsApp-women175.jpg",
      "/WhatsApp-women176.jpg",
      "/WhatsApp-women177.jpg",
      "/WhatsApp-women178.jpg",
      "/WhatsApp-women179.jpg",
      "/WhatsApp-women180.jpg",
      "/WhatsApp-women181.jpg",
      "/WhatsApp-women182.jpg",
      "/WhatsApp-women183.jpg",
      "/WhatsApp-women184.jpg",
      "/WhatsApp-women185.jpg",
      "/WhatsApp-women186.jpg",
      "/WhatsApp-women187.jpg",
      "/WhatsApp-women188.jpg",
      "/WhatsApp-women189.jpg",
      "/WhatsApp-women190.jpg",
      "/WhatsApp-women191.jpg",
      "/WhatsApp-women192.jpg",
      "/WhatsApp-women193.jpg",
      "/WhatsApp-women194.jpg",
      "/WhatsApp-women195.jpg",
      "/WhatsApp-women196.jpg",
      "/WhatsApp-women197.jpg",
      "/WhatsApp-women198.jpg",
      "/WhatsApp-women199.jpg",
      "/WhatsApp-women200.jpg",
      "/WhatsApp-women201.jpg",
      "/WhatsApp-women202.jpg",
      "/WhatsApp-women203.jpg",
      "/WhatsApp-women204.jpg",
      "/WhatsApp-women205.jpg",
      "/WhatsApp-women206.jpg",
      "/WhatsApp-women207.jpg",
      "/WhatsApp-women208.jpg",
      "/WhatsApp-women209.jpg",
      "/WhatsApp-women210.jpg",
      "/WhatsApp-women211.jpg",
      "/WhatsApp-women212.jpg",
      "/WhatsApp-women213.jpg",
      "/WhatsApp-women214.jpg",
      "/WhatsApp-women215.jpg",
      "/WhatsApp-women216.jpg",
      "/WhatsApp-women217.jpg",
      "/WhatsApp-women218.jpg",
      "/WhatsApp-women219.jpg",
      "/WhatsApp-women220.jpg",
      "/WhatsApp-women221.jpg",
      "/WhatsApp-women222.jpg",
      "/WhatsApp-women223.jpg",
      "/WhatsApp-women224.jpg",
      "/WhatsApp-women225.jpg",
      "/WhatsApp-women226.jpg",
      "/WhatsApp-women227.jpg",
      "/WhatsApp-women228.jpg",
      "/WhatsApp-women229.jpg",
      "/WhatsApp-women230.jpg",
      "/WhatsApp-women231.jpg",
      "/WhatsApp-women232.jpg",
      "/WhatsApp-women233.jpg",
      "/WhatsApp-women234.jpg",
      "/WhatsApp-women235.jpg",
      "/WhatsApp-women236.jpg",
      "/WhatsApp-women237.jpg",
      "/WhatsApp-women238.jpg",
      "/WhatsApp-women239.jpg",
      "/WhatsApp-women240.jpg",
      "/WhatsApp-women241.jpg",
      "/WhatsApp-women242.jpg",
      "/WhatsApp-women243.jpg",
      "/WhatsApp-women244.jpg",
      "/WhatsApp-women245.jpg",
      "/WhatsApp-women246.jpg",
      "/WhatsApp-women247.jpg",
      "/WhatsApp-women248.jpg",
      "/WhatsApp-women249.jpg",
      "/WhatsApp-women250.jpg",
      "/WhatsApp-women251.jpg",
      "/WhatsApp-women252.jpg",
      "/WhatsApp-women253.jpg",
      "/WhatsApp-women254.jpg",
      "/WhatsApp-women255.jpg",


    ].map((src, index) => (
      <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
        <Image 
          src={src} 
          alt="Women's Fashion" 
          width={300} 
          height={300} 
          className="h-auto rounded-lg"
          // sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized 
        />
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg">Women's Clothing</h2>
          <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
          
          {(index === 0 || index === 1 || index === 2) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $10.77
                    </p>               
                    
                    )}
           {(index === 3 || index === 4 || index === 5 || index === 6 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $10.01
                    </p>
                    )}  
           {(index === 7 || index === 8 || index === 9 || index === 10  ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $11.80
                    </p>
                    )}  
            {(index === 11 || index === 12 || index === 13  ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $11.80
                    </p>
                    )}  
            {(index === 14 || index === 15 || index === 16  ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $11.80
                    </p>
                    )}                                              

          {(index === 17 || index === 18 || index === 19 || index === 20 || index === 21 || index ===  22) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $10.77
                    </p>  
          )}    
            {(index === 23 || index === 24 || index === 25 || index === 26 || index === 27 || index === 28 || index === 29 || index === 30 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $11.80
                    </p>
                    )}                         
          {(index === 31 || index === 32 || index === 33) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $7.18
                    </p>
                    )}
          {(index === 34 || index === 35 || index === 36) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $7.86
                    </p>
                    )}
          {(index === 37 || index === 38 || index === 39) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $9.29
                    </p>
                    )}  
          {(index === 40 || index === 41 || index === 42 || index === 43|| index === 44  ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $12.51
                    </p>
                    )} 
         {(index === 45 || index === 46 || index === 47 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $10.72
                    </p>
                    )}   
         {(index === 48 || index === 49 || index === 50 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $7.15
                    </p>
                    )} 
          {(index === 51 || index === 52 || index === 53 || index === 54 || index === 55) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $10.05
                    </p>
                    )}      
          {(index === 56 || index === 57 || index === 58 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $10.72
                    </p>
                    )}                                                                     
                    {(index === 59 || index === 60 || index === 61 || index === 62 || index === 63 ||index === 64 ||index === 65 || index === 66 ||index === 67 ||index === 68 || index === 69 || index === 70 || index === 71  ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $17.95
                    </p>
                    )}
                       {(index === 72 || index === 73 || index === 74) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $8.98
                    </p>
                    )}
        </div>
      </div>
    ))}
  </div>
</div>  

<div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Embroidery Suits</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Embroidery Suits</h1>
    <div className="grid grid-cols-3 gap-4">
        {[
          "Embroidery Suit.jpg",
          "Embroidery Suit1.jpg",
          "Embroidery Suit2.jpg",
          "Embroidery Suit3.jpg",
          "Embroidery Suit4.jpg",
          "Embroidery Suit5.jpg",
          "Embroidery Suit6.jpg",
          "Embroidery Suit7.jpg",
          "Embroidery Suit8.jpg",
          "Embroidery Suit9.jpg",
          "Embroidery Suit10.jpg",
          "Embroidery Suit11.jpg",
          "Embroidery Suit12.jpg",
          "Embroidery Suit13.jpg",
          "Embroidery Suit14.jpg",
          "Embroidery Suit15.jpg",
          "Embroidery Suit16.jpg",
          "Embroidery Suit17.jpg",
          "Embroidery Suit18.jpg",
          "Embroidery Suit19.jpg",
          "Embroidery Suit20.jpg",
          "Embroidery Suit21.jpg",
          "Embroidery Suit22.jpg",
          "Embroidery Suit23.jpg",
          "Embroidery Suit24.jpg",
          "Embroidery Suit25.jpg",
          "Embroidery Suit26.jpg",
          "Embroidery Suit27.jpg",
          "Embroidery Suit28.jpg",
          "Embroidery Suit29.jpg",
          "Embroidery Suit30.jpg",
          "Embroidery Suit31.jpg",
          "Embroidery Suit32.jpg",
          "Embroidery Suit33.jpg",
          "Embroidery Suit34.jpg",
          "Embroidery Suit35.jpg",
          "Embroidery Suit36.jpg",
          "Embroidery Suit37.jpg",
          "Embroidery Suit38.jpg",
          "Embroidery Suit39.jpg",
          "Embroidery Suit40.jpg",
          "Embroidery Suit41.jpg",
          "Embroidery Suit42.jpg",
          "Embroidery Suit43.jpg",
          "Embroidery Suit44.jpg",
          "Embroidery Suit45.jpg",
          "Embroidery Suit46.jpg",
          "Embroidery Suit47.jpg",
          "Embroidery Suit48.jpg",
          "Embroidery Suit49.jpg",
          "Embroidery Suit50.jpg",
          "Embroidery Suit51.jpg",
          "Embroidery Suit52.jpg",
          "Embroidery Suit53.jpg",
          "Embroidery Suit54.jpg",
          "Embroidery Suit55.jpg",
          "Embroidery Suit56.jpg",
          "Embroidery Suit57.jpg",
          "Embroidery Suit58.jpg",
          "Embroidery Suit59.jpg",
          "Embroidery Suit60.jpg",
          "Embroidery Suit61.jpg",
          "Embroidery Suit62.jpg",
          "Embroidery Suit63.jpg",
          "Embroidery Suit64.jpg",
          "Embroidery Suit65.jpg",
          "Embroidery Suit66.jpg",
          "Embroidery Suit67.jpg",

          "Women's J. Suit.jpg",
          "Women's J. Suit1.jpg",
          "Women's J. Suit2.jpg",
          "Women's J. Suit3.jpg",
          "Women's J. Suit4.jpg",
          "Women's J. Suit5.jpg",
          "Women's J. Suit6.jpg",
          "Women's J. Suit7.jpg",
          "Women's J. Suit8.jpg",
          "Women's J. Suit9.jpg"

        ].map((src, index) => (
            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
                <Image 
                    src={src} 
                    alt="Embroidery Suits" 
                    width={300} 
                    height={300} 
                    className="h-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized 
                />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-lg">Embroidery Suits</h2>
                    <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
                    {(index === 0 || index === 4 || index === 5) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $71.68
                    </p>
                    )}
                    {(index === 1 || index === 2 || index === 3) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $53.76
                    </p>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Bridal Suits</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Bridal Suits</h1>
    <div className="grid grid-cols-3 gap-4">
        {[
            "/Bridal Suit.jpg",
            "/Bridal-Suit (4).jpg",
            "/Bridal-Suit (5).jpg",
            "/Bridal-Suit (1).jpg",
            "/Bridal-Suit (2).jpg",
            "/Bridal-Suit (3).jpg",
            "/Bridal-Suit (6).jpg",
            "/Bridal-Suit (7).jpg",
            "/Bridal-Suit (8).jpg",
            "/Bridal-Suit (9).jpg",
            "/Bridal-Suit (10).jpg",
            "/Bridal-Suit (11).jpg",
            "/Bridal-Suit (12).jpg",
            "/Bridal-Suit (13).jpg",
            "/Bridal-Suit (14).jpg",
            "/Blue Maxi.jpg",
            "/Red Maxi.jpg",
            "/Red Maxi1.jpg",
            "Blue Maxi1.jpg",
            "/Green Maxi.jpg",
            "/Dark Green Maxi.jpg",
            "/Purple Maxi.jpg",
            "/Black Maxi.jpg",
            "/Red Maxi2.jpg",
            "/Blue Maxi2.jpg",
            "/Black Maxi1.jpg",
            "Blue Maxi3.jpg",
            "Black Maxi2.jpg",
            "Mahroon.jpg",
            "Mahroon1.jpg",
            "/Blue Maxi4.jpg",
            "/Black Maxi3.jpg"
            

        ].map((src, index) => (
            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
                <Image 
                    src={src} 
                    alt="Bridal Suit" 
                    width={300} 
                    height={300} 
                    className=" h-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized 
                />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-lg">Bridal Suits</h2>
                    <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
                    {(index === 0 || index === 4 || index === 5) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $71.68
                    </p>
                    )}
                    {(index === 1 || index === 2 || index === 3) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $53.76
                    </p>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Men's Clothing</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
   </div>

<div className="bg-white p-6 rounded-xl shadow-lg">
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Men's Clothing</h1>
    <div className="grid grid-cols-3 gap-4">
     {[
      "/Men's T-shirt.jpg",
      "/Men's Tshirt.jpg",
      "/Mens Tshirt.jpg",
      "/Men T-shirt.jpg",
      "/Men'stshirt.jpg",
      "/Tshirt.jpg",
      "/T-shirt.jpg",
      "/Men's T-shirt (2).jpg",
      "/T-shirt (3).jpg",
      "/Tshirt (2).jpg",
      "/T-shirt (2).jpg",
      "/T-shirt (4).jpg",
      "/T-shirt (5).jpg",
      "/T-shirt (6).jpg",
      "/T-shirt (7).jpg",
      "/T-shirt (8).jpg",
      "/T-shirt (9).jpg",
      "/T-shirt (10).jpg",
      "/Men's J. Suit.jpg",
      "/Men's J. Suit1.jpg",
      "/Men's J. Suit2.jpg",
      "/Men's J. Suit3.jpg",
      "/Men's J. Suit4.jpg",
      "/Men's J. Suit5.jpg",
      "/Men's J. Suit6.jpg",
      "/Men's J. Suit7.jpg",
      "/Men's J. Suit8.jpg",
      "/Men's J. Suit9.jpg",
      "/Men's J. Suit10.jpg",
      "/Men's J. Suit11.jpg",
      "/Men's J. Suit12.jpg",
      "/Men's J. Suit13.jpg",
      "/Men's J. Suit14.jpg",
      "/Men's J. Suit15.jpg",
      "/Men's J. Suit16.jpg",
      "/Men's J. Suit17.jpg",
      "/Men's J. Suit18.jpg",
      "/Men's J. Suit19.jpg",
      "/Men's J. Suit20.jpg",
      "/Men's J. Suit21.jpg",
      "/Men's J. Suit22.jpg",
      "/Men's J. Suit23.jpg",
      "/Men's J. Suit24.jpg",
      "/Men's J. Suit25.jpg",
              
     ].map((src, index) => (
      <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
        <Image 
          src={src} 
          alt="Men's T-shirt" 
          width={300} 
          height={300} 
          className=" h-auto rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized 
        />
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg">Men's T-shirt</h2>
          <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
           {(index === 0||index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $53.76
                    </p>
                    )}
           {(index === 7 || index === 8 ) && (
            <p className="flex items-center text-xl text-red-500 font-bold">
              Price = $45
            </p>
          )}
           {(index === 9 || index === 10 || index === 11 ) && (
            <p className="flex items-center text-xl text-red-500 font-bold">
              Price = $46.7
            </p>
          )}
           {(index === 12 || index === 13 || index === 14 || index === 15 || index === 16 || index === 17 ) && (
            <p className="flex items-center text-xl text-red-500 font-bold">
              Price = $44
            </p>
          )}          
        </div>
      </div>
    ))}
  </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Watches</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Watches</h1>
    <div className="grid grid-cols-3 gap-4">
        {[
          "Watch1.jpg",
          "Watch2.jpg",
          "Watch3.jpg",
          "Watch4.jpg",
          "Watch5.jpg",
          "Watch6.jpg",
          "Watch7.jpg",
          "Watch8.jpg",
          "Watch9.jpg",
          "Watch10.jpg",
          "Watch11.jpg",
          "Watch12.jpg",
          "Watch13.jpg",
          "Watch14.jpg",
          "Watch15.jpg",
          "Watch16.jpg",
          "Watch17.jpg",
          "Watch18.jpg",
          "Watch19.jpg",
          "Watch20.jpg",
          "Watch21.jpg",
          "Watch22.jpg",
          "Watch23.jpg",
          "Watch24.jpg",
          "Watch25.jpg",
          "Watch26.jpg",
          "Watch27.jpg",
          "Watch28.jpg",
          "Watch29.jpg",
          "Watch30.jpg",
          "Watch31.jpg",
          "Watch32.jpg",
          "Watch33.jpg",
          "Watch34.jpg",
          "Watch35.jpg",
          "Watch36.jpg",
          "Watch37.jpg",
          "Watch38.jpg",
          "Watch39.jpg",
          "Watch40.jpg",
          "Watch41.jpg",
          "Watch42.jpg",
          "Watch43.jpg",
          "Watch44.jpg",
          "Watch45.jpg",
          "Watch46.jpg",
          "Watch47.jpg",
          "Watch48.jpg",
          "Watch49.jpg",
          "Watch50.jpg",
          "Watch51.jpg",
          "Watch52.jpg",
          "Watch53.jpg",
          "Watch54.jpg",
          "Watch55.jpg",
          "Watch56.jpg",
          "Watch57.jpg",
          "Watch58.jpg",
          "Watch59.jpg",
          "Watch60.jpg",
          "Watch61.jpg",
          "Watch62.jpg",
          "Watch63.jpg",
          "Watch64.jpg",
          "Watch65.jpg",
          "Watch66.jpg",
          "Watch67.jpg",
          "Watch68.jpg",
          "Watch69.jpg",
          "Watch70.jpg",
          "Watch71.jpg",
          "Watch72.jpg",
          "Watch73.jpg",
          "Watch74.jpg",
          "Watch75.jpg",
          "Watch76.jpg",
          "Watch77.jpg",
          "Watch78.jpg",
          "Watch79.jpg",
          "Watch80.jpg",
          "Watch81.jpg",
          "Watch82.jpg",
          "Watch83.jpg",
          "Watch84.jpg",
          "Watch85.jpg",
          "Watch86.jpg",
          "Watch87.jpg",
          "Watch88.jpg",
          "Watch89.jpg",
          "Watch90.jpg",
          "Watch91.jpg",

          
        ].map((src, index) => (
            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
                <Image 
                    src={src} 
                    alt="Watches" 
                    width={300} 
                    height={300} 
                    className="h-auto rounded-lg"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized 
                />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-lg">Wtaches</h2>
                    <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
                    {(index === 0 || index === 4 || index === 5) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $71.68
                    </p>
                    )}
                    {(index === 1 || index === 2 || index === 3) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $53.76
                    </p>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Necklace</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Necklace</h1>
    <div className="grid grid-cols-3 gap-4">
        {[
          "/Necklace.jpg",
          "/Necklace1.jpg",
          "/Necklace3.jpg",
          "/Necklace4.jpg",
          "/Necklace5.jpg",
          "/Necklace6.jpg",
          "/Jwelerybox.jpg",
          "/Jwelerybox1.jpg",
          "/Rings.jpg",
          "/Rings1.jpg",
          "/Clips.jpg",
          "/Clips1.jpg",
          "/Clips2.jpg",
          "/Clips3.jpg",
          "/Clips4.jpg",
          "/Clips5.jpg",
          "/Clips6.jpg",
          "/Clips7.jpg",
          "/Clips8.jpg",
          "/Clips9.jpg",
          "/Clips10.jpg",
          "/Clips11.jpg",
          "/Clips12.jpg",
          "/Clips13.jpg",
          "/Clips14.jpg",
          "/Clips15.jpg",
          "/Clips16.jpg",
          "/Clips17.jpg",
          "/Clips18.jpg",
          "/Clips19.jpg",
          "/Haar.jpg",
          "/Haar1.jpg",
          "/Haar2.jpg",
          "/Haar3.jpg",
          "/Haar4.jpg",
          "/Haar5.jpg",
          "/Haar6.jpg",
          "/Haar7.jpg",
          "/Haar8.jpg",
          "/Haar9.jpg",
          "/Earings.jpg",
          "/Earings1.jpg",
          "/Earings2.jpg",
          "/Earings3.jpg",
          "/Earings4.jpg",
          "/Earings5.jpg",
          "/Earings6.jpg",
          "/Earings7.jpg",
          "/Earings8.jpg",
          "/Earings9.jpg",
          "/Earings10.jpg",
          "/Earings11.jpg",
          "/Earings12.jpg",
          "/Earings13.jpg",
          "/Bracelat.jpg",
          "/Bracelat1.jpg",
          "/Ketcher.jpg",
          "/Ketcher1.jpg",
          "/Jwelery.jpg",
          "/Jwelery1.jpg",
          "/Jwelery2.jpg",
          "/Necklace7.jpg",
          "/Necklace8.jpg",
          "/Necklace9.jpg",
          "/Necklace10.jpg",
          "/Necklace11.jpg",
      
        ].map((src, index) => (
            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
                <Image 
                    src={src} 
                    alt="Necklace" 
                    width={300} 
                    height={300} 
                    className=" h-auto rounded-lg"
                    unoptimized 
                />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-lg">Necklace</h2>
                    <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
                    {(index === 0 || index === 4 || index === 5) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $71.68
                    </p>
                    )}
                    {(index === 1 || index === 2 || index === 3) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $53.76
                    </p>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Bed Sheets</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Bed Sheets</h1>
    <div className="grid grid-cols-3 gap-4">
        {[
           "/Bed Sheet.jpg",
           "/Bed Sheet1.jpg",
           "/Bed Sheet2.jpg",
           "/Bed Sheet3.jpg",
           "/Bed Sheet4.jpg",
           "/Bed Sheet5.jpg",
           "/Bed Sheet6.jpg",
           "/Bed Sheet7.jpg",
           "/Bed Sheet8.jpg",
           "/Bed Sheet9.jpg",
           "/Bed Sheet10.jpg",
           "/Bed Sheet11.jpg",
           "/Bed Sheet12.jpg",
           "/Bed Sheet13.jpg",
           "/Bed Sheet14.jpg",
           "/Bed Sheet15.jpg",
           "/Bed Sheet16.jpg",
           "/Bed Sheet17.jpg",
           "/Bed Sheet18.jpg",
           "/Bed Sheet19.jpg",
           "/Bed Sheet20.jpg",
           "/Bed Sheet21.jpg",
           "/Bed Sheet22.jpg",
           "/Bed Sheet23.jpg",
           "/Bed Sheet24.jpg",
           "/Bed Sheet25.jpg",
           "/Bed Sheet26.jpg",
           "/Bed Sheet27.jpg",
           "/Bed Sheet28.jpg",
           "/Bed Sheet29.jpg",
           "/Bed Sheet30.jpg",
           "/Bed Sheet31.jpg",
           "/Bed Sheet32.jpg",
           "/Bed Sheet33.jpg",
           "/Bed Sheet34.jpg",
           "/Bed Sheet35.jpg",
           "/Bed Sheet36.jpg",
           "/Bed Sheet37.jpg",
           "/Bed Sheet38.jpg",
           "/Bed Sheet39.jpg",
           "/Bed Sheet40.jpg",
           "/Bed Sheet41.jpg",
           "/Bed Sheet42.jpg",
           "/Bed Sheet43.jpg",
           "/Bed Sheet44.jpg",
           "/Bed Sheet45.jpg",
           "/Bed Sheet46.jpg",
           "/Bed Sheet47.jpg",
           "/Bed Sheet48.jpg",
           "/Bed Sheet49.jpg",
           "/Bed Sheet50.jpg",
           "/Bed Sheet51.jpg",
           "/Bed Sheet52.jpg",
           "/Bed Sheet53.jpg",
           "/Bed Sheet54.jpg",
           "/Bed Sheet55.jpg",
           "/Bed Sheet56.jpg",
           "/Bed Sheet57.jpg",
           "/Bed Sheet58.jpg",
           "/Bed Sheet59.jpg",
           "/Bed Sheet60.jpg",
           "/Bed Sheet61.jpg",
           "/Bed Sheet62.jpg",
           "/Bed Sheet63.jpg",
           "/Bed Sheet64.jpg",
           "/Bed Sheet65.jpg",
           "/Bed Sheet66.jpg",
           "/Bed Sheet67.jpg",
           "/Bed Sheet68.jpg",
           "/Bed Sheet69.jpg",
           "/Bed Sheet70.jpg",
           "/Bed Sheet71.jpg",
           "/Bed Sheet72.jpg",
           "/Bed Sheet73.jpg",
           
          
        
        ].map((src, index) => (
            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
                <Image 
                    src={src} 
                    alt="Bed Sheets" 
                    width={300} 
                    height={300} 
                    className=" h-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized 
                />
                <div className="px-4 py-2">
                    <h2 className="font-bold text-lg">Bed Sheets</h2>
                    <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
                    {(index === 0 || index === 4 || index === 5) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $71.68
                    </p>
                    )}
                    {(index === 1 || index === 2 || index === 3) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $53.76
                    </p>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

  <div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Cosmetics</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Stationary</h1>
    <div className="grid grid-cols-3 gap-4">
     {[
         "EyeLiner.jpg",
         "Highlighter.jpg",
         "Facepowder.jpg",
         "Tint.jpg",
         "Foundation.jpg",
         "ContourKit.jpg",
         "Beauty Blender.jpg",
         "Makeup Brushes.jpg",
         "BBCream.jpg",
         "Lipstick.jpg",
         "Fixer.jpg",
         "GliterEyeshadow.jpg",
         "NailPolish.jpg",
         "EyeLashes.jpg",
     ].map((src, index) => (
      <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
        <Image 
          src={src} 
          alt="Cosmatics" 
          width={300} 
          height={300} 
          className="h-auto rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized 
        />
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg">Stationary</h2>
          <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
          {(index === 0 || index === 1 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $0.32
                    </p>
                    )} 
          {(index === 2 || index === 3 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $0.13
                    </p>
                    )}   
           {(index === 4) && (
            <p className="flex items-center text-xl  text-red-500 font-bold">
              Price = 0.089
            </p>
           )}     
           {(index === 5) && (
            <p className="flex items-center text-xl  text-red-500 font-bold">
              Price = 0.089
            </p>
           )} 
        {(index === 6) && (
            <p className="flex items-center text-xl  text-red-500 font-bold">
              Price = 1.92
            </p>
           )}                         
        </div>
      </div>
    ))}
  </div>
</div>

  <div className="bg-white p-6 rounded-xl shadow-lg">
      <section className=" text-center bg-white p-6">
      <h1 className="text-4xl  font-bold text-red-600">Big Sale on Stationary</h1>
      <p className="text-xl text-gray-700 mt-2">Up to 50% off on selected items</p>
      <Swiper   />
    </section>
    <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">Stationary</h1>
    <div className="grid grid-cols-3 gap-4">
     {[
        "/Erasers.jpg",
        "/Erasers1.jpg",
        "/Pencil-Box.jpg",
        "/Pencil-Box1.jpg",
        "/Pencil-Box2.jpg",
        "/Brito Colours.jpg",
        "/Colors-Box.jpg",
        "/Sharpners.jpg",
        "/Sharpners1.jpg",
        "/Sharpners2.jpg",
        "/Scales.jpg",
        "/Scales1.jpg",
        "/Black Pointer.jpg",
        "/Black Pointer1.jpg",
        "/Bluue Pointer.jpg",
        "/Blue Pointer.jpg",
        "/Green Pointer.png",
        "/Red Pointer.jpg",
        "/Red Pointer1.jpg",
        "/Purple Pointer.jpg",
        "/Pointers.jpg",
        "/InkPen.jpg",
        "/Ink-Pen.jpg",
        "/Ink-Pen 2.jpg",
        "/Ink-Pen 3.jpg",
        "/Ink-Pen 4.jpg",
        "/Ink-Pen 5.jpg",
        "Blue,Black Ink.png",
        "/Black Gell Pen.jpg",
        "/Blue Gell Pen.jpg",
        "/Boll Pen.jpg",
        "/Blue Ball Pen.png",
        "/Envelope File.png",
        "/Blue And Black Cut Marker.jpg",
        "/Highlighters.png",
        "/Highlighters1.jpg",
        "/Marker1.jpg",
        "/Marker2.jpg",
        "/BoardMarkerInk.jpg",
        "/Kits.jpg",
        "/Kits1.jpg",
        "/Calculator.jpg",
        "/Calculator1.jpg",
        "/Calculator2.jpg",
        "Loose Pages.jpg",
        "Loose Pages1.jpg",
        "/Assignmentfile.jpg",
        "/Assignmentfile1.jpg",
        "/Assignmentfile2.jpg",
        "/ProjectFile.jpg",
        "/Writing-Book.jpg",
        "/Writing-Book1.jpg",
        "/White Computer Sheet.jpg",
        "/Colourfull Sheets.jpg",
        "/Glitter Sheets.jpg",
        "/GiftPaper.jpg",
        "/GiftPaper1.jpg",
        "/GiftPaper2.jpg",
        "/GiftTape.jpg",
        "/Cutter.jpg",
        "/Cutter1.jpg",
        "/Remmovers.jpg",
        "/Remmovers1.jpg",
        "/Whito Box.jpg",
        "/German Glue.jpg",
        "/Glue Stick.jpg",
        "/Glue Gun.jpg",
        "/Glue Gun1.jpg",
        "/Glue Gun2.jpg",
        "/Scissor.jpg",
        "/Scissor1.jpg",
        "/Tape.jpg",
        "/Tape1.jpg",
        "/bindingTape.jpg",
        "/Thread.jpg"
     ].map((src, index) => (
      <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
        <Image 
          src={src} 
          alt="Stationary" 
          width={300} 
          height={300} 
          className="h-auto rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized 
        />
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg">Stationary</h2>
          <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
          {(index === 0 || index === 1 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $0.32
                    </p>
                    )} 
          {(index === 2 || index === 3 ) && (
                        <p className="flex items-center text-xl  text-red-500 font-bold">
                        Price = $0.13
                    </p>
                    )}   
           {(index === 4) && (
            <p className="flex items-center text-xl  text-red-500 font-bold">
              Price = 0.089
            </p>
           )}     
           {(index === 5) && (
            <p className="flex items-center text-xl  text-red-500 font-bold">
              Price = 0.089
            </p>
           )} 
        {(index === 6) && (
            <p className="flex items-center text-xl  text-red-500 font-bold">
              Price = 1.92
            </p>
           )}                         
        </div>
      </div>
    ))}
  </div>
</div>
<div>    
       {/* {Footer} */}
       <footer className="bg-gray-800 text-white py-10 mt-auto text-center border border-red-500">
      <div className="container mx-auto text-left">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold">Customer Care</h3>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
              <li>Dildar Shop</li>
              <li>Contact Us</li>
              <li>Purchase Protection</li>
              <li>Dildar Pick up Points</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Dildar.pk</h3>
            <ul>
              <li>About Us</li>
              <li>Digital Payments</li>
              <li>Dilsar Donates</li>
              <li>Dildar Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>NTN Number : 4012118-6</li>
              <li>STRN Number : 1700401211818</li>
              <li>Online Shopping App</li>
              <li>Online Grocery Shopping</li>
              <li>Dildar Exclusive</li>
              <li>Dildar University</li>
              <li>Sell on Dildar</li>
              <li>Join Dildar Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Download App</h3>
            <p>Happy Shopping</p>
            <div className="flex space-x-2 mt-2">
              <FaMobile />
              <p>Download App</p>
            </div>
            <div className="flex space-x-2 mt-2">
              <FaPlay /> <p>Apple App Download</p>
            </div>
            <div className="flex space-x-2 mt-2">
              <FaPlay /> <p>Android App Download</p>
            </div>
            <div className="flex space-x-2 mt-2">
              <FaPlay /> <p>Huawei App Download</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold">Payment Methods</h3>
          <div className="flex space-x-2 mt-2">
            <FaCcVisa /> <FaCcMastercard /> <FaPaypal /> <FaMoneyBillWave />
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Verified by</h3>
            <p>Dildar.pk</p>
          </div>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <h3 className="font-bold">Follow Us:</h3>
          <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaYoutube />
          <p>dildar.pkBlog</p>
        </div>
      </div>
      <p className="mt-4">&copy; 2025 Dildar.pk - All Rights Reserved</p>
    </footer>       
    </div>
    </div>
    
  );
};

export default HomePage;
// -------------------------------------------------
// Product Description Page Components (if needed)
// -------------------------------------------------
import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer"
    >
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

const Product: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="cursor-pointer"
    >
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};
 