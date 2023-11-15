import { Card, CardBody } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

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