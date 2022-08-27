import { PayPalButton } from "react-paypal-button-v2";
import { useState } from "react"
import { Button } from "../styled/Button.style"

export default function PayPal(){

  return(
    <div style={{marginTop: 40}}>
      <PayPalButton
        amount="5"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
    </div>
  )
}