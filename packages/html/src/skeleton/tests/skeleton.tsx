import { Skeleton } from '../../skeleton';

const style = `
    .k-skeleton-container {
        width: 300px;
        height: 300px;
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(10, 1fr);
        gap: 10px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <Skeleton style={{ width: '300px' }} />
            <Skeleton shape={'circle'} style={{ width: '50px', height: '50px' }} />
            <Skeleton shape={'rect'} style={{ width: '300px', height: '200px' }} />

            <div className="k-skeleton-container k-d-grid">
                <Skeleton shape={'circle'} style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }} />
                <Skeleton style={{ gridColumn: "3 / 10", gridRow: "1 / 2" }} />
                <Skeleton style={{ gridColumn: "3 / 7", gridRow: "2 / 3" }} />

                <Skeleton shape={'rect'} style={{ gridColumn: "1 / 11", gridRow: "3 / 8" }} />

                <Skeleton style={{ gridColumn: "1 / 11", gridRow: "9 / 10" }} />
                <Skeleton style={{ gridColumn: "1 / 11", gridRow: "10 / 10" }} />
            </div>

        </div>
    </>
);
