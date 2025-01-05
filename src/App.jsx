import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Feed from './pages/Feed'
import Favorites from './pages/Favorites'
import PropertyDetails from './pages/PropertyDetails'
import Nav from './components/navbar';

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Feed />} ></Route>
          <Route path="/favorites" element={<Favorites />} ></Route>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
