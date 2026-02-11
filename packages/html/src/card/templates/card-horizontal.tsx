import { Card } from '../card.spec';
import { CardBody } from '../card-body';
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';

export const CardHorizontal = (props) => (
    <Card orientation="horizontal"
        children={
            <>
                <CardBody title="Card Title">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </>
        }
        {...props}>
    </Card>
);
