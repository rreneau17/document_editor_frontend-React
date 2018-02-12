import React from 'react';
import { Link } from 'react-router-dom';

const TextBox = (props) => {

    console.log(props.selDoc.content);

    return (
        <div className="text-styles">
            <h2>CONTENT</h2>
            {props.selDoc.content}
            <button>
                <Link to={`/posts/${props.selDoc.id}/edit`}>EDIT</Link>
            </button>
        </div>
    );
  };
  
  export default TextBox;