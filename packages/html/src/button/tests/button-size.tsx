import { Button } from '../../button';


const styles = `
#test-area {
    max-width: 1240px;
    grid-template-columns: 80px 320px 320px 1fr;
}
small,
section {
    white-space: nowrap;
}
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <section>
                <Button size="small" rounded={null}>Button</Button>
                <Button size="small" rounded={null} icon="folder">Button</Button>
                <Button size="small" rounded={null} icon="folder"></Button>
            </section>
            <section>
                <Button size="medium" rounded={null}>Button</Button>
                <Button size="medium" rounded={null} icon="folder">Button</Button>
                <Button size="medium" rounded={null} icon="folder"></Button>
            </section>
            <section>
                <Button size="large" rounded={null}>Button</Button>
                <Button size="large" rounded={null} icon="folder">Button</Button>
                <Button size="large" rounded={null} icon="folder"></Button>
            </section>

            <span>small</span>
            <section>
                <Button size="small" rounded="small">Button</Button>
                <Button size="small" rounded="small" icon="folder">Button</Button>
                <Button size="small" rounded="small" icon="folder"></Button>
            </section>
            <section>
                <Button size="medium" rounded="small">Button</Button>
                <Button size="medium" rounded="small" icon="folder">Button</Button>
                <Button size="medium" rounded="small" icon="folder"></Button>
            </section>
            <section>
                <Button size="large" rounded="small">Button</Button>
                <Button size="large" rounded="small" icon="folder">Button</Button>
                <Button size="large" rounded="small" icon="folder"></Button>
            </section>

            <span>medium</span>
            <section>
                <Button size="small" rounded="medium">Button</Button>
                <Button size="small" rounded="medium" icon="folder">Button</Button>
                <Button size="small" rounded="medium" icon="folder"></Button>
            </section>
            <section>
                <Button size="medium" rounded="medium">Button</Button>
                <Button size="medium" rounded="medium" icon="folder">Button</Button>
                <Button size="medium" rounded="medium" icon="folder"></Button>
            </section>
            <section>
                <Button size="large" rounded="medium">Button</Button>
                <Button size="large" rounded="medium" icon="folder">Button</Button>
                <Button size="large" rounded="medium" icon="folder"></Button>
            </section>

            <span>large</span>
            <section>
                <Button size="small" rounded="large">Button</Button>
                <Button size="small" rounded="large" icon="folder">Button</Button>
                <Button size="small" rounded="large" icon="folder"></Button>
            </section>
            <section>
                <Button size="medium" rounded="large">Button</Button>
                <Button size="medium" rounded="large" icon="folder">Button</Button>
                <Button size="medium" rounded="large" icon="folder"></Button>
            </section>
            <section>
                <Button size="large" rounded="large">Button</Button>
                <Button size="large" rounded="large" icon="folder">Button</Button>
                <Button size="large" rounded="large" icon="folder"></Button>
            </section>

            <span>full</span>
            <section>
                <Button size="small" rounded="full">Button</Button>
                <Button size="small" rounded="full" icon="folder">Button</Button>
                <Button size="small" rounded="full" icon="folder"></Button>
            </section>
            <section>
                <Button size="medium" rounded="full">Button</Button>
                <Button size="medium" rounded="full" icon="folder">Button</Button>
                <Button size="medium" rounded="full" icon="folder"></Button>
            </section>
            <section>
                <Button size="large" rounded="full">Button</Button>
                <Button size="large" rounded="full" icon="folder">Button</Button>
                <Button size="large" rounded="full" icon="folder"></Button>
            </section>

        </div>

    </>
);
