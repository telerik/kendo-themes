import { ProgressBar } from '..';


const style = `
    .subgrid-horizontal {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        grid-gap: 20px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <div className="subgrid-horizontal">
                <span></span>
                <span>LTR</span>
                <span>RTL</span>

                <span>Reverse start</span>
                <ProgressBar reverse={true} value="95" />
                <ProgressBar reverse={true} value="95" dir="rtl" />


                <span>Reverse center</span>
                <ProgressBar reverse={true} value="50" labelPosition="center" />
                <ProgressBar reverse={true} value="50" labelPosition="center" dir="rtl" />

                <span>Reverse end</span>
                <ProgressBar reverse={true} value="5" labelPosition="end" />
                <ProgressBar reverse={true} value="5" labelPosition="end" dir="rtl" />

                <span>R 100% start</span>
                <ProgressBar reverse={true} value="100" />
                <ProgressBar reverse={true} value="100" dir="rtl" />

                <span>R 100% center</span>
                <ProgressBar reverse={true} value="100" labelPosition="center" />
                <ProgressBar reverse={true} value="100" labelPosition="center" dir="rtl" />

                <span>R 100% end</span>
                <ProgressBar reverse={true} value="100" labelPosition="end" />
                <ProgressBar reverse={true} value="100" labelPosition="end" dir="rtl" />
            </div>
        </div>
    </>
);
