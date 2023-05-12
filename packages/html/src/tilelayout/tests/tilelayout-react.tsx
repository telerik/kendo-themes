import ReactDOM from 'react-dom/client';
import { Card, CardBody, CardHeader } from '../../card';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">
            <div className="k-tilelayout k-grid-flow-col" style={{ gridTemplateColumns: "repeat(3, minmax(0px, 1fr))", gridAutoRows: "minmax(0px, 200px)", gap: "10px", padding: "10px" }}>
                <div style={{ gridArea: "3 / 2 / span 1 / span 1", outline: "none", order: "0" }}>
                    <Card className="k-tilelayout-item" style={{ height: "100%" }}>
                        <CardHeader className="k-tilelayout-item-header k-cursor-move" title="Tile 1"></CardHeader>
                        <CardBody className="k-tilelayout-item-body">
                            <p>Position: row: 3, col: 2, colSpan: 1, rowSpan: 1</p>
                        </CardBody>
                    </Card>
                </div>
                <div style={{ gridArea: "1 / 2 / span 1 / span 1", outline: "none", order: "1" }}>
                    <Card className="k-tilelayout-item" style={{ height: "100%" }}>
                        <CardHeader className="k-tilelayout-item-header k-cursor-move" title="Tile 2"></CardHeader>
                        <CardBody className="k-tilelayout-item-body">
                            <p>Position: row: 1, col: 2, colSpan: 1, rowSpan: 1</p>
                        </CardBody>
                    </Card>
                </div>
                <div style={{ gridArea: "1 / 3 / span 2 / span 1", outline: "none", order: "2" }}>
                    <Card className="k-tilelayout-item" style={{ height: "100%" }}>
                        <CardHeader className="k-tilelayout-item-header k-cursor-move" title="Tile 3"></CardHeader>
                        <CardBody className="k-tilelayout-item-body">
                            <p>Position: row: 1, col: 3, colSpan: 1, rowSpan: 2</p>
                        </CardBody>
                    </Card>
                </div>
                <div style={{ gridArea: "3 / 1 / span 1 / span 3", outline: "none", order: "3" }}>
                    <Card className="k-tilelayout-item" style={{ height: "100%" }}>
                        <CardHeader className="k-tilelayout-item-header k-cursor-move" title="Tile 4"></CardHeader>
                        <CardBody className="k-tilelayout-item-body">
                            <p>Position: row: 3, col: 1, colSpan: 3, rowSpan: 1</p>
                            <p>Goes over Tile 1</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </>
);
