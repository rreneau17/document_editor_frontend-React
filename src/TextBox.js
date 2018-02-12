import React from 'react';

const TextBox = (props) => {

    console.log(props.selDoc.content);

    return (
        <div className="text-styles">
            <h2>CONTENT</h2>
            {props.selDoc.content}
        </div>
    );
  };
  
  export default TextBox;