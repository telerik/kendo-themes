import { CardNormal } from '../templates/card-normal';
import { CardHorizontal } from '../templates/card-horizontal';
import { CardHeader } from '../card-header';
import { CardBody } from '../card-body';
import { CardFooter } from '../card-footer';
import { CardMedia } from '../card-media';
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';


const styles = `
    .k-card-media {
        height: 100px;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3 k-rtl">

            <CardNormal>
                <CardBody title="RTL Vertical Card" subtitle="Actions Start">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </CardBody>
                <span className="k-separator"></span>
                <ActionButtons alignment="start" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardNormal>

            <CardHorizontal>
                <div className="k-d-flex k-flex-column">
                    <CardHeader title="RTL Horizontal Card" subtitle="Actions Stretched"></CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <CardFooter>
                        Footer
                    </CardFooter>
                </div>
                <span className="k-separator k-separator-vertical"></span>
                <ActionButtons alignment="stretched" orientation="vertical" className="k-card-actions">
                    <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    <Button fillMode="flat" themeColor="primary">Action 2</Button>
                </ActionButtons>
            </CardHorizontal>

            <CardHorizontal>
                <CardMedia />
                <div className="k-d-flex k-flex-column">
                    <CardHeader title="RTL Horizontal Card" subtitle="Card Subtitle"></CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    <span className="k-separator"></span>
                    <ActionButtons alignment="stretched" className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Action 1</Button>
                    </ActionButtons>
                    <CardFooter>
                        Footer here
                    </CardFooter>
                </div>
            </CardHorizontal>

        </div>
    </>
);
