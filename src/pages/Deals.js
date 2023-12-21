import React from 'react';
//import ProductProfile from '../components/ProductProfile';
//import Sidebar from '../components/Sidebar';
import { TopDeals } from '../components/TopDeals';

function MatchedProducts() {
  /*
  const [matchedProducts, setMatchedProducts] = useState([]);

  useEffect(() => {
    // Make an HTTP request to your Node.js server endpoint
    fetch('https://barkaa-service.onrender.com/api/match-products') // Update the endpoint as needed
      .then((response) => response.json())
      .then((data) => {
        setMatchedProducts(data);
        console.log('hi')
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array means this effect runs once on component mount
*/
  return (
    <div style={{paddingLeft:'20'}}>
        <TopDeals titre="Filter by store" />
        <div className='containerr store-items -scrollable' style={{ gap: '10px', marginTop: "30px"}}>
        <h2>Daily Deals</h2>
      </div>
    </div>
  );
}

export default MatchedProducts;
