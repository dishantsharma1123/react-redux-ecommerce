import React from 'react'
import lottie from 'lottie-web'
import requestingAddProduct from '../animations/requestingAddProduct.json'

const AddProductAnimation = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#add-product"),
            animationData: requestingAddProduct,
        });
    }, []);
    return (
        <div className='animation-container'>
            <div id='add-product' style={{ width: 400, height: 400 }} />
            <h2>Ooopsss... you don't have any product in the cart</h2>
        </div>
    )
}

export default AddProductAnimation
