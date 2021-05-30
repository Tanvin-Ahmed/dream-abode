import React from 'react';

const NoMatch = () => {
    return (
        <section style={{ width: '100%', height: '100vh' }} className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-secondary">Page Not Found</h1>
                <h3 className="text-secondary">404</h3>
        </section>
    );
};

export default NoMatch;