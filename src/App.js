import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"
import Roadmap from "./pages/Roadmap"
import Home from "./pages/Home";

function App() {
  return (
      
      <BrowserRouter>
        <div className="flex-col px-24 text-[#EEEEEE] lg:text-xl leading-loose bg-[#222831] h-full bottom-0 scroll-pt-0">
          <Header />
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route path='/roadmap' element={<Roadmap/>} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
