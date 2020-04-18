import React from 'react';
import ConsoleInput from './ConsoleInput.js';

class Console extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyName: null,
            cmd: null,
            consoleOutput: [],
            consoleInputVal: '',
            messagesEnd: null
        };
    }
    changeView() {
        this.props.changeView();
    }
    onChange(keyName, cmd) {
        if (keyName === 'Enter') {
            let messages;
            if (cmd === 'start') {
                messages = [
                    {label: 'Starting ctanner.dev..'}
                ];
                this.changeView();
            } else if (cmd === 'man dev') {
                messages = [
                    {label: 'builtwith', message: 'see a list of technologies this site is built with'},
                    {label: 'clear', message: 'clear the console output'},
                    {label: 'hireme', message: 'find out the best way to contact me for job opportunities'},
                    {label: 'man dev', message: 'show a list of commands you can run (you are here)'},
                    {label: 'start', message: 'start the ctanner.dev program (view the front end)'}
                ];
            } else if (cmd === "builtwith") {
                messages = [
                    {label: 'Front end', message: 'React.js and SASS (+ Bootstrap) provide the UI'},
                    {label: 'Back end', message: 'Node, PHP and MySQL handle the API endpoints and logging'},
                    {label: 'Deployment', message: 'Git for source control, Google App Engine for serverless infrastructure'}
                ];
            } else if (cmd === "hireme") {
                messages = [
                    {label: 'Email', message: 'hire@ctanner.dev'},
                    {label: 'LinkedIn', message: '', link: 'https://linkedin.com/in/ctannerdev'}
                ];
            } else if (cmd === "clear") {
                messages = [{label: 'Console cleared'}];
                this.setState({
                    consoleOutput: [],
                    consoleInputVal: ''
                });
            } else if (cmd.includes("su")) {
                messages = [
                    {label: 'This incident has been reported. Nice try :)'}
                ];
            } else {
                messages = [{label: 'Invalid command'}];
            }
            const newData = {cmd: cmd, messages: messages};
            this.setState(prevState => ({
                consoleOutput: [...prevState.consoleOutput, newData],
                consoleInputVal: ''
            }));
        } else {
            this.setState({
                consoleInputVal: cmd
            });
        }
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        return(
            <div id="console-container">
                <div>
                    Type 'start' to begin, or 'man dev' for more options
                </div>
                {this.state.consoleOutput.map((output, index) => {
                    return (
                        <div key={index}>
                            <div>$ {output.cmd}</div>
                            {output.messages.map((message, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            <strong>{message.label}</strong>
                                        </div>
                                        <div className="consoleMessage">
                                            {message.message}
                                            <a 
                                                href={message.link} 
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                {message.link}
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <div>
                    $ <ConsoleInput 
                        onChange={this.onChange.bind(this)} 
                        inputVal={this.state.consoleInputVal} />
                </div>
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

export default Console;