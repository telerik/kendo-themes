import { CardList, Card, CardBody, CardTitle } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { nextId } from '../../misc';

export const CardListNormal = (props) => {
    const card1Id = nextId('card-title');
    const card2Id = nextId('card-title');

    return (
        <CardList {...props}>
            <Card orientation="vertical"
                role="listitem"
                tabIndex={0}
                aria-describedby={card1Id}
                aria-keyshortcuts="Enter"
            >
                <div className="k-card-header">
                    <CardTitle id={card1Id}>Card Title 1</CardTitle>
                </div>
                <CardBody>
                    <p>Some quick example text to build on the card title.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                </ActionButtons>
            </Card>
            <Card orientation="vertical"
                role="listitem"
                tabIndex={0}
                aria-describedby={card2Id}
                aria-keyshortcuts="Enter"
            >
                <div className="k-card-header">
                    <CardTitle id={card2Id}>Card Title 2</CardTitle>
                </div>
                <CardBody>
                    <p>Another card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </Card>
        </CardList>
    );
};
