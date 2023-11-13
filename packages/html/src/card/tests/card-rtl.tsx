/* eslint-disable react/no-unescaped-entities */
import { Card, CardHeader, CardBody, CardFooter, CardMedia } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


const styles = `
    .k-card-media {
        height: 100px;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3 k-rtl">

            <Card orientation="vertical">
                <CardBody title="RTL Vertical Card" subtitle="Actions Start">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="start" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <div className="k-d-flex k-flex-column">
                    <CardHeader title="RTL Horizontal Card" subtitle="Actions Stretched"></CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <CardFooter>
                        Footer
                    </CardFooter>
                </div>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardMedia />
                <div className="k-d-flex k-flex-column">
                    <CardHeader title="RTL Horizontal Card" subtitle="Card Subtitle"></CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons alignment="stretched" className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    </ActionButtons>
                    <CardFooter>
                        Footer here
                    </CardFooter>
                </div>
            </Card>

        </div>
    </>
);
