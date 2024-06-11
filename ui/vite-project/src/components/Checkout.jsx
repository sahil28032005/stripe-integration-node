import React,{useEffect} from 'react'

const Checkout = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <section>
                <div className="product">
                    <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
                    <div className="description">
                        <h3>Stubborn Attachments</h3>
                        <h5>$20.00</h5>
                    </div>
                </div>
                <form action="http://localhost:4242/create-checkout-session" method="POST">
                    <button type="submit" id="checkout-button">Checkout</button>
                </form>
            </section>
        </>
    )

}
export default Checkout