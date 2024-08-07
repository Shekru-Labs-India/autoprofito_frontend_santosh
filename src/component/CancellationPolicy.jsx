import React from 'react'
import LandingFooter from './LandingFooter'
import LandingHeader from './LandingHeader'

const CancellationPolicy = () => {
  return (
    <div>
        <LandingHeader></LandingHeader>
       <section id="landingPricing" class="section-py bg-body landing-pricing">
      <div class="container bg-icon-left position-relative ">
        <h2 class="h3 ">Cancellation Policy</h2>
        <p>All Subscription plans once subscribed are not eligible for cancellations after a 3-day window from the date of subscription. During this window, the following conditions apply:
</p>
        <p>- If the User is not satisfied with the services, please write a mail to: support@quantbotsecurities.com.</p>
        <p>- Users can also contact us via phone in case of any unsatisfactory outcome.</p>
        <p>- No cancellations can be processed after 3 days starting from the date of subscription.</p>
        <p>- For REFUNDS, please refer to our refund policy.</p>
        <p>- We take customer feedback very seriously and use it to constantly improve our products and quality of service.</p>
        <p>- Quantbot Securities does not store any of your credit card information or other sensitive data restricted by the Reserve Bank of India (RBI) for payment processing. We have partnered with payment gateways for payment towards our services. By using a third-party payment provider, you agree to abide by the terms of such a payment provider.</p>


      </div>
    </section>
    <LandingFooter></LandingFooter>
    </div>
  )
}

export default CancellationPolicy
