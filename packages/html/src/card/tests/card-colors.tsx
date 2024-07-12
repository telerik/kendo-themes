import { Card, CardNormal, CardBody } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            { [ null, ...Card.options.themeColor ].map((themeColor) => (
                <CardNormal themeColor={themeColor}>
                    <CardBody title="Card Title" subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat" themeColor="base">Action 1</Button>
                        <Button fillMode="flat" themeColor="base">Action 2</Button>
                    </ActionButtons>
                </CardNormal>
            ))}
        </div>
    </>
);
