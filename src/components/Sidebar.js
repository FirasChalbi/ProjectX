import React from 'react'
import './sidebar.css'
import home from '../image/store.png'
import explore from '../image/shelf.svg'
import deal from '../image/discount.svg'


function Sidebar() {
  return (
        <div className="sidebar -shadow">
            <div className="sidebar-header-spacer"></div>
            <div className="sidebar-content">
                <div>
                <a href="/" className="sidebar-item -highlight">
                    <div>
                    <img style={{ width: '26px', height: '26px' }} src={home} alt="Add Icon" className="icon" />
                    </div>
                    <div>For You</div>
                </a>
                <a href="/explore/" className="sidebar-item">
                    <div>
                    <img style={{ width: '29px', height: '29px' }} src={explore} alt="Add Icon" className="icon _aisles" />
                    </div>
                    <div>Explore</div>
                </a>
                <a href="/deals/" className="sidebar-item">
                    <div>
                    
                    <img style={{ width: '29px', height: '29px' }} src={deal} alt="Add Icon" className="icon _deals" />
                    
                    </div>
                    <div>Deals</div>
                </a>
                </div>
            </div>
    </div>

  )
}

export default Sidebar


//<div class="notification " style="bottom: 50px; opacity: 1;"><div>Added to A.</div><a class="button" href="/lists/?open=181578">View</a></div>