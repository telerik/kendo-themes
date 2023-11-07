import { AnimationContainer } from '../../animation-container';
import { TooltipNormal, TooltipClosable } from '../../tooltip';

const style = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
    }

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
        <div id="test-area" className="k-d-grid k-grid-cols-5">

            <span>Tooltip / Callout</span>
            <span>Callout bottom</span>
            <span>Callout top</span>
            <span>Callout right</span>
            <span>Callout left</span>

            <span>Content</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal callout="top"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal callout="right"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal callout="left"/>
                </AnimationContainer>
            </section>

            <span>Long content</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="top" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="right" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="left" />
                </AnimationContainer>
            </section>

            <span>Content & Title</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="top" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="right" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="left" />
                </AnimationContainer>
            </section>

            <span>Long content & Title (with glyphs)</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="top" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="right" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipNormal content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="left" />
                </AnimationContainer>
            </section>

            <span>Closable tooltip with content</span>
            <section>
                <AnimationContainer>
                    <TooltipClosable callout="bottom" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipClosable callout="top"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipClosable callout="right"/>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <TooltipClosable callout="left"/>
                </AnimationContainer>
            </section>
        </div>
    </>
);
