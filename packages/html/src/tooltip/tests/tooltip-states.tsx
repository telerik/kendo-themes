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
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">Tooltip states</span>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-primary">
                        <div className="k-tooltip-content">primary top</div>
                        <div className="k-callout k-callout-n"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-primary">
                        <div className="k-tooltip-content">primary right</div>
                        <div className="k-callout k-callout-e"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-primary">
                        <div className="k-tooltip-content">primary bottom</div>
                        <div className="k-callout k-callout-s"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-primary">
                        <div className="k-tooltip-content">primary left</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-info">
                        <div className="k-tooltip-content">info tooltip</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-success">
                        <div className="k-tooltip-content">success tooltip</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-warning">
                        <div className="k-tooltip-content">warning tooltip</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-tooltip k-tooltip-error">
                        <div className="k-tooltip-content">error tooltip</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </AnimationContainer>
            </section>
        </div>
    </>
);
