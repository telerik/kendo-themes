import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <span>
                <ButtonGroup>
                    <Button size="small" rounded={null} icon="bold"></Button>
                    <Button size="small" rounded={null} icon="italic"></Button>
                    <Button size="small" rounded={null} icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="medium" rounded={null} icon="bold"></Button>
                    <Button size="medium" rounded={null} icon="italic"></Button>
                    <Button size="medium" rounded={null} icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="large" rounded={null} icon="bold"></Button>
                    <Button size="large" rounded={null} icon="italic"></Button>
                    <Button size="large" rounded={null} icon="underline"></Button>
                </ButtonGroup>
            </span>

            <span>small</span>
            <span>
                <ButtonGroup>
                    <Button size="small" rounded="small" icon="bold"></Button>
                    <Button size="small" rounded="small" icon="italic"></Button>
                    <Button size="small" rounded="small" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="medium" rounded="small" icon="bold"></Button>
                    <Button size="medium" rounded="small" icon="italic"></Button>
                    <Button size="medium" rounded="small" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="large" rounded="small" icon="bold"></Button>
                    <Button size="large" rounded="small" icon="italic"></Button>
                    <Button size="large" rounded="small" icon="underline"></Button>
                </ButtonGroup>
            </span>

            <span>medium</span>
            <span>
                <ButtonGroup>
                    <Button size="small" rounded="medium" icon="bold"></Button>
                    <Button size="small" rounded="medium" icon="italic"></Button>
                    <Button size="small" rounded="medium" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="medium" rounded="medium" icon="bold"></Button>
                    <Button size="medium" rounded="medium" icon="italic"></Button>
                    <Button size="medium" rounded="medium" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="large" rounded="medium" icon="bold"></Button>
                    <Button size="large" rounded="medium" icon="italic"></Button>
                    <Button size="large" rounded="medium" icon="underline"></Button>
                </ButtonGroup>
            </span>

            <span>large</span>
            <span>
                <ButtonGroup>
                    <Button size="small" rounded="large" icon="bold"></Button>
                    <Button size="small" rounded="large" icon="italic"></Button>
                    <Button size="small" rounded="large" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="medium" rounded="large" icon="bold"></Button>
                    <Button size="medium" rounded="large" icon="italic"></Button>
                    <Button size="medium" rounded="large" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="large" rounded="large" icon="bold"></Button>
                    <Button size="large" rounded="large" icon="italic"></Button>
                    <Button size="large" rounded="large" icon="underline"></Button>
                </ButtonGroup>
            </span>

            <span>full</span>
            <span>
                <ButtonGroup>
                    <Button size="small" rounded="full" icon="bold"></Button>
                    <Button size="small" rounded="full" icon="italic"></Button>
                    <Button size="small" rounded="full" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="medium" rounded="full" icon="bold"></Button>
                    <Button size="medium" rounded="full" icon="italic"></Button>
                    <Button size="medium" rounded="full" icon="underline"></Button>
                </ButtonGroup>
            </span>
            <span>
                <ButtonGroup>
                    <Button size="large" rounded="full" icon="bold"></Button>
                    <Button size="large" rounded="full" icon="italic"></Button>
                    <Button size="large" rounded="full" icon="underline"></Button>
                </ButtonGroup>
            </span>
        </div>

    </>
);
