import React from "react";
import Proposal from "./pages/Proposal"
// import Navbar from "./components/Navbar";
// import NewDoc from "./pages/NewDoc";
import Header from "./components/Header";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <div 
      className="flex-col px-24 text-[#EEEEEE] lg:text-xl leading-loose bg-[#222831]
       h-full bottom-0 pb-96"
      >
      <Header />
      <Proposal />
      <Analysis />
      
      {/* <NewDoc /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
