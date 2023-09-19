import { ProgressBar } from '../../progressbar';


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

            <ProgressBar orientation="vertical" value="5" />
            <ProgressBar orientation="vertical" value="50" labelPosition="center" />
            <ProgressBar orientation="vertical" value="95" labelPosition="end" />
            <ProgressBar orientation="vertical" value="100" />
            <ProgressBar orientation="vertical" value="100" labelPosition="center" />
            <ProgressBar orientation="vertical" value="100" labelPosition="end" />
            <ProgressBar orientation="vertical" value="50" label={false} />
            <ProgressBar orientation="vertical" value="50" label={false} width="2px" />
            <ProgressBar orientation="vertical" value="50" width="50px" labelPosition="end" />
        </div>
    </>
);
