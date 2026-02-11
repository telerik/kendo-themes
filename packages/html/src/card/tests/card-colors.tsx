import { Card } from '../card.spec';
import { CardNormal } from '../templates/card-normal';
import { CardBody } from '../card-body';
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            { Card.options.themeColor.map((themeColor) => (
                <CardNormal themeColor={themeColor}>
                    <CardBody title={`Card ${themeColor} Title`} subtitle="Card Subtitle">
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat">Action 1</Button>
                        <Button fillMode="flat">Action 2</Button>
                    </ActionButtons>
                </CardNormal>
            ))}
        </div>
    </>
);
