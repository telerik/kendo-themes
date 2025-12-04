import { SkeletonCircle, SkeletonNormal, SkeletonRectangle } from '../../skeleton';

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

            <div aria-busy="true">
                <SkeletonNormal style={{ width: '300px' }} />
            </div>
            <div aria-busy="true">
                <SkeletonCircle style={{ width: '50px', height: '50px' }} />
            </div>
            <div aria-busy="true">
                <SkeletonRectangle style={{ width: '300px', height: '200px' }} />
            </div>

            <div className="k-skeleton-container k-d-grid k-skeleton-pulse" aria-busy="true" role="alert">
                <SkeletonCircle animation={false} style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }} />
                <SkeletonNormal animation={false} style={{ gridColumn: "3 / 10", gridRow: "1 / 2" }} />
                <SkeletonNormal animation={false} style={{ gridColumn: "3 / 7", gridRow: "2 / 3" }} />
                <SkeletonRectangle animation={false} style={{ gridColumn: "1 / 11", gridRow: "3 / 8" }} />
                <SkeletonNormal animation={false} style={{ gridColumn: "1 / 11", gridRow: "9 / 10" }} />
                <SkeletonNormal animation={false} style={{ gridColumn: "1 / 11", gridRow: "10 / 10" }} />
            </div>

        </div>
    </>
);
