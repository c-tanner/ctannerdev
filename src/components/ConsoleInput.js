import React from 'react';

class ConsoleInput extends React.Component {
    componentDidMount() {
        this.consoleInput.focus();
    }
    _handleKeyDown(e) {
        const value = e.target.value;
        const key = e.key;
        this.props.onChange(key, value);
    }
    render() {
        return (
            <div className="consoleInput">
                <input 
                    type="text" 
                    id="consoleInput"
                    className="consoleInput--input" 
                    autoComplete="off"
                    ref={(input) => { this.consoleInput = input}}
                    onKeyDown={this._handleKeyDown.bind(this)}
                    onChange={this._handleKeyDown.bind(this)}
                    value={this.props.inputVal}
                />
                <i></i>
            </div>
        )
    }
}

export default ConsoleInput;