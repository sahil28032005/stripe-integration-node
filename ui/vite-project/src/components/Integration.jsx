import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Integration = () => {
    const navigate = useNavigate();
    const makeTransaction = async () => {
        try {
            const url = "http://localhost:4242/create-checkout-session";
            const response = await axios.post(url);
            if (response.data) {
                console.log(response.data);
                navigate("/checkout");
            }
            else {
                console.log("problem for getting response from api");
            }
        }
        catch (exception) {
            console.log(exception.message);
        }

    }

    useEffect(() => {
        makeTransaction();
    }, []);
    return (
        <div>Integration</div>
    )
}

export default Integration