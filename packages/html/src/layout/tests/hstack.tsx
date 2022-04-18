import React from 'react';
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

            <span>horizontal stack</span>
            <span>stretched item</span>
            <span>single line</span>
            <span>wrapped</span>

            <section>
                <Layout orientation="horizontal">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal">
                    <div className="box">Box</div>
                    <div className="box k-flex">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" wrap>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>align start</span>
            <span>align center</span>
            <span>align end</span>
            <span>align stretch</span>
            <section>
                <Layout orientation="horizontal" alignItems="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box" style={{ height: '50px' }}>Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" alignItems="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box" style={{ height: '50px' }}>Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" alignItems="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box" style={{ height: '50px' }}>Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" alignItems="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box" style={{ height: '50px' }}>Box</div>
                </Layout>
            </section>

            <span>pack start</span>
            <span>pack center</span>
            <span>pack start</span>
            <span>pack stretch</span>
            <section>
                <Layout orientation="horizontal" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout orientation="horizontal" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

        </div>

    </>
);
