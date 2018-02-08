import React from 'react';

const SelectTitle = (props) => {
        return (
                <li onClick={() => { props.handleClick(props.index) }}>{props.title}</li>
                );
            };


export default SelectTitle;