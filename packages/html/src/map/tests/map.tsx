import { Map } from '..';


const styles = `
    .k-map .k-layer:last-child {
        background-color: #f0f0f0;
        top: 0; right: 0; bottom: 0; left: 0;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <Map style={{ position: "relative" }}></Map>
        </div>
    </>
);
