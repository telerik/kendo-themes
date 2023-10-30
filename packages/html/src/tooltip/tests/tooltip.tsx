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
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Default Tooltip</span>
            <span>Closeable Tooltip</span>
            <span>Tooltip with callout</span>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content"/>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" closable={true}/>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="bottom"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" closable={true} />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" closable={true} />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" closable={true} />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="bottom" />
                </AnimationContainer>
            </section>
        </div>
    </>
);
