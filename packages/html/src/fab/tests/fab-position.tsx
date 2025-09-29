import { IconFloatingActionButton } from '../../fab';


const styles = `
    #test-area {
        grid-template-columns: 150px repeat(3, 1fr);
        grid-template-rows: 30px repeat(4, 250px);
    }
    .relative-container {
        position: relative;
        border: 1px solid #ccc;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Start</span>
            <span>Center</span>
            <span>End</span>

            <span>Top</span>
            <span className="relative-container">
                <IconFloatingActionButton position="top-start" themeColor="primary" style={{ top: "16px", left: "16px" }} />
            </span>
            <span className="relative-container">
                <IconFloatingActionButton position="top-center" themeColor="primary" style={{ top: "16px" }} />
            </span>
            <span className="relative-container">
                <IconFloatingActionButton position="top-end" themeColor="primary" style={{ top: "16px", right: "16px" }} />
            </span>

            <span>Middle</span>
            <span className="relative-container">
                <IconFloatingActionButton position="middle-start" themeColor="primary" style={{ left: "16px" }} />
            </span>
            <span className="relative-container">
                NO CENTER POSITION
            </span>
            <span className="relative-container">
                <IconFloatingActionButton position="middle-end" themeColor="primary" style={{ right: "16px" }} />
            </span>

            <span>Bottom</span>
            <span className="relative-container">
                <IconFloatingActionButton position="bottom-start" themeColor="primary" style={{ bottom: "16px", left: "16px" }} />
            </span>
            <span className="relative-container">
                <IconFloatingActionButton position="bottom-center" themeColor="primary" style={{ bottom: "16px" }} />
            </span>
            <span className="relative-container">
                <IconFloatingActionButton position="bottom-end" themeColor="primary" style={{ bottom: "16px", right: "16px" }} />
            </span>

        </div>
    </>
);
