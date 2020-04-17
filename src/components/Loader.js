import React from 'react';
import { Progress } from 'rsuite';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            color: '#3ad613',
            percent: 0,
            loaderOpacity: this.props.loaderOpacity
        }
        this.animateLoader = this.animateLoader.bind(this);
    }
    animateLoader() {
        let timer = setTimeout(() => {
            if (this.state.percent < 70) {
                this.setState({
                    percent: 20
                });
            }
        }, 1000);
        timer = setTimeout(() => {
            if (this.state.percent < 70) {
                this.setState({
                    percent: 70
                });
            }
        }, 2000);
        timer = setTimeout(() => {
            this.setState({
                percent: 100,
                status: 'success',
                color: '#33FF00'
            });
        }, 2800);
        timer = setTimeout(() => {
            this.changeView();
            document.getElementById('loaderOverlay').style.display = 'none';
        }, 3500);
        return () => clearTimeout(timer);
    }
    changeView() {
        this.props.changeView();
    }
    hideLoader() {
        this.props.isRemoved();
    }
    componentDidUpdate() {
        if (this.props.loaderPercent && this.props.loaderOpacity) {
            this.animateLoader();
        }
    }
    render() {
        return(
            <div 
                id="loaderOverlay" 
                style={{opacity: this.props.loaderOpacity, display: this.props.showLoader ? 'block' : 'none'}}>
                <div 
                    className="row" 
                    id="loaderContainer" 
                    style={{opacity: this.props.loaderOpacity}}>
                    <div style={{width: '75%'}}>
                        <div className="loaderText">
                            Loading..
                        </div>
                        <Progress.Line
                            percent={this.state.percent} 
                            strokeColor={this.state.color} 
                            status={this.state.status} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader;