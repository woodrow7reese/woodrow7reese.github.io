import React from "react";
// import Proposal from "./pages/Proposal"
import Navbar from "./components/Navbar";
import NewDoc from "./pages/NewDoc";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex-col bg-[#222831]">
      <Header />
      {/* <Proposal /> */}
      <NewDoc />
      <Navbar />
    </div>
  );
}

export default App;
