import React, { useEffect, useRef } from'react'

function Paiement () {
    const paypal = useRef()
    useEffect (()=> {
        window.paypal.Button({
            createOrder:(data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                        description: "Cool Looking table",
                        amount: {
                            currency_code: "CAD",
                            value: 600.00
                        }
                    }]
                });
            },
            onApprove: async (data,actions)=>{
                const order = await actions.order.capture();
                console.log(order);    
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);

    }, []);
  
   return(
       <div ref={paypal}></div>
   )
}


export default Paiement;