import { CardHeader, CardBody, CardMedia, CardNormal } from '../../card';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


const styles = `
    .k-card-media {
        height: 100px;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <CardNormal />

            <CardNormal>
                <CardBody title="Card Title">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons alignment="stretched" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardBody title="Card Title" subtitle="Card Subtitle">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardHeader>
                    Card Header
                </CardHeader>
                <CardMedia />
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardMedia />
                <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <CardMedia />
                <ActionButtons alignment="stretched" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardNormal>
                <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
                <CardBody>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
                <CardMedia />
            </CardNormal>

        </div>
    </>
);
