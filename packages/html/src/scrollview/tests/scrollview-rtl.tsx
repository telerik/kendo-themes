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

            <span>RTL - Light mode</span>
            <span>RTL - Normal</span>
            <span>RTL - Dark mode</span>

            <ScrollViewNormal mode="light" rtl />
            <ScrollViewNormal rtl />
            <ScrollViewNormal mode="dark" rtl />

            <span>RTL Pager disabled</span>
            <span></span>
            <span></span>

            <ScrollViewNormal mode="light" pager={false} rtl />
            <ScrollViewNormal pager={false} rtl />
            <ScrollViewNormal mode="dark" pager={false} rtl />
        </div>
    </>
);
