import React from 'react';
import Particles from 'react-particles-js';

class ParticleDisplay extends React.Component {
    render() {
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": this.props.particleNum
                        },
                        "size": {
                            "value": 0
                        },
                        "color": {
                            "value": this.props.particleColor
                        },
                        "line_linked": {
                            "color": this.props.lineColor
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        )
    }
}

export default ParticleDisplay;