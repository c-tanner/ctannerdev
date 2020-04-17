import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ExperienceBlock extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col my-4 text-center">
                        <h2>Experience</h2>
                    </div>
                </div>
                <div className="row experience-row mt-4">
                    <div className="col">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2019 - present"
                                iconStyle={{ background: 'rgb(253, 97, 10)', color: '#fff' }}
                                icon={<FontAwesomeIcon icon={['fal', 'users']} />}>
                                <h3 className="vertical-timeline-element-title">Software Engineering Manager</h3>
                                <h4 className="vertical-timeline-element-subtitle">Spokane, WA</h4>
                                <p>
                                Providing mentorship and leading technical direction while actively working in the codebase.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2016-2019"
                                iconStyle={{ background: 'rgb(247, 59, 59)', color: '#fff' }}
                                icon={<FontAwesomeIcon icon={['fal', 'rocket-launch']} />}>
                                <h3 className="vertical-timeline-element-title">Technical Co-Founder</h3>
                                <h4 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h4>
                                <p>
                                Founded, launched and scaled <a href="#folio">multiple startups</a>.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - 2016"
                                iconStyle={{ background: 'rgb(243, 39, 85)', color: '#fff' }}
                                icon={<FontAwesomeIcon icon={['fal', 'laptop-code']} />}>
                                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
                                <p>
                                Designed and developed modern web applications for Fortune 500 companies.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2010 - 2011"
                                iconStyle={{ background: 'rgb(238, 9, 121)', color: '#fff' }}
                                icon={<FontAwesomeIcon icon={['fal', 'star']} />}>
                                <h3 className="vertical-timeline-element-title">Jr. Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
                                <p>
                                Developed internal and customer-facing web portals and authentication systems.
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>    
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceBlock;