import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LandingHeader from './LandingHeader';

import LandingFooter from './LandingFooter';

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get('https://ghanish.in/api/teacher/subscription_details')
      .then(response => {
        if (response.data.st === 1) {
          setSubscriptions(response.data.subscription_details);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the subscription details!', error);
      });
  }, []);

  return (
    <div>
      <LandingHeader />
      <section className="section-py first-section-pt">
        <div className="container">
          <h2 className="text-center mb-2">Pricing Plans</h2>
          <p className="text-center text-muted px-sm-12 mb-3">
            <span>All plans include 40+ advanced tools and features to boost your product.</span><br />
            Choose the best plan to fit your needs.
          </p>

          <div className="pricing-plans row mx-0 gap-6 mt-5">
            {subscriptions.map(subscription => (
              <div key={subscription.subscription_id} className="col-lg mb-md-0 mb-6 px-0">
                <div className={`card border  shadow-none`}>
                  <div className="card-body pt-12">
                    <div className="mt-3 mb-5 text-center">
                      
                    </div>
                    <h4 className="card-title text-center text-capitalize mb-1">{subscription.subscription_name}</h4>
                          <p className="text-center mb-5">A simple start for everyone</p>
                          <div className="text-center">
                            <div className="d-flex justify-content-center">
                              <sup className="h6 pricing-currency mt-2 mb-0 me-1 text-body">Rs.</sup>
                              <h1 className="mb-0 text-primary">{subscription.pricing}</h1>
                              <sub className="h6 pricing-duration mt-auto mb-2 text-body">/month</sub>
                            </div>
                            <small className="price-yearly price-yearly-toggle text-muted">(GST Included)</small>
                          </div>
                          <ul className="list-group ps-6 my-5 pt-4 flex-grow-1">
                            <li className="mb-2">Copy Trading on <strong>{subscription.maximum_student_account} Student</strong> Account. (Excluding Master)</li>
                            <li className="mb-2"><strong>{subscription.service_period} Days</strong> Service</li>
                            <li className="mb-2">Reporting: Daily, Weekly, Monthly</li>
                          </ul>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Subscription;




