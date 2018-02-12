import React from 'react';

class EditBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.selDoc.content
        }
    }
    render() {
    return (
        <div className="text-styles">
            <textarea 
                value={this.state.content} 
                onChange={(edits) => this.setEdits(edits.target.value)}
            />
            <button onClick={this.saveChanges}>SAVE</button> 
        </div>
      );
    }

    setEdits = (newEdits) => {
        this.setState ({
            content: newEdits
        })
    }

    saveChanges = () => {
        this.props.changeHandler(this.state.content, this.props.selDoc.id)
        this.props.finishEdits();
    }


};
  
  export default EditBox;