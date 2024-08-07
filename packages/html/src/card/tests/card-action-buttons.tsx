import { CardNormal, CardHorizontal, CardBody } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions Start">
                    <p>Action buttons with horizontal orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="start" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions Center">
                    <p>Action buttons with horizontal orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="center" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions End">
                    <p>Action buttons with horizontal orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="end" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions Stretched">
                    <p>Action buttons with horizontal orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="stretched" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions Start">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="start" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions Center">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="center" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions End">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="end" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Vertical Card" subtitle="Actions Stretched">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardHorizontal>
                <CardBody title="Horizontal Card" subtitle="Actions Start">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons alignment="start" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardHorizontal>

            <CardHorizontal>
                <CardBody title="Horizontal Card" subtitle="Actions Center">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons alignment="center" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardHorizontal>

            <CardHorizontal>
                <CardBody title="Horizontal Card" subtitle="Actions End">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons alignment="end" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardHorizontal>

            <CardHorizontal>
                <CardBody title="Horizontal Card" subtitle="Actions Stretched">
                    <p>Action buttons with vertical orientation.</p>
                </CardBody>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardHorizontal>

        </div>
    </>
);
