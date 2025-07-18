import logo from './logo.svg';
import "./App.css"
import { Routes, Route } from "react-router-dom"


import Test from "./Test"
import Heading from "./Component/Heading"
import List from "./Component/List"
import Upload from "./Component/Upload"

function App() {
  return (
    <>
    <Heading />
    <Routes>
      <Route path="/List" element={<List />} />
      <Route path="/Upload" element={<Upload />} />
    </Routes>
    </>
  )
}

export default App
