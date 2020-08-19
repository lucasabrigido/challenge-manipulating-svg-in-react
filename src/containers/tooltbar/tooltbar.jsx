import React from 'react';

import './tooltbar.scss';

const TolltBar = ({
    styles,
    text
}) => {
    
    return (
        <div style={styles} className='tooltbar' >
            <span>{text}</span>
        </div>
    )
};

export default TolltBar;