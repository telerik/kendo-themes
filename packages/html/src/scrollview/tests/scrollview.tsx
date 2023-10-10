import { ScrollViewNormal } from '../../scrollview';

const style = `
    .k-scrollview {
        width: 100%;
        height: 300px;
    }

    .k-scrollview { background: gray !important; }
    .k-scrollview-dark { background: white !important; }
    .k-scrollview-light { background: black !important; }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Light mode</span>
            <span>Normal</span>
            <span>Dark mode</span>

            <ScrollViewNormal mode="light" />
            <ScrollViewNormal />
            <ScrollViewNormal mode="dark" />

            <span>Pager disabled</span>
            <span></span>
            <span></span>

            <ScrollViewNormal mode="light" pager={false} />
            <ScrollViewNormal pager={false} />
            <ScrollViewNormal mode="dark" pager={false} />
        </div>
    </>
);
