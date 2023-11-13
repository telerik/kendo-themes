/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <Card>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="base">Action 1</Button>
                    <Button fillMode="flat" themeColor="base">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card themeColor="primary">
                <CardBody title="Card Title Primary" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="base">Action 1</Button>
                    <Button fillMode="flat" themeColor="base">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card themeColor="info">
                <CardBody title="Card Title Info" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="base">Action 1</Button>
                    <Button fillMode="flat" themeColor="base">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card themeColor="success">
                <CardBody title="Card Title Success" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="base">Action 1</Button>
                    <Button fillMode="flat" themeColor="base">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card themeColor="warning">
                <CardBody title="Card Title Warning" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="base">Action 1</Button>
                    <Button fillMode="flat" themeColor="base">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card themeColor="error">
                <CardBody title="Card Title Error" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="base">Action 1</Button>
                    <Button fillMode="flat" themeColor="base">Action 2</Button>
                </ActionButtons>
            </Card>

        </div>
    </>
);
