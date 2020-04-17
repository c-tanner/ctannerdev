import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Terminal from './components/Terminal.js';
import Modern from './components/Modern.js';
import Loader from './components/Loader.js';

library.add(fal, fab)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blurTerminal: false,
            hideTerminal: false,
            removeTerminal: false,
            hideModern: false,
            modernContainerHeight: 0,
            loaderPercent: 0,
            loaderOpacity: 0,
            showLoader: false
        }
    }
    showLoader() {
        this.setState({
            blurTerminal: true,
            showLoader: true,
            loaderPercent: 100,
            loaderOpacity: 1,
            hideModern: false
        });
    }
    showModern() {
        this.setState({
            hideTerminal: true,
            loaderOpacity: 0,
            removeTerminal: true,
            modernContainerHeight: '100%'
        });
    }
    componentDidMount() {
        console.log("\nHey there!\nFeel free to look around, but if you want to a look at the source code, head over to:\n");
        console.log("=======================================\n");
        console.log("https://github.com/c-tanner/ctannerdev\n");
        console.log("=======================================\n");
        console.log("Looking for a senior software engineer with leadership experience?\n");
        console.log("====================\n");
        console.log("hire@ctanner.dev\n");
        console.log("====================\n");
    }
    render() {
        return (
            <div>
                <Terminal 
                    isHidden={this.state.hideTerminal} 
                    isBlurred={this.state.blurTerminal}
                    isRemoved={this.state.removeTerminal}
                    changeView={this.showLoader.bind(this)} />
                <Loader 
                    loaderPercent={this.state.loaderPercent} 
                    loaderOpacity={this.state.loaderOpacity} 
                    showLoader={this.state.showLoader}
                    changeView={this.showModern.bind(this)} />
                <Modern 
                    isHidden={this.state.hideModern}
                    containerHeight={this.state.modernContainerHeight} />
            </div>
        )
    }
}

export default App;