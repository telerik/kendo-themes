import { CardNormal, CardBody } from '../../card';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <CardNormal callout="top">
                <div className="k-card-inner">
                    <CardBody title="Card Title Top Callout" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </div>
            </CardNormal>

            <CardNormal callout="bottom">
                <div className="k-card-inner">
                    <CardBody title="Card Title Bottom Callout" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </div>
            </CardNormal>

            <CardNormal callout="left">
                <div className="k-card-inner">
                    <CardBody title="Card Title Left Callout" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </div>
            </CardNormal>

            <CardNormal callout="right">
                <div className="k-card-inner">
                    <CardBody title="Card Title Right Callout" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                        <Button fillMode="flat" themeColor="primary">Action 2</Button>
                    </ActionButtons>
                </div>
            </CardNormal>

        </div>
    </>
);
