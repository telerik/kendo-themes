import { GridLayoutNormal } from '../../layout';


const styles = `
    .k-grid-layout {
        height: 100px;
        outline: 1px dotted;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    .box {
        box-sizing: border-box;
        padding: 4px;
        border: 1px solid #cccccc;
        background: #fafafa;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">

            <span></span>
            <span>horizontal align left</span>
            <span>horizontal align center</span>
            <span>horizontal align stretch</span>
            <span>horizontal align right</span>

            <span>vertical align top</span>
            <section>
                <GridLayoutNormal />
            </section>
            <section>
                <GridLayoutNormal justifyItems="center"/>
            </section>
            <section>
                <GridLayoutNormal justifyItems="stretch"/>
            </section>
            <section>
                <GridLayoutNormal justifyItems="end"/>
            </section>

            <span>vertical align center</span>
            <section>
                <GridLayoutNormal alignItems="center"/>
            </section>
            <section>
                <GridLayoutNormal alignItems="center" justifyItems="center" />
            </section>
            <section>
                <GridLayoutNormal alignItems="center" justifyItems="stretch" />
            </section>
            <section>
                <GridLayoutNormal alignItems="center" justifyItems="end" />
            </section>

            <span>vertical align stretch</span>
            <section>
                <GridLayoutNormal alignItems="stretch" />
            </section>
            <section>
                <GridLayoutNormal alignItems="stretch" justifyItems="center" />
            </section>
            <section>
                <GridLayoutNormal alignItems="stretch" justifyItems="stretch" />
            </section>
            <section>
                <GridLayoutNormal alignItems="stretch" justifyItems="end" />
            </section>

            <span>vertical align bottom</span>
            <section>
                <GridLayoutNormal alignItems="end" />
            </section>
            <section>
                <GridLayoutNormal alignItems="end" justifyItems="center" />
            </section>
            <section>
                <GridLayoutNormal alignItems="end" justifyItems="stretch" />
            </section>
            <section>
                <GridLayoutNormal alignItems="end" justifyItems="end" />
            </section>

        </div>

    </>
);
