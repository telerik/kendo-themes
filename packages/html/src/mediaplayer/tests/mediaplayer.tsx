import { MediaPlayerNormal } from '../templates/mediaplayer-normal';


const styles = `
    .k-mediaplayer {
        height: 360px;
    }
    .k-slider-horizontal {
        --kendo-slider-start: 0;
        --kendo-slider-end: 50;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <MediaPlayerNormal />
        </div>
    </>
);
