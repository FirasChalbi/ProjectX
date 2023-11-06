  import React from 'react';
  import './profile.css';
  import add from '../image/add.svg'
  import added from '../image/added.svg'
  //import down from '../image/down.svg'
  //import info from '../image/info.svg'
  import CTS from '../image/CTS.jpg'
  import WhereToBuy from './WhereToBuy';
  import TodayPrice from './TodayPrice';
  //import { useParams } from 'react-router-dom';


  function get_list_menu() {
      // Your implementation here
    }
    
    function gtag() {
      // Your implementation here
    }
    
    function share_product() {
      // Your implementation here
    }
    
    function report_product() {
      // Your implementation here
    }

  export default function ProductProfile() {

    //const { productId } = useParams();
    const dataParam = new URLSearchParams(window.location.search).get('data');
    const data = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;
    

    const handleAddToList = () => {
      get_list_menu(this);
      gtag('event', 'click', {
        event_category: 'Product Page Lists',
        event_action: 'Clicked Add To List',
        event_label: 'Location - Product Page - Picture'
      });
    };

    const handleShareProduct = () => {
      share_product();
      gtag('event', 'click', {
        event_category: 'Product Page Share',
        event_action: 'Clicked Share',
        event_label: 'Location - Product Page - Picture'
      });
    };

    const handleReportProduct = () => {
      report_product();
      gtag('event', 'click', {
        event_category: 'Product Page Report',
        event_action: 'Clicked Report',
        event_label: 'Location - Product Page - Below Picture'
      });
    };



    //const [isCollapseActive, setCollapseActive] = useState(false);

    //const toggleCollapse = () => {setCollapseActive(!isCollapseActive);};


    

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
              <img src={data.shop1Product.imageSrc} alt="Product" style={{height:"500px", width:"500px", marginTop:"-25%"}} />
            </div>
          </div>
          

          <div className="tile" style={{ position: 'relative' }}>
            <div className="product-toolbar product-toolbar2">
              <div className="js-add_to_list_menu" onClick={handleAddToList} data-id="ITN751">
                <button className="add">
                  <div>
                    <svg className="icon">
                      <use xlinkHref="#svg_add"></use>
                    </svg>
                  </div> List
                </button>
                <button className="added">
                  <div>
                    <svg className="icon">
                      <use xlinkHref="#svg_added"></use>
                    </svg>
                  </div> List
                </button>
              </div>
              <button onClick={handleShareProduct}>
                <svg className="icon">
                  <use xlinkHref="#svg_share"></use>
                </svg> Share
              </button>
              <button onClick={handleReportProduct}>
                <svg className="icon">
                  <use xlinkHref="#svg_flag"></use>
                </svg> Report
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
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}></div> £3.50 <div class="_per-item">£0.70 per 100ml <br/></div>
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
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}></div> £4.16 <div class="_per-item">£1.39 per 100ml <br/></div>
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
