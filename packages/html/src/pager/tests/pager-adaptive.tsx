import { Pager } from '..';


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
            <Pager size="large"/>
            <Pager size="large" type="input"/>
            <span>500 px</span>
            <Pager size="large" adaptive info={false} refresh={false} itemsPerPage={false} style={{ width: "500px" }}/>
            <Pager size="large" type="input" adaptive info={false} refresh={false} itemsPerPage={false} style={{ width: "500px" }}/>
            <span>360 px</span>
            <Pager size="large" adaptive info={false} refresh={false} itemsPerPage={false} pageSizes={false} style={{ width: "360px" }}/>
            <Pager size="large" type="input" adaptive info={false} refresh={false} itemsPerPage={false} pageSizes={false} style={{ width: "360px" }}/>
        </div>
    </>
);
