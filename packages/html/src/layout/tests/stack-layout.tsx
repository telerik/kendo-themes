import { StackLayoutNormal, StackLayoutVertical } from '../../layout';


const styles = `
    .k-hstack,
    .k-vstack {
        outline: 1px dotted;
    }
    .k-hstack {
        height: 50px;
    }
    .k-vstack {
        height: 150px;
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
            <span className="k-colspan-4 k-col-span-4">Orientation horizontal</span>

            <span></span>
            <span>horizontal align left</span>
            <span>horizontal align center</span>
            <span>horizontal align stretch</span>
            <span>horizontal align right</span>

            <span>vertical align top</span>
            <section>
                <StackLayoutNormal />
            </section>
            <section>
                <StackLayoutNormal justifyContent="center" />
            </section>
            <section>
                <StackLayoutNormal justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutNormal justifyContent="end" />
            </section>

            <span>vertical align center</span>
            <section>
                <StackLayoutNormal alignItems="center" />
            </section>
            <section>
                <StackLayoutNormal alignItems="center" justifyContent="center" />
            </section>
            <section>
                <StackLayoutNormal alignItems="center" justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutNormal alignItems="center" justifyContent="end" />
            </section>

            <span>vertical align stretch</span>
            <section>
                <StackLayoutNormal alignItems="stretch" />
            </section>
            <section>
                <StackLayoutNormal alignItems="stretch" justifyContent="center" />
            </section>
            <section>
                <StackLayoutNormal alignItems="stretch" justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutNormal alignItems="stretch" justifyContent="end" />
            </section>

            <span>vertical align bottom</span>
            <section>
                <StackLayoutNormal alignItems="end" />
            </section>
            <section>
                <StackLayoutNormal alignItems="end" justifyContent="center" />
            </section>
            <section>
                <StackLayoutNormal alignItems="end" justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutNormal alignItems="end" justifyContent="end" />
            </section>

            <span className="k-colspan-all k-col-span-full"></span>

            <span></span>
            <span className="k-colspan-4 k-col-span-4">Orientation vertical</span>

            <span></span>
            <span>horizontal align left</span>
            <span>horizontal align center</span>
            <span>horizontal align stretch</span>
            <span>horizontal align right</span>

            <span>vertical align top</span>
            <section>
                <StackLayoutVertical />
            </section>
            <section>
                <StackLayoutVertical alignItems="center" />
            </section>
            <section>
                <StackLayoutVertical alignItems="stretch" />
            </section>
            <section>
                <StackLayoutVertical alignItems="end" />
            </section>

            <span>vertical align center</span>
            <section>
                <StackLayoutVertical justifyContent="center" />
            </section>
            <section>
                <StackLayoutVertical alignItems="center" justifyContent="center" />
            </section>
            <section>
                <StackLayoutVertical alignItems="stretch" justifyContent="center" />
            </section>
            <section>
                <StackLayoutVertical alignItems="end" justifyContent="center" />
            </section>

            <span>vertical align stretch</span>
            <section>
                <StackLayoutVertical justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutVertical alignItems="center" justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutVertical alignItems="stretch" justifyContent="stretch" />
            </section>
            <section>
                <StackLayoutVertical alignItems="end" justifyContent="stretch" />
            </section>

            <span>vertical align bottom</span>
            <section>
                <StackLayoutVertical justifyContent="end" />
            </section>
            <section>
                <StackLayoutVertical alignItems="center" justifyContent="end" />
            </section>
            <section>
                <StackLayoutVertical alignItems="stretch" justifyContent="end" />
            </section>
            <section>
                <StackLayoutVertical alignItems="end" justifyContent="end" />
            </section>

        </div>

    </>
);
