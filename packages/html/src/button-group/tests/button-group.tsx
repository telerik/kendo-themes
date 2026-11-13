import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';

const styles = `
    #test-area {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <div>text</div>
            <ButtonGroup>
                <Button className="k-group-start">First</Button>
                <Button>Middle</Button>
                <Button className="k-group-end">Last</Button>
            </ButtonGroup>

            <div>icon</div>
            <ButtonGroup>
                <Button className="k-group-start" icon="star" aria-label="First" />
                <Button icon="star" aria-label="Middle" />
                <Button className="k-group-end" icon="star" aria-label="Last" />
            </ButtonGroup>

            <div>text + icon</div>
            <ButtonGroup>
                <Button className="k-group-start" endIcon="star">First</Button>
                <Button endIcon="star">Middle</Button>
                <Button className="k-group-end" endIcon="star">Last</Button>
            </ButtonGroup>

            <div>icon + text</div>
            <ButtonGroup>
                <Button className="k-group-start" icon="star">First</Button>
                <Button icon="star">Middle</Button>
                <Button className="k-group-end" icon="star">Last</Button>
            </ButtonGroup>

            <div>icon + text + icon</div>
            <ButtonGroup>
                <Button className="k-group-start" icon="star" endIcon="star">First</Button>
                <Button icon="star" endIcon="star">Middle</Button>
                <Button className="k-group-end" icon="star" endIcon="star">Last</Button>
            </ButtonGroup>
        </div>
    </>
);
