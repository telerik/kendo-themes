import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card, CardBody, CardHeader } from '../../card';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">
            <div id="tilelayout" className="k-widget k-tilelayout" style={{ gridTemplateColumns: "repeat(5, minmax(0px, 1fr))", gridTemplateRows: "repeat(5, minmax(0px, 1fr))", gap: "16px", width: "1000px", padding: "16px" }}>
                <Card className="k-tilelayout-item" focus style={{ order: "0", gridColumnEnd: "span 1", gridRowEnd: "span 1" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </Card>
                <div className="k-tilelayout-item k-card" style={{ order: "1", gridColumnEnd: "span 1", gridRowEnd: "span 1" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "2", gridColumnEnd: "span 1", gridRowEnd: "span 2", width: "250px", position: "absolute", height: "198px", left: "430px" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-resize-handle k-cursor-ew-resize" style={{ height: "196px", width: "9px", left: "674px", top: "36px" }}></div>
                <div className="k-layout-item-hint k-layout-item-hint-resize" style={{ order: "2", gridColumnEnd: "span 2", gridRowEnd: "span 2" }}></div>
                <div className="k-tilelayout-item k-card" style={{ order: "3", gridColumnEnd: "span 1", gridRowEnd: "span 1" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "4", gridColumnEnd: "span 1", gridRowEnd: "span 2" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "5", gridColumnEnd: "span 1", gridRowEnd: "span 1" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "6", gridColumnEnd: "span 1", gridRowEnd: "span 1" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "7", gridColumnEnd: "span 1", gridRowEnd: "span 2" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "8", gridColumnEnd: "span 1", gridRowEnd: "span 1" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
                <div className="k-tilelayout-item k-card" style={{ order: "9", gridColumnEnd: "span 1", gridRowEnd: "span 2" }}>
                    <CardHeader className="k-tilelayout-item-header">
                        Title goes here
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Content goes here
                    </CardBody>
                </div>
            </div>
        </div>
    </>
);
