  import {React, useState} from 'react';
  import './profile.css';
  import add from '../image/add.svg'
  import added from '../image/added.svg'
  //import down from '../image/down.svg'
  //import info from '../image/info.svg'
  import CTS from '../image/CTS.jpg'
  import WhereToBuy from './WhereToBuy';
  import TodayPrice from './TodayPrice';
  //import { useParams } from 'react-router-dom';


  
  export default function ProductProfile() {
    const dataParam = new URLSearchParams(window.location.search).get('data');
    const data = dataParam ? JSON.parse(decodeURIComponent(encodeURIComponent(dataParam))) : null;
     // eslint-disable-next-line
    const [isLoading, setIsLoading] = useState(false);
    const [isAddedToList, setIsAddedToList] = useState(false);
  
    const onAddToProduct = async (productData, listId) => {
      try {
        const productId = productData._id;
  
        if (!productId) {
          console.error('Product ID is null or undefined.');
          return;
        }
  
        setIsLoading(true);
  
        const response = await fetch(`https://barkaa-service.onrender.com/api/lists/${listId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: productData._id,
          }),
          credentials: 'include',
        });
  
        if (!response.ok) {
          console.error('Error adding product to list:', response.statusText);
          return;
        }
  
        console.log('Product added to list:', response);
        console.log('Adding product to list:', productData, 'List ID:', listId);
      } catch (error) {
        console.error('Error adding product to list:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleAddToList = async (event) => {
      event.stopPropagation();
      event.preventDefault();
  
      const list = await get_list_menu(event.target);
  
      if (list) {
        onAddToProduct(data, list._id);
        setIsAddedToList(true);
      }
    };
  
    const get_list_menu = async (target) => {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/api/lists', {
          credentials: 'include',
        });
  
        if (!response.ok) {
          console.error('Error fetching lists:', response.statusText);
          return null;
        }
  
        const lists = await response.json();
  
        if (lists.length === 0) {
          const createListConfirmation = window.confirm('You have no lists. Do you want to create one?');
          if (createListConfirmation) {
            // Implement logic to create a new list
          }
          return null;
        } else {
          const selectedList = window.prompt('You have multiple lists. Enter the name of the list to add the product:');
          if (selectedList === null) {
            return null;
          }
  
          const matchingList = lists.find((list) => list.name === selectedList);
          if (matchingList) {
            return matchingList;
          } else {
            alert('List not found. Please enter a valid list name.');
            return null;
          }
        }
      } catch (error) {
        console.error('Error fetching lists:', error);
        return null;
      }
    };
  
    const handleShareProduct = () => {
      // Your implementation here
    };
  
    const handleReportProduct = () => {
      // Your implementation here
    };


    return (
      <div class="parent product-profile">
      <div>
        <section className="product-info product-item">
          <div className="tile">
            <div style={{ paddingTop: '5px' }}>
              <div className="_brand">{data.shop1Product.brand}</div>
              <div className="_desc">{data.shop1Product.name}</div>
              <div className="_size">
                <div className="tag -d-grey-filled -size-l">{data.shop1Product.size}</div>
                <div className="tag _qty -size-l">
                  6{' '}
                  <svg className="icon">
                    <use xlinkHref="#svg_qty"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="_img">
              <img src={data.shop1Product.imageSrc} alt="Product" style={{height:"400px", width:"300px", marginTop:"-25%", padding:"1px"}} />
            </div>
          </div>
          

          <div className="tile" style={{ position: 'relative' }}>
            <div className="product-toolbar product-toolbar2">
            <button className={`add ${isAddedToList ? 'hidden' : ''}`} onClick={handleAddToList}>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                </svg>
                List
              </button>
              <button className={`added ${isAddedToList ? 'visible' : 'hidden'}`}>
                <svg className="icon">
                  <use xlinkHref="#svg_added"></use>
                </svg>
                List
              </button>
              <button onClick={handleShareProduct}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg> Share
              </button>
              <button onClick={handleReportProduct}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.246 4.042c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v-2.841h-2v24h2v-9.073c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028s-1.621 1.429-3.754 1.429zm1.754 9.544c-.4.207-.959.414-1.593.414-.972 0-1.498-.363-2.371-.964-1.096-.755-2.596-1.79-5.113-1.79-1.979 0-3.71.679-4.923 1.339v-7.488c1.019-.902 2.865-1.949 4.909-1.949 1.333 0 1.894.439 2.741 1.103.966.756 2.288 1.792 4.596 1.792.627 0 1.215-.086 1.754-.223v7.766z"/></svg> Report
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <div>
        <WhereToBuy data={data} />
        <TodayPrice data ={data}/>
      <section>
    <div className="tile">
      <div>
        <h2>Good to know</h2>
      </div>
      <div className="product-desc-new -active">
        <ul className="product-description" style={{ marginLeft: '0px' }}>
        {data.shop1Product.description}
        </ul>
      </div>
    </div>
      </section>
      <section id="question_answer" style={{ display: 'none' }}>
    <div className="tile">
      <div className="flow-items -head" style={{ justifyContent: 'space-between' }}>
        <h2>Questions & Answers</h2>
      </div>
      <div className="post-question-tile">
        <div>
          <div style={{ fontWeight: 500, marginBottom: '3px' }}>Want to know something specific?</div>
          <div>Ask a question and get answers from the community.</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button type="button" className="button -blue-btn post-question">Ask a Question</button>
        </div>
      </div>
      <div className="question_answer_cn -hide-imp">
        <form id="question_form">
          <div>
            <div className="add-desc">
              <div style={{ position: 'relative' }}>
                <label htmlFor="question">Ask a question</label>
                <div className="-text-count">
                  <textarea
                    className="question-text -text-count"
                    id="question"
                    name="question"
                    placeholder="E.g. Is the packaging recyclable?"
                    maxLength="100"
                  ></textarea>
                  <div id="count_0v12r" className="count">100</div>
                </div>
              </div>
              <label style={{ fontWeight: 400, margin: '10px 0 0' }}>
                Your question may be answered by sellers, manufacturers or customers who bought this product.
              </label>
              <div>
                <button type="button" className="submit-btn -send-question">ADD QUESTION</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
      </section>
      <section id="rating_cn">
    <div className="tile">
      <div className="review_headline">
        <h2>Reviews</h2>
      </div>
      <div id="submit_review">
        <div className="review_start_cn">
          <div>
            <h3 style={{ margin: 0, marginBottom: '3px' }}>Review this product</h3>
            <div>Share your thoughts with other customers</div>
          </div>
          <button className="button -write-leave -leave-review -blue-btn">WRITE REVIEW</button>
        </div>
        <div className="-leave-review-input -hide-imp">
          <form id="leave_review_form">
            <div>
              <label htmlFor="leave_review_rating" style={{ marginBottom: 0, marginTop: 0 }}>
                How would you rate this product
              </label>
              <div className="rating-overlay">
                <div className="rating-btns">
                  <button type="button" data-rate="1" title="1 Star"></button>
                  <button type="button" data-rate="2" title="2 Stars"></button>
                  <button type="button" data-rate="3" title="3 Stars"></button>
                  <button type="button" data-rate="4" title="4 Stars"></button>
                  <button type="button" data-rate="5" title="5 Stars"></button>
                </div>
                <input type="hidden" name="review_rating" id="leave_review_rating" value="0" required="" />
                <div className="rating">
                  <div className="_fill-overlay" style={{ width: '0px' }}>
                    <svg className="_stars">
                      <use xlinkHref="#svg_rating"></use>
                    </svg>
                  </div>
                  <svg className="_stars">
                    <use xlinkHref="#svg_rating"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="leave_review_text">Why did you give this rating</label>
              <div className="-text-count">
                <textarea
                  name="review_text"
                  id="leave_review_text"
                  required=""
                  maxLength="500"
                  placeholder="Tell us what you liked or disliked and what did you use this product for?"
                  className="-text-count"
                ></textarea>
                <div id="count_demru" className="count">500</div>
              </div>
            </div>
            <button type="button" className="button -send-review -comp-visit-btn">SEND REVIEW</button>
            <input type="hidden" name="leave_review" value="1" />
          </form>
        </div>
      </div>
    </div>
      </section>
      <section class="scrollbar-h" id="more_from">
      <div class="tile">
          <div className="flow-items" style={{ justifyContent: 'space-between' }}>
              <h2>More From {data.shop1Product.brand}</h2>
          </div>
          <div>
              <div class="products-grid-s">
                  <div class="_inner">
                      <div class="product-item" data-id="WOS923">
                          <a href="/product/loreal-paris-elvive-nutri-gloss-shampoo/WOS923" title="Elvive Nutri-Gloss Shine Dull Hair Shampoo (500ml)">
                              
                                  <button class="_add js-add_to_list_menu" data-id="WOS923" onclick="event.stopPropagation();event.preventDefault();get_list_menu(this);gtag('event', 'click', {'event_category': 'Product Page Lists', 'event_action': 'Clicked Add To List - Search', 'event_label': 'Location - Search Page - Picture'});">
                                      <svg class="icon add">
                                          <img src={add} alt="Add Icon" className="icon" />
                                      </svg>
                                      <svg class="icon added">
                                          <img src={added} alt="Add Icon" className="icon" />
                                      </svg>
                                  </button>
                                  <div class="_img"><img src={CTS} alt='add' loading="lazy"/></div>
                              
                              <div className="_tag" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                  <div class="_size">
                                      <div>500ml</div>
                                  </div>
                              </div>
                              <div class="_info">
                                  <div class="_brand">L'Oreal</div>
                                  <div class="_desc">Elvive Nutri-Gloss Shine Dull Hair Shampoo</div>
                                  <div class="_price">
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}></div> 1 DT <div class="_per-item">1 DT per 100ml <br/></div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
      </section>
      <section id="related_products">
      <div class="tile">
          <div className="flow-items" style={{ justifyContent: 'space-between' }}>
              <h2>Related Products</h2>
          </div>
          <div>
              <div class="products-grid-s">
                  <div class="_inner">
                      <div class="product-item" data-id="SKV336">
                          <a href="/product/argan-shine-shampoo/SKV336" title="Shine Shampoo (300ml)">
                              <div class="_img">
                                  <button class="_add js-add_to_list_menu" data-id="SKV336" onclick="event.stopPropagation();event.preventDefault();get_list_menu(this);gtag('event', 'click', {'event_category': 'Product Page Lists', 'event_action': 'Clicked Add To List - Search', 'event_label': 'Location - Search Page - Picture'});">
                                      <svg class="icon add">
                                          <img src={add} alt="Add Icon" className="icon" />
                                      </svg>
                                      <svg class="icon added">
                                          <img src={added} alt="Add Icon" className="icon" />
                                      </svg>
                                  </button>
                                  <img src="/img/product/SKV336" alt='skv' loading="lazy" />
                              </div>
                              <div className="_tag" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                  <div class="_size">
                                      <div>300ml</div>
                                  </div>
                              </div>
                              <div class="_info">
                                  <div class="_brand">Argan+</div>
                                  <div class="_desc">Shine Shampoo</div>
                                  <div class="_price">
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}></div> 1 DT <div class="_per-item">1 DT per 100ml <br/></div>
                                  </div>
                              </div>
                          </a>
                      </div>
                     
                  </div>
              </div>
          </div>
      </div>
      </section>
      <section id="related_searches">
      <div class="tile">
          <div className="flow-items" style={{ justifyContent: 'space-between' }}>
              <h2>Related Searches</h2>
          </div>
          <div>
              <div class="items-grid">
                  <a class="list-item" href="/explore/loreal">
                      <div>{data.shop1Product.brand}</div>
                  </a>
                  <a class="list-item" href="/explore/shampoo">
                      <div>{data.shop2Product.category}</div>
                  </a>
              </div>
          </div>
      </div>
      </section>
      </div>
      </div>


    );
  }
