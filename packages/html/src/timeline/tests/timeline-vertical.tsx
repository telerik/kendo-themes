import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Card, CardBody, CardCallout, CardHeader, CardMedia, CardSubtitle, CardTitle } from '../../card';

const style = `
    .k-card-media {
        display: block;
        height: 200px;
        width: 100%;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <div className="k-timeline k-timeline-vertical k-timeline-collapsible">
                <ul>
                    <li className="k-timeline-flag-wrap">
                        <span className="k-timeline-flag">2014</span>
                    </li>
                    <li className="k-timeline-event">
                        <div className="k-timeline-date-wrap">
                            <span className="k-timeline-date">Jan 14, 2014</span>
                        </div>
                        <a className="k-timeline-circle"></a>
                        <div className="k-timeline-card k-collapsed" >
                            <Card orientation="vertical" callout="true">
                                <CardCallout className="k-timeline-card-callout" callout="left" />
                                <div className="k-card-inner">
                                    <CardHeader>
                                        <CardTitle>
                                            <span className="k-event-title">Collapsed Event</span>
                                            <Button fillMode="flat" icon="chevron-right" className="k-event-collapse"></Button>
                                        </CardTitle>
                                        <CardSubtitle>
                                            <h6 className="k-card-subtitle">Subtitle</h6>
                                        </CardSubtitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="k-card-description">
                                            <p>Card Description here</p>
                                            <CardMedia />
                                        </div>
                                    </CardBody>
                                    <ActionButtons className="k-card-actions">
                                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                                    </ActionButtons>
                                </div>
                            </Card>
                        </div>
                    </li>
                    <li className="k-timeline-event k-reverse">
                        <div className="k-timeline-date-wrap">
                            <span className="k-timeline-date">Jun 1, 2014</span>
                        </div>
                        <a className="k-timeline-circle"></a>
                        <div className="k-timeline-card k-expanded">
                            <Card orientation="vertical" callout="true">
                                <CardCallout className="k-timeline-card-callout" callout="left" />
                                <div className="k-card-inner">
                                    <CardHeader>
                                        <CardTitle>
                                            <span className="k-event-title">Expanded event with reallyyyyy long title</span>
                                            <Button fillMode="flat" icon="chevron-right" className="k-event-collapse"></Button>
                                        </CardTitle>
                                        <CardSubtitle>
                                            <h6 className="k-card-subtitle">Subtitle</h6>
                                        </CardSubtitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="k-card-description">
                                            <p>Timeline Event Description</p>
                                            <CardMedia />
                                        </div>
                                    </CardBody>
                                    <ActionButtons className="k-card-actions">
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
    </>
);
