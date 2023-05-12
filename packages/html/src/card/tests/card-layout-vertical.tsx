/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <Card orientation="vertical">
                <CardBody title="Vertical Card" subtitle="Actions Start">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons className="k-card-actions" alignment="start">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardBody title="Vertical Card" subtitle="Actions Center">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons className="k-card-actions" alignment="center">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardBody title="Vertical Card" subtitle="Actions End">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons className="k-card-actions" alignment="end">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardBody title="Vertical Card" subtitle="Actions Stretched">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons className="k-card-actions" alignment="stretched">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

        </div>
    </>
);
