/* eslint-disable react/no-unescaped-entities */
import { Card, CardHeader, CardBody, CardFooter, CardMedia } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const styles = `
    .k-card {
        height: 300px;
    }
    .k-card-media {
        display: block;
        width: 100px;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <Card orientation="horizontal">
                <div>
                    <CardHeader>Card Header</CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                </div>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons className="k-card-actions" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardBody title="Card Title">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardMedia />
                <div>
                    <CardHeader>Card Header</CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                </div>
            </Card>

            <Card orientation="horizontal">
                <CardMedia />
                <div>
                    <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                    <CardBody>
                        <p>Card content.</p>
                    </CardBody>
                    <ActionButtons orientation="vertical" className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </div>
            </Card>

            <Card orientation="horizontal">
                <div>
                    <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                </div>
                <CardMedia />
            </Card>

            <Card orientation="horizontal">
                <div>
                    <CardHeader title="Horizontal Card with Header" subtitle="Actions Stretched"></CardHeader>
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

        </div>
    </>
);
