import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
 const [count, setCount] = useState(0);

 return (
  <>
   <Home />
   <div className="card bg-primary-300 w-28 rounded-lg border border-transparent px-3 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-300 hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-webkit-focus-ring-color mx-auto">
    <button onClick={() => setCount((count) => count + 1)}>
     count is {count}
    </button>
   </div>
  </>
 );
}

export default App;
