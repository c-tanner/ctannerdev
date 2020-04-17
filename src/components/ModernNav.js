import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModernNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        }
        this.navToggle = this.navToggle.bind(this)
    }
    navToggle() {
        this.setState({ navOpen: !this.state.navOpen });
    }
    render() {
        return(
            <div>
                <div id="navOverlay" className={`${this.state.navOpen ? 'top' : ''}`}>
                    <div id="navOverlayCloser" onClick={this.navToggle}>
                        <FontAwesomeIcon icon={['fal', 'times']} />
                    </div>
                    <div style={{height: '100%'}}>
                        <div className="row">
                            <div className="col align-content-center">
                                <a href="#exp" onClick={this.navToggle}>
                                    <FontAwesomeIcon icon={['fal', 'history']} />
                                </a>
                                <br />
                                <span>Experience</span>
                            </div>
                            <div className="col justify-content-center">
                                <a href="#folio" onClick={this.navToggle}>
                                    <FontAwesomeIcon icon={['fal', 'trophy']} />
                                </a>
                                <br />
                                <span>Portfolio</span>
                            </div>
                            <div 
                                className="col justify-content-center"
                                style={{paddingBottom: '0'}}>
                                <a 
                                    href="https://www.linkedin.com/in/ctannerdev" 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                </a>
                                <br />
                                <span>LinkedIn</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col justify-content-center">
                                <a href="#tech" onClick={this.navToggle}>
                                    <FontAwesomeIcon icon={['fal', 'tools']} />
                                </a>
                                <br />
                                <span>Technologies</span>
                            </div>
                            <div className="col justify-content-center">
                                <a 
                                    href="https://github.com/c-tanner" 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </a>
                                <br />
                                <span>Github</span>
                            </div>
                            <div 
                                className="col justify-content-center"
                                style={{paddingBottom: '0'}}>
                                <a href="mailto:contact@ctanner.dev?subject=Career Opportunity">
                                    <FontAwesomeIcon icon={['fal', 'paper-plane']} />
                                </a>
                                <br />
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="navGradBg" style={{opacity: this.props.navBgOpacity}}></div>
                    <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${this.props.navClass}`}>
                        <a className="navbar-brand" href="/#">ctanner.dev</a>
                        <FontAwesomeIcon icon={['fal','hamburger']} onClick={this.navToggle} />
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#exp">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tech">Technologies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#folio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className="nav-link" 
                                        href="https://github.com/c-tanner" 
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className="nav-link" 
                                        href="https://www.linkedin.com/in/ctannerdev" 
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className="nav-link" 
                                        href="mailto:contact@ctanner.dev?subject=Career Opportunity">
                                        <FontAwesomeIcon icon={['fal', 'paper-plane']} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ModernNav;