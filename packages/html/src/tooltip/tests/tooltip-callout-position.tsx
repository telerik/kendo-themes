//import { Icon } from '../../icon';
import { AnimationContainer } from '../../animation-container';
import { Tooltip } from '../../tooltip';

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

            <span>Callout bottom</span>
            <span>Callout top</span>
            <span>Callout right</span>
            <span>Callout left</span>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="top"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="right"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="left"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="top" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="right" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="left" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="top" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="right" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="left" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="top" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="right" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="left" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Closeable tooltip" closable callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Closeable tooltip" closable callout="top"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Closeable tooltip" closable callout="right"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Closeable tooltip" closable callout="left"/>
                </AnimationContainer>
            </section>
        </div>
    </>
);
