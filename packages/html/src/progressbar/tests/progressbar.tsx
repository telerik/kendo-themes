import { ProgressBarNormal } from '../../progressbar';


const style = `
    #test-area {
        grid-template-columns: auto 1fr 1fr;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>LTR</span>
            <span>RTL</span>

            <span>Partial start</span>
            <ProgressBarNormal value="5" />
            <ProgressBarNormal value="5" dir="rtl" />

            <span>Partial center</span>
            <ProgressBarNormal value="50" labelPosition="center" />
            <ProgressBarNormal value="50" labelPosition="center" dir="rtl" />

            <span>Partial end</span>
            <ProgressBarNormal value="95" labelPosition="end" />
            <ProgressBarNormal value="95" labelPosition="end" dir="rtl" />

            <span>100% start</span>
            <ProgressBarNormal value="100" />
            <ProgressBarNormal value="100" dir="rtl" />

            <span>100% center</span>
            <ProgressBarNormal value="100" labelPosition="center" />
            <ProgressBarNormal value="100" labelPosition="center" dir="rtl" />

            <span>100% end</span>
            <ProgressBarNormal value="100" labelPosition="end" />
            <ProgressBarNormal value="100" labelPosition="end" dir="rtl" />

            <span>No Label</span>
            <ProgressBarNormal value="50" label={false} />
            <ProgressBarNormal value="50" label={false} dir="rtl" />

            <span>Thin style</span>
            <ProgressBarNormal value="50" label={false} height="2px" />
            <ProgressBarNormal value="50" label={false} height="2px" dir="rtl" />

            <span>Thick style</span>
            <ProgressBarNormal value="50" height="50px" labelPosition="end" />
            <ProgressBarNormal value="50" height="50px" labelPosition="end" dir="rtl" />

        </div>
    </>
);
