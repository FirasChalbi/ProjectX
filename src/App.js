import Home  from './pages/Home';
import './App.css'
import Explore from './pages/Explore';
import  Deals from './pages/Deals';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductProfile from './components/ProductProfile';


const App = () => {
  return (
    <div className='App'>
    <Header />
    
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
