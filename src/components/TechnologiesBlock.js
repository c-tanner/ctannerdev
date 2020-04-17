import React from 'react';
import php from '../img/php.png';
import mysql from '../img/mysql.png';
import react from '../img/react.png';
import node from '../img/node.png';
import python from '../img/python.png';
import laravel from '../img/laravel.png';
import docker from '../img/docker.png';
import aws from '../img/aws.png';
import github from '../img/github.png';
import linux from '../img/linux.png';

class TechnologiesBlock extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col mb-4 text-center">
                        <h2>Technologies</h2>
                    </div>
                </div>
                <div className="row technology-row mt-4">
                    <div className="col">
                        <img src={php} alt="PHP" title="PHP" />
                    </div>
                    <div className="col">
                        <img src={mysql} alt="MySQL" title="MySQL" />
                    </div>
                    <div className="col">
                        <img src={react} alt="React.js" title="React.js" />
                    </div>
                    <div className="col">
                        <img src={node} alt="Node.js" title="Node.js" />
                    </div>
                    <div className="col">
                        <img src={python} alt="Python" title="Python" />
                    </div>
                </div>
                <div className="row technology-row">
                    <div className="col">
                        <img src={laravel} alt="Laravel" title="Laravel" />
                    </div>
                    <div className="col">
                        <img src={docker} alt="Docker" title="Docker" />
                    </div>
                    <div className="col">
                        <img src={aws} alt="Amazon Web Services" title="Amazon Web Services" />
                    </div>
                    <div className="col">
                        <img src={github} alt="Github" title="Github" />
                    </div>
                    <div className="col">
                        <img src={linux} alt="Linux" title="Linux" />
                    </div>
                </div>
                <div className="row">
                    <div className="col sectionDescription text-center">
                        Over the last decade I have used a combination of the above technologies to build&nbsp;
                        <strong>modern web applications</strong>, <strong>APIs</strong>, <strong>internal tools</strong>, 
                        and even <strong>robots powered by artificial intelligence</strong>. I am passionate 
                        about exploring the applications of new and emerging technologies, as well as expanding 
                        my knowledge of languages already in my skillset. I firmly believe as humans we are 
                        never done learning.
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnologiesBlock;