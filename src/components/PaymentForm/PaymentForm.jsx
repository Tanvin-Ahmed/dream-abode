import React from 'react';
import './PaymentForm.css';
import {
    CardElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { login, selectUser } from '../../features/userSlice';
import { CardField, ErrorMessage, Field, ResetButton, SubmitButton } from './FormComponent';
import { getSpecificPropertyInfo } from '../../app/actions/dataAction';
import { useEffect } from 'react';
import { setBillingDetails, setCardComplete, setError, setPaymentMethod, setProcessing, setTotalBuy } from '../../app/actions/paymentAction';

const PaymentForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();

    const { propertyData, user, paymentMethod, processing, cardComplete, error, billingDetails } = useSelector(state => ({
        propertyData: state.dataReducer.specificPropertyInfo,
        user: state.userReducer.userInfo,
        paymentMethod: state.paymentReducer.paymentMethod,
        processing: state.paymentReducer.processing,
        cardComplete: state.paymentReducer.cardComplete,
        errorMessage: state.paymentReducer.error,
        billingDetails: state.paymentReducer.billingDetails
    }));

    useEffect(() => {
        dispatch(getSpecificPropertyInfo(parseInt(id, 10)));
        dispatch(setBillingDetails({ email: user.email }));
    }, []);

    const handleSaveUserPlan = () => {
        dispatch(setTotalBuy(parseInt(id, 10)));
        history.push('/');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (error) {
            elements.getElement("card").focus();
            return;
        }

        if (cardComplete) {
            dispatch(setProcessing(true));
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: billingDetails,
        });
        dispatch(setProcessing(false));

        if (payload.error) {
            dispatch(setError(payload.error));
        } else {
            dispatch(setPaymentMethod(payload.paymentMethod));
            console.log(payload.paymentMethod);
            // save user

            handleSaveUserPlan();
        }
    };

    const reset = () => {
        dispatch(setError(null));
        dispatch(setProcessing(false));
        dispatch(setPaymentMethod(null));
        dispatch(setBillingDetails({}));
    };

    return (
        <div className="paymentForm">
            <div className="paymentForm__container">
                {
                    paymentMethod ? (
                        <div className="Result">
                            <div className="ResultTitle" role="alert">
                                Payment successful
                            </div>
                            <div className="ResultMessage">
                                Thanks for trying Stripe Elements. No money was charged, but we
                        generated a PaymentMethod: {paymentMethod.id}
                            </div>
                            <ResetButton onClick={reset} />
                        </div>
                    ) : (
                        <form className="Form" onSubmit={handleSubmit}>
                            <fieldset className="FormGroup">
                                <Field
                                    label="Name"
                                    id="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    value={billingDetails.name}
                                    onChange={(e) => {
                                        dispatch(setBillingDetails({ ...billingDetails, name: e.target.value }));
                                    }}
                                />
                                <Field
                                    label="Email"
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={user.email}
                                    readOnly
                                />
                                <Field
                                    label="Phone"
                                    id="phone"
                                    type="tel"
                                    required
                                    autoComplete="tel"
                                    value={billingDetails.phone}
                                    onChange={(e) => {
                                        dispatch(setBillingDetails({ ...billingDetails, phone: e.target.value }));
                                    }}
                                />
                            </fieldset>
                            <fieldset className="FormGroup">
                                <CardField
                                    onChange={(e) => {
                                        dispatch(setError(e.error));
                                        dispatch(setCardComplete(e.complete));
                                    }}
                                />
                            </fieldset>
                            {error && <ErrorMessage>{error.message}</ErrorMessage>}
                            <SubmitButton processing={processing} error={error} disabled={!stripe}>
                                Pay {propertyData.price + ' TK'}
                            </SubmitButton>
                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default PaymentForm;