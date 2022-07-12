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

root.render(
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
                <Layout type="stack" orientation="horizontal" alignItems="start" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="start" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="start" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="start" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align center</span>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="center" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="center" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="center" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="center" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align stretch</span>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="stretch" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="stretch" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="stretch" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="stretch" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align bottom</span>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="end" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="end" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="end" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="horizontal" alignItems="end" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
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
                <Layout type="stack" orientation="vertical" alignItems="start" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="center" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="stretch" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="end" justifyContent="start">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align center</span>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="start" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="center" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="stretch" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="end" justifyContent="center">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align stretch</span>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="start" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="center" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="stretch" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="end" justifyContent="stretch">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

            <span>vertical align bottom</span>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="start" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="center" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="stretch" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>
            <section>
                <Layout type="stack" orientation="vertical" alignItems="end" justifyContent="end">
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </Layout>
            </section>

        </div>

    </>
);
