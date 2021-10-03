import React from "react";

export default class ItemCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: this.props.text,
            editActive: false,
        }
    }
    
    handleClick = (event) => {
        if (event.detail === 2) {
            this.setState({ text: this.props.text });
            this.handleToggleEdit(event);
        }
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }

    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }

    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }

    handleBlur = () => {
        let id = this.props.id;
        let newValue = this.state.text;
        this.props.renameListItemCallback(id, newValue);
        this.handleToggleEdit();
    }


    render() {
        const {text, id} = this.props;
        if (this.state.editActive){
            return(
                <div 
                    id={'item-' + id} 
                    className="top5-item">
                        <input 
                            id = {'item-text-input-' + id}
                            type= 'text'
                            onKeyPress={this.handleKeyPress}
                            onBlur={this.handleBlur}
                            onChange={this.handleUpdate}
                            value={this.state.text}
                        />
                </div>
                
                
            )
        }
        else {
            return (
                <div 
                    id={'item-' + id} 
                    onClick={this.handleClick}
                    className="top5-item">
                        {text}
                </div>
            )
        }
    }
}