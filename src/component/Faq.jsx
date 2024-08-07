


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AutoComplete } from 'primereact/autocomplete';
import LandingHeader from './LandingHeader';
 // Or use a different icon library

import LandingFooter from './LandingFooter';

import { useNavigate ,Link} from 'react-router-dom';
import img from "../assets/img/header-light.png"
const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const navigate = useNavigate(); // Initialize navigate for navigation

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://ghanish.in/api/common/get_faq')
      .then(response => {
        if (response.data.st === 1) {
          setFaqs(response.data.data);
        } else {
          setFaqs([]);
        }
      })
      .catch(error => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  // Fetch search results based on input
  const fetchSearchResults = (query) => {
    setLoading(true);
    axios.post('https://ghanish.in/api/common/search_faq', { keyword: query })
      .then(response => {
        if (response.data.st === 1) {
          setSearchResults(response.data.data);
        } else {
          setSearchResults([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
  };

  // Handle search input
  const handleSearch = (event) => {
    const query = event.query;
    setSearchTerm(query);
    if (query.length >= 3) {
      fetchSearchResults(query);
    } else {
      setSearchResults([]);
    }
  };

  // Handle item selection
  const handleSelect = (e) => {
    const selectedItem = e.value;
    if (selectedItem) {
      navigate(`/landing_faq_details/${selectedItem.id}`);
    }
  };

  // Item template for AutoComplete dropdown
  const itemTemplate = (item) => {
    return (
      <div>{item.question}</div>
    );
  };

  return (
    <div>
      <LandingHeader />
      <div className="container">
        <section className="section-py first-section-pt help-center-header position-relative overflow-hidden">
          <img
            className="banner-bg-img z-n1"
            src={img}
            alt="Help center header"
            data-app-light-img="pages/header-light.png"
            data-app-dark-img="pages/header-dark.png"
          />
          <h4 className="text-center text-primary">Hello, how can we help?</h4>
          <div className="text-center my-4">
         
        <AutoComplete
          value={searchTerm}
          suggestions={searchResults}
          completeMethod={handleSearch}
          field="question"
          itemTemplate={itemTemplate}
          onSelect={handleSelect}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.value)}
         

        />
      
          </div>
          <p className="text-center px-4 mb-0">
            Common troubleshooting topics: eCommerce, Blogging to payment
          </p>
        </section>

        <div className="row">
          {faqs.map((category) => (
            <div className="col-md-4 col-ms-6 mb-6 mt-3 mb-8" key={category.category_name}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm flex-shrink-0 me-2">
                      <span className="avatar-initial bg-label-primary rounded">
                        <i className="tf-icons ri-shopping-cart-line ri-20px"></i>
                      </span>
                    </div>
                    <h5 className="mb-0 ms-1 text-capitalize">{category.category_name}</h5>

                  </div>
                  <ul className="list-unstyled my-6">
                    {category.faq.map((item) => (
                      <li className="mb-2" key={item.faq_id}>
                        <Link 
                          to={`/landing_faq_details/${item.faq_id}`} 
                          className="text-heading d-flex justify-content-between align-items-center"
                        >
                          <span className="text-truncate me-1">
                            {item.faq_question}
                          </span>
                          <i className="tf-icons ri-arrow-right-s-line ri-20px scaleX-n1-rtl text-muted"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <LandingFooter />
    </div>
  );
};

export default Faq;
