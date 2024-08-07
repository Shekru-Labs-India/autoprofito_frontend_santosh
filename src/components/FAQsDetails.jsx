import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import FAQs from './FAQs'




function FAQsDetails() {
  return (
    //Nav
    <>
    <Nav/>
   
   
    {/* Content */}
    <section className="section pt-5">
            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-2">
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0);">Help Centre</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0);">Buying and item support</a>
                                </li>
                                <li className="breadcrumb-item active">Template kits</li>
                            </ol>
                        </nav>

                        <h4 className="mb-2">How to add product in cart?</h4>
                        <p>1 month ago - Updated</p>
                    </div>
                    <div className="col-lg-12">
                        <hr style={{ borderTop: '2.5px solid #d3d3d3', marginTop: '0.5rem', marginBottom: '2rem' }} />
                    </div>
                </div>

                <div className="row gy-4 gy-lg-0">
                    <div className="col-lg-8">
                        <p>If you’re after only one item, simply choose the ‘Buy Now’ option on the item page. This will take you directly to Checkout.</p>
                        <p className="mb-0">If you want several items, use the ‘Add to Cart’ button and then choose ‘Keep Browsing’ to continue shopping or ‘Checkout’ to finalise your purchase.</p>
                        <p className="mb-0">You can go back to your cart at any time by clicking on the shopping cart icon at the top right side of the page.</p>
                        <p>If you’re after only one item, simply choose the ‘Buy Now’ option on the item page. This will take you directly to Checkout.</p>
                        <p className="mb-0">If you want several items, use the ‘Add to Cart’ button and then choose ‘Keep Browsing’ to continue shopping or ‘Checkout’ to finalise your purchase.</p>
                        <p className="mb-0">You can go back to your cart at any time by clicking on the shopping cart icon at the top right side of the page.</p>
                        <p>If you’re after only one item, simply choose the ‘Buy Now’ option on the item page. This will take you directly to Checkout.</p>
                        <p className="mb-0">If you want several items, use the ‘Add to Cart’ button and then choose ‘Keep Browsing’ to continue shopping or ‘Checkout’ to finalise your purchase.</p>
                        <p className="mb-0">You can go back to your cart at any time by clicking on the shopping cart icon at the top right side of the page.</p>
                    </div>
                    <div className="col-lg-4" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <div className="input-group input-group-merge mb-6">
                            <span className="input-group-text" id="article-search">
                                <i className="ri-search-line ri-20px" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="article-search"
                            />
                        </div>
                        <div className="bg-lightest py-2 px-4 rounded">
                            <h5 className="mb-0">Articles in this section</h5>
                        </div>
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="mb-5">
                                <a
                                    href="javascript:void(0)"
                                    className="text-heading d-flex justify-content-between align-items-center"
                                >
                                    <span className="text-truncate me-1">Template Kits</span>
                                    <i className="tf-icons ri-arrow-right-s-line ri-20px scaleX-n1-rtl text-muted" />
                                </a>
                            </li>
                            <li className="mb-5">
                                <a
                                    href="javascript:void(0)"
                                    className="text-heading d-flex justify-content-between align-items-center"
                                >
                                    <span className="text-truncate me-1">
                                        Envato Elements Template Kits - Importing Issues
                                    </span>
                                    <i className="tf-icons ri-arrow-right-s-line ri-20px scaleX-n1-rtl text-muted" />
                                </a>
                            </li>
                            <li className="mb-5">
                                <a
                                    href="javascript:void(0)"
                                    className="text-heading d-flex justify-content-between align-items-center"
                                >
                                    <span className="text-truncate me-1">
                                        Envato Elements Template Kits - Troubleshooting
                                    </span>
                                    <i className="tf-icons ri-arrow-right-s-line ri-20px scaleX-n1-rtl text-muted" />
                                </a>
                            </li>
                            <li className="mb-5">
                                <a
                                    href="javascript:void(0)"
                                    className="text-heading d-flex justify-content-between align-items-center"
                                >
                                    <span className="text-truncate me-1">
                                        How to use the template in WordPress
                                    </span>
                                    <i className="tf-icons ri-arrow-right-s-line ri-20px scaleX-n1-rtl text-muted" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="text-heading d-flex justify-content-between align-items-center"
                                >
                                    <span className="text-truncate me-1">
                                        How to use the Template Kit Import plugin
                                    </span>
                                    <i className="tf-icons ri-arrow-right-s-line ri-20px scaleX-n1-rtl text-muted" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


  
 
  <FAQs/>
  <Footer/>
  </>
  

 
  )
}

export default FAQsDetails






