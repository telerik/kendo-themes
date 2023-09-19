import { ChunkProgressBar } from '../../progressbar';

const style = `
    .k-progressbar-indeterminate,
    .k-progressbar-indeterminate::before,
    .k-progressbar-indeterminate::after {
        /* Comment if you need to preview the indeterminate animation */
        animation: none !important;
    }

    .k-d-grid {
        width: 500px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            {[ 'normal', ...ChunkProgressBar.states ].map((state) => (
                <>
                    <div>{state}</div>
                    <ChunkProgressBar progress={3} { ...{ [state]: true }} />
                </>
            ))}
        </div>
    </>
);
