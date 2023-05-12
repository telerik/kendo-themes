import ReactDOM from 'react-dom/client';
import { Card, CardHeader, CardBody } from '../../card';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">
            <div id="tilelayout" className="k-widget k-tilelayout" style={{ gridTemplateColumns: "repeat(4, minmax(0px, 1fr))", gap: "16px", padding: "16px" }}>
                <Card className="k-tilelayout-item k-resize-x">
                    <CardHeader className="k-tilelayout-item-header">
                        Card Title
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Horizontally resizable card
                    </CardBody>
                </Card>
                <Card className="k-tilelayout-item k-resize-y">
                    <CardHeader className="k-tilelayout-item-header">
                        Card Title
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Vertically resizable card
                    </CardBody>
                </Card>
                <Card className="k-tilelayout-item k-resize">
                    <CardHeader className="k-tilelayout-item-header">
                        Card Title
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                        Horizontally and Vertically resizable card
                    </CardBody>
                </Card>
                <Card className="k-tilelayout-item k-resize-none">
                    <CardHeader className="k-tilelayout-item-header">
                        Card Title
                    </CardHeader>
                    <CardBody className="k-tilelayout-item-body">
                       Non-resizable card
                    </CardBody>
                </Card>
            </div>
        </div>
    </>
);
