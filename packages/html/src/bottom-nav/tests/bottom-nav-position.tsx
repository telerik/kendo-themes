import { BottomNavNormal } from '../../bottom-nav';


const styles = `
    #test-area {
        background-color: #f3f5f7;
    }
    .content { margin: 20px; }
    .page {
        height: 250px;
        transform: translate( 0, 0 );
        border: dashed 1px gray;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <div className="page">
                <div className="content">
                    <p>Bottom Navigation position - fixed</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi sed illum eos laborum culpa officia hic asperiores laboriosam maiores?</p>
                </div>
                <BottomNavNormal positionMode="fixed" themeColor="primary" border />
            </div>

            <div className="page">
                <div className="content">
                    <p>Bottom Navigation position - sticky</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi sed illum eos laborum culpa officia hic asperiores laboriosam maiores?</p>
                </div>
                <BottomNavNormal positionMode="sticky" themeColor="primary" border />
            </div>

            <div className="page">
                <div className="content">
                    <p>Bottom Navigation position - absolute</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi sed illum eos laborum culpa officia hic asperiores laboriosam maiores?</p>
                </div>
                <BottomNavNormal positionMode="absolute" themeColor="primary" border />
            </div>
        </div>
    </>
);
