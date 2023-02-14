import React, { useState } from 'react';


const QuestionsItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);



    return (
        <div className="questions-item">
            <div className="questions-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div className="questions-open">{isActive ? '' : ''}</div>
            </div>
            {isActive && <div className="questions-content">{content}</div>}
        </div>
    );
};

export default QuestionsItem;