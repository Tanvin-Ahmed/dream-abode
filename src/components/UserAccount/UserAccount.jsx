import React from 'react';
import { useSelector } from 'react-redux';
import './UserAccount.css';

const UserAccount = () => {

    const { totalBuy } = useSelector(state => ({
        totalBuy: state.paymentReducer.totalBuy
    }))
    return (
        <section className="userAccount">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        totalBuy.map(buy => (
                            <div key={buy.id} className="col">
                                <div className="card h-100">
                                    <img src={buy.homeImg} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{buy.location}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Buy: {buy.date}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default UserAccount;