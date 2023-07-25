import { PagerNormal, PagerInput, PagerAdaptive, PagerAdaptiveInput } from "../../pager";


const styles = `
    #test-area {
        gap: 20px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>&gt;= 640 px</span>
            <PagerNormal size="large"/>
            <PagerInput size="large"/>
            <span>500 px</span>
            <PagerAdaptive size="large" info={false} refresh={false} itemsPerPage={false} style={{ width: "500px" }}/>
            <PagerAdaptiveInput size="large" info={false} refresh={false} itemsPerPage={false} style={{ width: "500px" }}/>
            <span>360 px</span>
            <PagerAdaptive size="large" pageSizes={false} info={false} refresh={false} itemsPerPage={false} style={{ width: "360px" }}/>
            <PagerAdaptiveInput size="large" pageSizes={false} info={false} refresh={false} itemsPerPage={false} style={{ width: "360px" }}/>
        </div>
    </>
);
