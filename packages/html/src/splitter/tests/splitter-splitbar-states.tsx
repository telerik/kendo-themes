import SplitterSplitbar from '../splitter-splitbar';
import Splitter from '../splitter.spec';

const style = `
    .k-splitter {
        height: 150px;
    }

    .text {
        margin-inline: 10px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            {[ "normal", ...SplitterSplitbar.states ].map((state) => (
                <>
                    <span>{state}</span>
                    <Splitter>
                        <span className="text">static</span>
                        <SplitterSplitbar draggable={false} { ...{ [state]: true } }/>
                        <span className="text">draggable</span>
                        <SplitterSplitbar { ...{ [state]: true } }/>
                        <span className="text">collapse - right</span>
                        <SplitterSplitbar collapseNext { ...{ [state]: true } }/>
                        <span className="text">collapse  - left</span>
                        <SplitterSplitbar collapsePrev { ...{ [state]: true } }/>
                        <span className="text">collapse - left & right</span>
                        <SplitterSplitbar collapseNext collapsePrev { ...{ [state]: true } }/>
                    </Splitter>
                </>
            ))}

        </div>
    </>
);
