import React from 'react';
import ModernNav from './ModernNav.js';
import Typist from 'react-typist';
import TechnologiesBlock from './TechnologiesBlock.js';
import ParticleDisplay from './ParticleDisplay.js';
import ExperienceBlock from './ExperienceBlock.js';
import FolioBlock from './FolioBlock.js';

class Modern extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPos: 0,
            navClass: '',
            navBgOpacity: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll () {
        const el = document.getElementById('modern-container');   
        const scrollPos = Math.ceil(el.scrollTop / 50) * 50;
        if (this.state.scrollPos !== scrollPos){
            this.setState({scrollPos: scrollPos});
        }
        if (el.scrollTop > window.innerHeight - 100) {
            if (!this.state.navClass) {
                this.setState({ 
                    navClass: 'navbar-color',
                    navBgOpacity: 1
                });
            }
        } else {
            if (this.state.navClass) {
                this.setState({ 
                    navClass: '',
                    navBgOpacity: 0
                });
            }
        }
    }
    render() {
        const opacityHero = Math.min(100 / this.state.scrollPos , 1);
        return (
            <div 
                id="modern-bg">
                <div 
                    id="modern-container"
                    style={{height: this.props.containerHeight}}
                    onScroll={this.handleScroll}>
                    <ModernNav 
                        navClass={this.state.navClass} 
                        navBgOpacity={this.state.navBgOpacity} />
                    <div className="row gradBg" id="hero">
                        <div id="particleDisplay">
                            <ParticleDisplay particleColor='#f0f0f0' lineColor='#f0f0f0' particleNum='150' />
                        </div>
                        <div className="col-lg-7" style={{opacity: opacityHero}}>
                            <h1>
                                <Typist>
                                    Seasoned full-stack engineer with management experience.
                                </Typist>
                            </h1>
                            <div>
                                With over a decade of industry experience ranging from UI design to
                                distributed system architecture (and everything inbetween), I serve 
                                as a critial asset to cross-functional teams. I am passionate about 
                                mentoring and optimizing growing software engineering teams to produce 
                                innovative, high-quality products.
                            </div>
                        </div>
                    </div>
                    <div className="row" id="exp">
                        <ExperienceBlock />
                    </div>
                    <div className="row" id="tech">
                        <TechnologiesBlock />
                    </div>
                    <div className="row" id="folio">
                        <FolioBlock />
                    </div>
                </div>
            </div>
        )
    }
}

export default Modern;