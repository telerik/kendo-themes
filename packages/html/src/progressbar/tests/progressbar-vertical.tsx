import { ProgressBarNormal } from '../../progressbar';


const style = `
    #test-area {
        justify-items: center;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-9">

            <span>Partial start</span>
            <span>Partial center</span>
            <span>Partial end</span>
            <span>100% start</span>
            <span>100% center</span>
            <span>100% end</span>
            <span>No Label</span>
            <span>Thin style</span>
            <span>Thick style</span>

            <ProgressBarNormal orientation="vertical" value="5" />
            <ProgressBarNormal orientation="vertical" value="50" labelPosition="center" />
            <ProgressBarNormal orientation="vertical" value="95" labelPosition="end" />
            <ProgressBarNormal orientation="vertical" value="100" />
            <ProgressBarNormal orientation="vertical" value="100" labelPosition="center" />
            <ProgressBarNormal orientation="vertical" value="100" labelPosition="end" />
            <ProgressBarNormal orientation="vertical" value="50" label={false} />
            <ProgressBarNormal orientation="vertical" value="50" label={false} width="2px" />
            <ProgressBarNormal orientation="vertical" value="50" width="50px" labelPosition="end" />
        </div>
    </>
);
