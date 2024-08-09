import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from './pages/Home'
import Work from './pages/Work'
function App() {
 

  return (
    <>
    <section className=" bg-n-2 font-inter main " >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
       
      </Routes>
    </section>
    
    </>
  )
}

export default App
