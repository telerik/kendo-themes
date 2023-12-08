import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Card, CardBody, CardCallout, CardHeader, CardMedia } from '../../card';

const style = `
    .k-card-media {
        display: block;
        height: 200px;
        width: 200px;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area">
            <div className="k-timeline k-timeline-horizontal">
                <div className="k-timeline-track-wrap">
                    <Button icon="caret-alt-left" className="k-timeline-arrow k-timeline-arrow-left"></Button>
                    <Button icon="caret-alt-right" className="k-timeline-arrow k-timeline-arrow-right"></Button>

                    <div className="k-timeline-track">
                        <ul className="k-timeline-scrollable-wrap">
                            <li className="k-timeline-track-item">
                                <span className="k-timeline-flag">2015</span>
                            </li>
                            <li className="k-timeline-track-item">
                                <div className="k-timeline-date-wrap">
                                    <span className="k-timeline-date">Jan 14, 2015</span>
                                </div>
                                <a className="k-timeline-circle" href="#"></a>
                            </li>
                            <li className="k-timeline-track-item k-focus">
                                <div className="k-timeline-date-wrap">
                                    <span className="k-timeline-date">Jun 1, 2015</span>
                                </div>
                                <a className="k-timeline-circle" href="#"></a>
                            </li>
                            <li className="k-timeline-track-item">
                                <div className="k-timeline-date-wrap">
                                    <span className="k-timeline-date">Sep 29, 2015</span>
                                </div>
                                <a className="k-timeline-circle" href="#"></a>
                            </li>
                            <li className="k-timeline-track-item">
                                <span className="k-timeline-flag">2016</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="k-timeline-events-list">
                    <ul className="k-timeline-scrollable-wrap">
                        <li className="k-timeline-event">
                            <div className="k-timeline-card">
                                <Card orientation="vertical" callout="true">
                                    <CardCallout className="k-timeline-card-callout" callout="top" />
                                    <div className="k-card-inner">
                                        <CardHeader title="Title" subtitle="Subtitle" />
                                        <CardBody>
                                            <div className="k-card-description">
                                                <p>Card Description Here</p>
                                                <CardMedia />
                                            </div>
                                        </CardBody>
                                        <ActionButtons alignment="start" className="k-card-actions">
                                            <Button fillMode="flat" themeColor="primary">Action 1</Button>
                                            <Button fillMode="flat" themeColor="primary">Action 2</Button>
                                        </ActionButtons>
                                    </div>
                                </Card>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);
