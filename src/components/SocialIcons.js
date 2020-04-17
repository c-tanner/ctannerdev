import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialIcons extends React.Component {
    render() {
        return (
            <div className="row iconRow">
                <div className="col">
                    <a 
                        href="https://github.com/c-tanner" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
                <div className="col">
                    <a 
                        href="https://www.linkedin.com/in/ctannerdev" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                </div>
                <div className="col">
                    <a href="mailto:contact@ctanner.dev?subject=Career Opportunity">
                        <FontAwesomeIcon icon={['fal', 'paper-plane']} />
                    </a>
                </div>
            </div>
        )
    }
}

export default SocialIcons;