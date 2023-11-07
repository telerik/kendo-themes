import { AnimationContainer } from '../../animation-container';
import { TooltipNormal, TooltipClosable } from '../../tooltip';

const style = `
    #test-area {
        grid-template-columns: 130px repeat(4, 1fr);
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
        <div id="test-area" className="k-d-grid">

            <span>Tooltip / Callout</span>
            <span>Callout right</span>
            <span>Callout right, Closable</span>
            <span>Callout left</span>
            <span>Callout left, Closable</span>

            <span>Content</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable callout="left" dir="rtl" />
                </AnimationContainer>
            </section>

            <span>Long content</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="Long tooltip content. Enough so it goes on another line" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="Long tooltip content. Enough so it goes on another line" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>

            <span>Content & Title</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable title="Tooltip title" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable title="Tooltip title" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>

            <span>Long content & Title (with glyphs)</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="left" />
                </AnimationContainer>
            </section>
        </div>
    </>
);
