import { TimelineHorizontal } from '../../timeline';

const style = `
    .k-card-media {
        display: block;
        height: 200px;
        width: 200px;
        background: #cccccc;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area">
            <span>Horizontal Timeline</span>
            <TimelineHorizontal />
        </div>
    </>
);
