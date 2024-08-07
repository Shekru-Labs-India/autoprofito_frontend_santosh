import React from 'react'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'

const Refund = () => {
  return (
    <div>
        <LandingHeader></LandingHeader>
       <section id="landingPricing" class="section-py bg-body landing-pricing">
      <div class="container  bg-icon-left position-relative">
        <h2 class="h3 ">Refund Policy</h2>
        <p>Any order for subscribing to a Subscription plan by the User on the Website is between the User and Quantbot Securities. Users agree to provide accurate and complete details at the time of ordering.</p>

        <p>- Subscription Charges: Users agree to pay the required subscription fee as per the Subscription plan available on the Website.</p>
        <p>- Subscription Payment: Payment modes accepted include Online payments via Credit Cards and Debit Cards.</p>
        <p>- Any order placed for subscribing to a Subscription plan is subject to acceptance by Quantbot Securities. Upon placing an order online, users will receive an email confirming receipt of the order.</p>
        <p>- We may refuse or be unable to process your order/subscription if:</p>
        <p>- Your card does not authorize the payment of the purchase price.</p>
        <p>- You do not meet the eligibility criteria for placing an order.</p>
        <p>- For REFUNDS, refunds are generally processed within 5-7 days upon agreement as per the cancellation policy. For any issues, please contact us via email at: support@quantbotsecurities.com</p>
        <p>- We take customer feedback very seriously and use it to constantly improve our products and quality of service.</p>
        <p>- Quantbot Securities does not store any of your credit card information or other sensitive data restricted by the Reserve Bank of India (RBI) for payment processing. We have partnered with payment gateways for payment towards our services. By using a third-party payment provider, you agree to abide by the terms of such a payment provider.</p>


      </div>
    </section>
    <LandingFooter></LandingFooter>
    </div>
  )
}

export default Refund
