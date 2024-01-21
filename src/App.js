import Home  from './pages/Home';
import './App.css'
import Explore from './pages/Explore';
import  Deals from './pages/Deals';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductProfile from './components/ProductProfile';
import MobBar from './components/MobBar';
import Lists from './pages/Lists';
import { MobileMenu } from './pages/MobileMenu';
import { Search } from './pages/Search';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import ListDetails from './pages/ListDetails';
import StoreProducts from './components/StoreProducts';


const App = () => {
  return (
    
    <div className='App'>
    
    
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/:id" element={<StoreProducts />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/lists/:id" element={<ListDetails />} />
        <Route path="/Menu" element={<MobileMenu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      <MobBar />
    </Router>
    
    </div>
    
  );
};

export default App;
