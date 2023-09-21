import { ChunkProgressBarNormal } from '../../progressbar';


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

            <span>Chunk</span>
            <ChunkProgressBarNormal progress={2} />
            <ChunkProgressBarNormal progress={2} dir="rtl" />

            <span>Chunk 100%</span>
            <ChunkProgressBarNormal progress={5} />
            <ChunkProgressBarNormal progress={5} dir="rtl" />

            <span>Chunk reverse</span>
            <ChunkProgressBarNormal reverse={true} progress={2} />
            <ChunkProgressBarNormal reverse={true} progress={2} dir="rtl" />

            <span>Chunk 100% reverse</span>
            <ChunkProgressBarNormal reverse={true} progress={5} />
            <ChunkProgressBarNormal reverse={true} progress={5} dir="rtl" />


        </div>
    </>
);
