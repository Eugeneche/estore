import ProductCard from './components/Product/ProductCard'
import NotFound from './components/NotFound/NotFound'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import MainContainer from './components/MainContainer/MainContainer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContainer />} />
          <Route path="product-:id" element={<ProductCard />} />
          <Route path="*" element={<NotFound />} />
        </Route>     
      </Routes>
    </div>
  )
}

export default App
