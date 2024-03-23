import React from 'react';

const ScrollTopBtn = ({setScrollToTop}) => {

    return (

        <>
            <div className="scrollTopBtn">
                <i className="fas fa-arrow-alt-circle-up" onClick={() => setScrollToTop(true)}></i>
            </div>
        </>
    )
}

export default ScrollTopBtn;