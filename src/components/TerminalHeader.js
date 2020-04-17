import React from 'react';
import Typist from 'react-typist';
import SocialIcons from './SocialIcons.js';

class TerminalHeader extends React.Component {
    render() {
        return(
            <div className="row" id="terminal-header">
                <div className="col-md-10">
                    <h1>
                        <Typist 
                            startDelay={800} 
                            stdTypingDelay={30}
                            cursor={{
                                hideWhenDone: true, 
                                hideWhenDoneDelay: 1000,
                                blink: true,
                            }}
                        >
                            <span>amazingengineer.com</span>
                            <Typist.Backspace count={19} delay={1200} />
                            <Typist.Delay ms={1200} />
                            <span>thebestengineer.com</span>
                            <Typist.Backspace count={19} delay={1200} />
                            <Typist.Delay ms={1800} />
                            <span>ireallyneedajob.help</span>
                            <Typist.Backspace count={20} delay={1200} />
                            <Typist.Delay ms={400} />
                            <span>christophertannerengineer.com</span>
                            <Typist.Backspace count={3} delay={400} />
                            <span>io</span>
                            <Typist.Delay ms={800} />
                            <span>?</span>
                            <Typist.Backspace count={29} delay={1200} />
                            <Typist.Delay ms={1000} />
                            <span>ctanner.dev</span>
                        </Typist>
                    </h1>
                </div>
                <div className="col-md-2">
                    <SocialIcons />
                </div>
            </div>
        )
    }
}

export default TerminalHeader;