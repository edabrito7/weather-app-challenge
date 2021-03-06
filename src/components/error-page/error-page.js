import React from 'react';

import './error-page.css';

const ErrorPage = () => {

    return(
        <div className='error-page-container'>
            <h1 className='text'>Sorry something went wrong...</h1>
            <h2 className='text'>It is me.. not you</h2>
            <div 
            className='text text-link'
            onClick={() => window.location.reload() }
            >
                let's try again
            </div>
        </div>
    )
}

export default ErrorPage;