import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"
import Roadmap from "./pages/Roadmap"
import Home from "./pages/Home"
import Demo from './components/SessionCard'
import Navbar from "./components/Navbar";


/*
* Dark Blue->Light Blue
* *222831 | *393E46 | *00ADB5
*
* Dark Grey->White
* 212121 | 757575 | BDBDBD | *EEEEEE | FFFFFF
*/
function App() {

  return (
      
      <BrowserRouter>
        <div className="flex-col px-8 pb-20 text-[#EEEEEE] lg:text-xl leading-loose bg-[#222831] h-full w-full bottom-0 scroll-pt-0">
          <Header />
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route path='/roadmap' element={<Roadmap/>} />
            <Route path='/app/demo' element={<Demo />} />
            {/* <Route path='/app' element={} /> */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>

      
  );
}

export default App;
