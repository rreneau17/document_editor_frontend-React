import React from 'react';
import {
    Link
} from 'react-router-dom'

const TitleBox = ({
    docData = [],
    handleClick = () =>{}
    }) => {
    const listItems = docData.map((d, i) => {
        return (
        <li key={d.id}>
            <Link to={`/posts/${d.id}`}>
                {d.title}
            </Link>
        </li>
        )
    }) 
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default TitleBox;