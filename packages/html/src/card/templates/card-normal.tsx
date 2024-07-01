import { Card, CardHeader, CardBody } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

export const CardNormal = (props) => (
    <Card orientation="vertical"
        children={
            <>
                <CardHeader>Card Header</CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </>
        }
        {...props}>
    </Card>
);

export default CardNormal;
