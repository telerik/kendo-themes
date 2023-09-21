import { ChunkProgressBarNormal } from '../../progressbar';


const style = `
    #test-area {
        justify-items: center;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Chunk</span>
            <span>Chunk 100%</span>
            <span>Chunk reverse</span>
            <span>Chunk 100% reverse</span>

            <ChunkProgressBarNormal orientation="vertical" progress={2} />
            <ChunkProgressBarNormal orientation="vertical" progress={5} />
            <ChunkProgressBarNormal orientation="vertical" reverse={true} progress={2} />
            <ChunkProgressBarNormal orientation="vertical" reverse={true} progress={5} />
        </div>
    </>
);
