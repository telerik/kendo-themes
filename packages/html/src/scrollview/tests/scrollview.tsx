import { ScrollViewNormal } from '../../scrollview';

const style = `
    .k-scrollview {
        width: 100%;
        height: 300px;
    }

    .k-scrollview { background: gray !important; }
    .k-scrollview-inverse { background: var(--kendo-color-inverse-on-subtle) !important; }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Normal</span>
            <span>Inverse</span>

            <ScrollViewNormal />
            <ScrollViewNormal mode="inverse" />

            <span>Pager disabled</span>
            <span></span>

            <ScrollViewNormal pager={false} />
            <ScrollViewNormal mode="inverse" pager={false} />
        </div>
    </>
);
