import { Button } from '../../button';
import { TextButton } from '../templates/text-button';
import { IconTextButton } from '../templates/icon-text-button';
import { IconButton } from '../templates/icon-button';


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
                <TextButton size="small" rounded={null}></TextButton>
                <IconTextButton size="small" rounded={null} ></IconTextButton>
                <IconButton size="small" rounded={null} ></IconButton>
            </section>
            <section>
                <TextButton size="medium" rounded={null}></TextButton>
                <IconTextButton size="medium" rounded={null} ></IconTextButton>
                <IconButton size="medium" rounded={null} ></IconButton>
            </section>
            <section>
                <TextButton size="large" rounded={null}></TextButton>
                <Button size="large" rounded={null} ></Button>
                <Button size="large" rounded={null} ></Button>
            </section>

            <span>small</span>
            <section>
                <TextButton size="small" rounded="small"></TextButton>
                <IconTextButton size="small" rounded="small" ></IconTextButton>
                <IconButton size="small" rounded="small" ></IconButton>
            </section>
            <section>
                <TextButton size="medium" rounded="small"></TextButton>
                <IconTextButton size="medium" rounded="small" ></IconTextButton>
                <IconButton size="medium" rounded="small" ></IconButton>
            </section>
            <section>
                <TextButton size="large" rounded="small"></TextButton>
                <IconTextButton size="large" rounded="small" ></IconTextButton>
                <IconButton size="large" rounded="small" ></IconButton>
            </section>

            <span>medium</span>
            <section>
                <TextButton size="small" rounded="medium"></TextButton>
                <IconTextButton size="small" rounded="medium" ></IconTextButton>
                <IconButton size="small" rounded="medium" ></IconButton>
            </section>
            <section>
                <TextButton size="medium" rounded="medium"></TextButton>
                <IconTextButton size="medium" rounded="medium" ></IconTextButton>
                <IconButton size="medium" rounded="medium" ></IconButton>
            </section>
            <section>
                <TextButton size="large" rounded="medium"></TextButton>
                <IconTextButton size="large" rounded="medium" ></IconTextButton>
                <IconButton size="large" rounded="medium" ></IconButton>
            </section>

            <span>large</span>
            <section>
                <TextButton size="small" rounded="large"></TextButton>
                <IconTextButton size="small" rounded="large" ></IconTextButton>
                <IconButton size="small" rounded="large" ></IconButton>
            </section>
            <section>
                <TextButton size="medium" rounded="large"></TextButton>
                <IconTextButton size="medium" rounded="large" ></IconTextButton>
                <IconButton size="medium" rounded="large" ></IconButton>
            </section>
            <section>
                <TextButton size="large" rounded="large"></TextButton>
                <IconTextButton size="large" rounded="large" ></IconTextButton>
                <IconButton size="large" rounded="large" ></IconButton>
            </section>

            <span>full</span>
            <section>
                <TextButton size="small" rounded="full"></TextButton>
                <IconTextButton size="small" rounded="full" ></IconTextButton>
                <IconButton size="small" rounded="full" ></IconButton>
            </section>
            <section>
                <TextButton size="medium" rounded="full"></TextButton>
                <IconTextButton size="medium" rounded="full" ></IconTextButton>
                <IconButton size="medium" rounded="full" ></IconButton>
            </section>
            <section>
                <TextButton size="large" rounded="full"></TextButton>
                <IconTextButton size="large" rounded="full" ></IconTextButton>
                <IconButton size="large" rounded="full" ></IconButton>
            </section>

        </div>

    </>
);
