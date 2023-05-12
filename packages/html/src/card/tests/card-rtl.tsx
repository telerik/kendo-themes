/* eslint-disable react/no-unescaped-entities */
import { Card, CardHeader, CardBody, CardFooter, CardImage } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


const styles = `
    .k-card-image {
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
                <ActionButtons className="k-card-actions" alignment="start">
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
                <ActionButtons className="k-card-actions" alignment="stretched" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardImage />
                <div className="k-d-flex k-flex-column">
                    <CardHeader title="RTL Horizontal Card" subtitle="Card Subtitle"></CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons className="k-card-actions" alignment="stretched">
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
