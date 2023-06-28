import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Inicio from './components/Inicio/Inicio'
import ItemDetail from './components/ItemDetail/ItemDetail'
import './App.css'


function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/productos/:categoria/:id" element={<ItemDetail />}/>
      </Routes>

    </BrowserRouter>




  )
}

export default App
