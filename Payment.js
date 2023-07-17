import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';

function Payment() {
    useEffect(() => {
        const loadPayPalScript = async () => {
            const script = document.createElement("script");
            script.src = "https://www.paypal.com/sdk/js?client-id=Acf5YXVpyT3sqFmxvYGvATgaQ--2cbGMlYJ_HsJVv7qk6tl31ObJD8yt9VwVg2GZbd0d77e5s6_HIfif";
            script.addEventListener("load", () => {
                if (window.paypal) {
                    window.paypal.Buttons().render('#paypal-button');
                }
            });
            document.body.appendChild(script);
        };

        loadPayPalScript();
    }, []);

    return (

        <div>
            <div className="payment-container">
                <fieldset>
                    <div id="paypal-button" />
                    <Link to="/User">
                        <button className="btn_bleu_1">retour a la page </button>
                    </Link>
                </fieldset>
            </div>

        </div>
    );
}

export default Payment;