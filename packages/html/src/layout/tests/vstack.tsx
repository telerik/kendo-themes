import ReactDOM from 'react-dom/client';
import { Layout } from '../../layout';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-hstack,
    .k-vstack {
        outline: 1px dotted;
    }
    .box {
        box-sizing: border-box;
        padding: 4px;
        border: 1px solid #cccccc;
        background: #fafafa;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>vertical stack</span>
            <span>stretched item (needs height)</span>
            <span></span>
            <span></span>

            <section>
                <Layout orientation="vertical">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" style={{ height: "150px" }}>
                    <div className="box">Box</div>
                    <div className="box k-flex">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section></section>
            <section></section>

            <span>align start</span>
            <span>align center</span>
            <span>align end</span>
            <span>align stretch</span>
            <section>
                <Layout orientation="vertical" alignItems="start">
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" alignItems="center">
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" alignItems="end">
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" alignItems="stretch">
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>

            <span>pack start</span>
            <span>pack center</span>
            <span>pack end</span>
            <span>pack stretch</span>
            <section>
                <Layout orientation="vertical" justifyContent="start" style={{ height: "150px" }}>
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" justifyContent="center" style={{ height: "150px" }}>
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" justifyContent="end" style={{ height: "150px" }}>
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="vertical" justifyContent="stretch" style={{ height: "150px" }}>
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 33</div>
                </Layout>
            </section>

        </div>

    </>
);
