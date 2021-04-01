import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fmt from 'indian-number-format'
import { BsDash, BsPlus } from 'react-icons/bs'
import { AiOutlineClose } from "react-icons/ai";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProductAnimation from './addProductAnimation';
toast.configure()

const Cart = (props) => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()

    const handleToken = async (token) => {
        const product = { name: 'All Products', price: totalPrice }
        const response = await axios.post("http://localhost:8080/checkout", {
            product,
            token,
        })
        const { status } = response.data
        if (status === 'success') {
            dispatch({ type: 'EMPTY' })
            props.history.push('/')
            toast.success("Payment Successful!!", { position: toast.POSITION.TOP_CENTER })
        }
    }
    return (
        <div className='cart'>
            <div className="container">
                <h2>Your Cart</h2>
                {products.length > 0 ? <>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart__heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">INC/DEC</div>
                                    <div className="col-2">Total Price</div>
                                    <div className="col-2">Remove</div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row verticalAlign" key={product.id}>
                                    <div className="col-2">
                                        <div className="cart__image">
                                            <img src={`/images/${product.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__price price__padding">
                                            ₹{fmt.format(Math.round(product.discountPrice))}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="details__info cart__incDec">
                                            <div className="details__incDec">
                                                <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}> <BsDash /></span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })}><BsPlus /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__total text-center">
                                            ₹{fmt.format(Math.round(product.discountPrice * product.quantity))}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__remove" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                            <AiOutlineClose />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary__heading">
                                    Summary
                                </div>
                                <div className="summary__details">
                                    <div className="row mb-10">
                                        <div className="summary__details__center">
                                            <div className="col-6">
                                                Total Items:
                                            </div>
                                            <div className="col-6">
                                                {totalQuantities}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="summary__details__center">
                                            <div className="col-6">
                                                Total Price:
                                                </div>
                                            <div className="col-6">
                                                ₹{fmt.format(Math.round(totalPrice))}
                                            </div>
                                        </div>
                                    </div>
                                    <StripeCheckout
                                        stripeKey="pk_test_51IagTlSJSMA09VcpPRBUp6xz1FRQqVCpvthH26T1bLsi7vpkKm5Ah6GIlKmffNtH4OdpaJfK2obNZFGSsbgg7vfS00Nx9bddr9"
                                        token={handleToken}
                                        billingAddress
                                        shippingAddress
                                        amount={totalPrice * 100}
                                        currency='INR'
                                        name='Gamer Hub'
                                    >
                                        <button type='button' className='checkout'>Proceed with payment</button>
                                    </StripeCheckout>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <AddProductAnimation />}
            </div>
        </div>
    )
}

export default Cart
