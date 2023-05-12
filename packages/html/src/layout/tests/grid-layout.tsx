import { Layout } from '../../layout';


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
                <Layout type="grid" alignItems="start" justifyItems="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="start" justifyItems="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="start" justifyItems="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="start" justifyItems="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align center</span>
            <section>
                <Layout type="grid" alignItems="center" justifyItems="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="center" justifyItems="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="center" justifyItems="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="center" justifyItems="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align stretch</span>
            <section>
                <Layout type="grid" alignItems="stretch" justifyItems="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="stretch" justifyItems="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="stretch" justifyItems="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="stretch" justifyItems="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align bottom</span>
            <section>
                <Layout type="grid" alignItems="end" justifyItems="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="end" justifyItems="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="end" justifyItems="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="grid" alignItems="end" justifyItems="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

        </div>

    </>
);
