import { ScrollView } from '../../scrollview';


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

            <ScrollView mode="light" />
            <ScrollView />
            <ScrollView mode="dark" />

            <span>RTL</span>
            <span></span>
            <span></span>

            <ScrollView rtl />
        </div>
    </>
);
