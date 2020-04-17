import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpektrolLogo from '../img/spektrol.png';
import ArtisthuntLogo from '../img/artisthunt.png';
import AudiointelLogo from '../img/audiointel.png';
import SpektrolMockup from '../img/spektrol-mockup.png';
import ArtisthuntMockup from '../img/ah-mockup.png';
import AudiointelMockup from '../img/ai-mockup.png';
import php from '../img/php.png';
import mysql from '../img/mysql.png';
import react from '../img/react.png';
import python from '../img/python.png';
import docker from '../img/docker.png';
import aws from '../img/aws.png';
import linux from '../img/linux.png';

class FolioBlock extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row my-4">
                    <div className="col my-4 text-center">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row portfolio--row">
                    <div className="col-lg-6">
                        <img 
                            src={SpektrolMockup} 
                            className="portfolio--mockup" 
                            alt="Spektrol Mockup" />
                    </div>
                    <div className="col-lg-6 portfolio--info portfolio--pl">
                        <img 
                            src={SpektrolLogo} 
                            className="portfolio--logo"
                            alt="Spektrol Logo" />
                        <h2 className="mt-4 mb-1">Spektrol (2016-2019)</h2>
                        <div className="portfolio--link mb-2">
                            spektrol.io
                        </div>
                        <div className="portfolio--stats mb-2">
                            <div alt="Job function">
                                <FontAwesomeIcon icon={['fal', 'function']} />&nbsp;&nbsp;
                                Co-founder / Lead Engineer
                            </div>
                            <div alt="Active users">
                                <FontAwesomeIcon icon={['fal', 'users']} />&nbsp;&nbsp;
                                10,000+
                            </div>
                        </div>
                        <div className="portfolio--description">
                            Spektrol (spektrol.io) provided an "open analytics" platform with 15 innovative 
                            tools geared toward music industry professionals. Spektrol's tools provided deep 
                            insights into any social channel, without requiring authentication.
                        </div>
                        <div className="portfolio--tech">
                            <div>
                                <img src={php} alt="PHP" title="PHP" />
                            </div>
                            <div>
                                <img src={mysql} alt="MySQL" title="MySQL" />
                            </div>
                            <div>
                                <img src={python} alt="Python" title="Python" />
                            </div>
                            <div>
                                <img src={docker} alt="Docker" title="Docker" />
                            </div>
                            <div>
                                <img src={linux} alt="Linux" title="Linux" />
                            </div>
                            <div>
                                <img src={aws} alt="AWS" title="AWS" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row portfolio--row">
                <div className="col-lg-6 mob">
                        <img 
                            src={ArtisthuntMockup} 
                            className="portfolio--mockup" 
                            alt="Artist Hunt Mockup" />
                    </div>
                    <div className="col-lg-6 portfolio--info portfolio--pr">
                        <img 
                            src={ArtisthuntLogo} 
                            className="portfolio--logo" 
                            alt="ArtistHunt Logo" />
                        <h2 className="mt-4 mb-1">ArtistHunt (2018-present)</h2>
                        <div className="portfolio--link mb-2">
                            <a 
                                href="https://artisthunt.io" 
                                target="_blank"
                                rel="noopener noreferrer">
                                artisthunt.io
                            </a>
                        </div>
                        <div className="portfolio--stats mb-2">
                            <div alt="Job function">
                                <FontAwesomeIcon icon={['fal', 'function']} />&nbsp;&nbsp;
                                Co-founder / Lead Engineer
                            </div>
                            <div alt="Active users">
                                <FontAwesomeIcon icon={['fal', 'users']} />&nbsp;&nbsp;
                                500+
                            </div>
                        </div>
                        <div className="portfolio--description">
                            ArtistHunt (artisthunt.io) provides a two-way marketplace for performing 
                            artists to accept and manage bookings while simplifying the discovery process 
                            for talent buyers. The platform offers an artist and event directory, 
                            contracted agreements with customizable terms, and deep social growth data 
                            available for display on artist profiles.
                        </div>
                        <div className="portfolio--tech">
                            <div>
                                <img src={php} alt="PHP" title="PHP" />
                            </div>
                            <div>
                                <img src={mysql} alt="MySQL" title="MySQL" />
                            </div>
                            <div>
                                <img src={react} alt="React" title="React" />
                            </div>
                            <div>
                                <img src={linux} alt="Linux" title="Linux" />
                            </div>
                            <div>
                                <img src={aws} alt="AWS" title="AWS" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 full">
                        <img 
                            src={ArtisthuntMockup} 
                            className="portfolio--mockup" 
                            alt="Artist Hunt Mockup" />
                    </div>
                </div>
                <div className="row portfolio--row">
                    <div className="col-lg-6">
                        <img 
                            src={AudiointelMockup} 
                            className="portfolio--mockup" 
                            alt="Audio Intelligence Mockup" />
                    </div>
                    <div className="col-lg-6 portfolio--info portfolio--pl">
                        <img 
                            src={AudiointelLogo} 
                            className="portfolio--logo" 
                            alt="Audio Intelligence Logo" />
                        <h2 className="mt-4 mb-1">Audio Intelligence (2019-present)</h2>
                        <div className="portfolio--link mb-2">
                            <a 
                                href="https://audiointel.ai" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                audiointel.ai
                            </a>
                        </div>
                        <div className="portfolio--stats mb-2">
                            <div alt="Job function">
                                <FontAwesomeIcon icon={['fal', 'function']} />&nbsp;&nbsp;
                                Founder / Lead Engineer
                            </div>
                            <div alt="Active users">
                                <FontAwesomeIcon icon={['fal', 'users']} />&nbsp;&nbsp;
                                100 (beta)
                            </div>
                        </div>
                        <div className="portfolio--description">
                            Audio Intelligence aims to be the world's first AI-powered record label and 
                            A&R solution. From the moment a song is submitted, powerful artificial intelligence 
                            distributes, promotes, reports, and learns from the music it signs. For existing 
                            labels, Audio Intelligence provides a streamlined A&R workflow that learns and informs 
                            based on evolving performance metrics. 
                        </div>
                        <div className="portfolio--tech">
                            <div>
                                <img src={php} alt="PHP" title="PHP" />
                            </div>
                            <div>
                                <img src={mysql} alt="MySQL" title="MySQL"/>
                            </div>
                            <div>
                                <img src={react} alt="React" title="React" />
                            </div>
                            <div>
                                <img src={linux} alt="Linux" title="Linux" />
                            </div>
                            <div>
                                <img src={aws} alt="AWS" title="AWS" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FolioBlock;