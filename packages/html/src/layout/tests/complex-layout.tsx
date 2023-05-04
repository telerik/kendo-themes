import { Layout } from '../../layout';


const LayoutStyle = {
    height: "300px"
};

const styles = `
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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>

                <Layout orientation="vertical" style={LayoutStyle}>
                    <div className="box">Header</div>
                    <Layout orientation="horizontal" className="k-flex">
                        <div className="box">Sidebar</div>
                        <div className="box k-flex">Main</div>
                        <div className="box">Sidebar</div>
                    </Layout>
                    <div className="box">Footer</div>
                </Layout>

            </section>

        </div>

    </>
);
