import { CardList, Card, CardBody, CardTitle } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

export const CardListNavigable = (props) => (
    <CardList {...props}>
        <Card navigable titleId="card-title-1" orientation="vertical">
            <CardBody>
                <CardTitle id="card-title-1">Card 1 Title</CardTitle>
                <p>Some quick example text to build on the card title.</p>
            </CardBody>
            <ActionButtons className="k-card-actions">
                <Button fillMode="flat" themeColor="primary">Action 1</Button>
                <Button fillMode="flat" themeColor="primary">Action 2</Button>
            </ActionButtons>
        </Card>
        <Card navigable titleId="card-title-2" orientation="vertical">
            <CardBody>
                <CardTitle id="card-title-2">Card 2 Title</CardTitle>
                <p>Some quick example text to build on the card title.</p>
            </CardBody>
            <ActionButtons className="k-card-actions">
                <Button fillMode="flat" themeColor="primary">Action 1</Button>
                <Button fillMode="flat" themeColor="primary">Action 2</Button>
            </ActionButtons>
        </Card>
        <Card navigable titleId="card-title-3" orientation="vertical">
            <CardBody>
                <CardTitle id="card-title-3">Card 3 Title</CardTitle>
                <p>Some quick example text to build on the card title.</p>
            </CardBody>
            <ActionButtons className="k-card-actions">
                <Button fillMode="flat" themeColor="primary">Action 1</Button>
                <Button fillMode="flat" themeColor="primary">Action 2</Button>
            </ActionButtons>
        </Card>
    </CardList>
);
