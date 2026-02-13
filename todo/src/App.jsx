import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Edit from "./pages/Edit"



const App = () => {

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white p-10'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<Product/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      
    </div>
  )
}

export default App
