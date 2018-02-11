import React from 'react';

const TextBox = (props) => {

    console.log(props.selDoc.content);

    return (
        <div className="text-styles">
            <h2>CONTENT</h2>
            {props.selDoc.content}
            <button onClick={ () => { props.handleClick(true) }}>EDIT</button>
        </div>
    );
  };
  
  export default TextBox;