import { PagerResponsive, PagerInput } from "..";


const styles = `
    #test-area {
        gap: 20px;
        grid-template-columns: 120px 1fr;
    }

    /* These styles are used to test the pager items hiding order threshold */
    #test-area > .k-pager {
        width: min-content;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span className="k-colspan-2 k-text-center">Adaptive Pager Items Hiding Order</span>

            <span>Numeric - 0</span>
            <PagerResponsive />
            <span>Input - 0</span>
            <PagerInput responsive={true} />
            <span>1</span>
            <PagerInput refresh={false} responsive={true} />
            <span>2</span>
            <PagerInput refresh={false} info={false} responsive={true} />
            <span>3</span>
            <PagerInput pageTitleInfo={false} refresh={false} info={false} responsive={true} />
            <span>4</span>
            <PagerInput pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} responsive={true} />
            <span>5</span>
            <PagerInput pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} pageSizes={false} responsive={true} />
        </div>
    </>
);
