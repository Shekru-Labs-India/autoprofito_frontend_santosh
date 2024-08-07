import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AutoComplete } from 'primereact/autocomplete';
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';

import { useParams, useNavigate,Link } from 'react-router-dom';

const FaqDetails = () => {
  const { faqId } = useParams(); // Extract FAQ ID from URL params
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [faqDetails, setFaqDetails] = useState(null);
  const navigate = useNavigate(); // Initialize navigate for navigation

  // Fetch FAQ details based on the FAQ ID
  useEffect(() => {
    if (faqId) {
      axios.post('https://ghanish.in/api/common/get_faq_details', { faq_id: faqId })
        .then(response => {
          if (response.data.st === 1) {
            setFaqDetails(response.data.data);
          } else {
            setFaqDetails(null);
          }
        })
        .catch(error => {
          console.error('Error fetching FAQ details:', error);
          setFaqDetails(null);
        });
    }
  }, [faqId]);

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
        setSearchResults([]);
        setLoading(false);
      });
  };

  // Filter results based on search input
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
      <section className="section-py first-section-pt">
        <div className="container">
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-8">
              <div className='mb-3'>
              <Link to="/landing_faq"> <i className="ri-arrow-left-line me-3"></i>View All FAQ</Link>

              </div>
              {faqDetails ? (
                <>
                  <h4 className="mb-2"> {faqDetails.question}</h4>
                  <p className="mb-0 text-capitalize"> {faqDetails.category}</p>
                  <hr className="my-6" />
                  
                  <p className="mb-0"><strong className='me-3'></strong>{faqDetails.answer}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="col-lg-4">
              <AutoComplete
                value={searchTerm}
                suggestions={searchResults}
                completeMethod={handleSearch}
                field="question"
                itemTemplate={itemTemplate}
               
                placeholder="Search"
                onSelect={handleSelect} // Use onSelect for handling item selection
                onChange={(e) => setSearchTerm(e.value)} // Update searchTerm based on input
              />
              {/* <div className="bg-lightest py-2 px-4 rounded mt-4">
                <h5 className="mb-0">Related Articles</h5>
              </div> */}
              <ul className="list-unstyled mt-4 mb-0">
                {/* Placeholder for other article links */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
};

export default FaqDetails;


