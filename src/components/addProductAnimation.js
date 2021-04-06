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
            <div id='add-product' className='empty-cart-animation' />
            <h2 className='empty-cart-text'>add products to your cart</h2>
        </div>
    )
}

export default AddProductAnimation
