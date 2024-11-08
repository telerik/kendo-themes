
import { AnimationContainer } from '../../animation-container';

const style = `
    .k-animation-container {
        display: inline-block;
        position: relative;
        overflow: visible;
    }

    .k-tooltip {
        position: relative;
    }
`;


export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <AnimationContainer className="k-chart-tooltip-wrapper ">
                <div className="k-popup">
                    <div className="k-chart-tooltip" style={{backgroundColor: 'var(--kendo-color-series-a)',  borderColor: 'var(--kendo-color-series-a)', opacity: 1, borderWidth: "1px"}}>
                        <span>Default Content 1</span>
                    </div>
                </div>
            </AnimationContainer>
        </div>
    </>
);
