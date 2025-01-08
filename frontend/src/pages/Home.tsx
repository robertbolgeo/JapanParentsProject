import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Home() {
 const [count, setCount] = useState(0);

 return (
  <>
   <Navbar />
   <HomeHero />
   <div className="card bg-primary-300 w-28 rounded-lg border border-transparent px-3 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-300 hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-webkit-focus-ring-color mx-auto">
    <button onClick={() => setCount((count) => count + 1)}>
     count is {count}
    </button>
   </div>
   <Footer />
  </>
 );
}

export default Home;
