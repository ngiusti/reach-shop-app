import React from "react";
import StripCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_DzR9tYcuI0o1c24M9mu0ySJ000WDqbOwkS";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripCheckout
      label='Pay Now'
      name='CRWN Clothing LTD'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
