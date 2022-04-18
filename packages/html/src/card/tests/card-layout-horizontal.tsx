/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card, CardHeader, CardBody, CardFooter } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <Card orientation="horizontal">
                <CardBody title="Horizontal Card" subtitle="Actions Start">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons className="k-card-actions" alignment="start" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardBody title="Horizontal Card" subtitle="Actions Center">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons className="k-card-actions" alignment="center" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="horizontal">
                <CardBody title="Horizontal Card" subtitle="Actions End">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons className="k-card-actions" alignment="end" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
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
                <ActionButtons className="k-card-actions" alignment="stretched" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

        </div>
    </>
);
