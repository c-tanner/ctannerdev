import React from 'react';
import TerminalHeader from './TerminalHeader.js'
import Console from './Console.js';

class Terminal extends React.Component {
    changeView() {
        this.props.changeView();
    }
    render() {
        return (
            <div 
                id="terminal-bg"
                className={`${this.props.isRemoved ? 'remove' : ''}`}>
                <div 
                id="terminal-overlay"
                className={`${this.props.isHidden ? 'hide' : ''} ${this.props.isBlurred ? 'heavyflicker' : ''}`}></div>
                <div 
                    id="terminal-container"
                    className={`${this.props.isHidden ? 'hide' : ''} ${this.props.isBlurred ? 'heavyflicker' : ''}`}>
                    <div className="container">
                        <TerminalHeader />
                        <div className="row" id="terminal-body">
                            <div className="col">
                                <Console changeView={this.props.changeView.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Terminal;