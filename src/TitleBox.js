import React from 'react';
import SelectTitle from './SelectTitle';

const TitleBox = (props) => {
    const titleArray = props.data.map((d,i) => {
        return (
            <SelectTitle
            index={i}
            handleClick={props.handleClick}
            title={d.title} />
        );
    })
    return (
        <div className="title-styles">
                <h2>TITLE</h2>
                {titleArray}
            </div>
    );
  };

export default TitleBox;