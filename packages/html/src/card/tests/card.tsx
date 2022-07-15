/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card, CardHeader, CardBody, CardImage } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-card-image {
        height: 100px;
        background: #cccccc;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <Card orientation="vertical">
                <CardHeader>Card Header</CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions" alignment="stretched">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions" alignment="stretched" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardHeader>
                    Card Header
                </CardHeader>
                <CardImage />
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardImage />
                <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <CardImage />
                <ActionButtons className="k-card-actions" alignment="stretched">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>

            <Card orientation="vertical">
                <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions" alignment="stretched" orientation="vertical">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
                <CardImage />
            </Card>

        </div>
    </>
);
