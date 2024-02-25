import React from "react";
import Proposal from "./pages/Proposal"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Analysis from "./pages/Analysis";
import Storyboard from "./components/Storyboard";

function App() {
  return (
    <div 
      className="flex-col px-24 text-[#EEEEEE] lg:text-xl leading-loose bg-[#222831]
       h-full bottom-0 pb-96 scroll-pt-0"
      >

      
      <Navbar />
      <div className="pt-24">
        <Header />
        <Proposal />
        <Analysis />
        
      </div>
      
      {/* <NewDoc /> */}
    </div>
  );
}

export default App;
