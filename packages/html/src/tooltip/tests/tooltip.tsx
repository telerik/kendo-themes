import { AnimationContainer } from '../../animation-container';
import { TooltipNormal, TooltipClosable } from '../../tooltip';

const style = `
        #test-area {
            grid-template-columns: 100px repeat(3, 1fr);
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
            <span></span>
            <span>Default Tooltip</span>
            <span>Closeable Tooltip</span>
            <span>Tooltip with callout</span>

            <span>Content</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal callout="bottom"/>
                </AnimationContainer>
            </section>

            <span>Long content</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="Long tooltip content. Enough so it goes on another line" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" callout="bottom" />
                </AnimationContainer>
            </section>

            <span>Title</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable title="Tooltip title" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal title="Tooltip title" callout="bottom" />
                </AnimationContainer>
            </section>

            <span>Title with glyphs</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="Long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="bottom" />
                </AnimationContainer>
            </section>

            <span>Angular</span>
            <section>
                <AnimationContainer>
                    <div className="k-popup k-popup-transparent">
                        <TooltipNormal content="Angular tooltip" />
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-popup k-popup-transparent">
                        <TooltipClosable content="Angular tooltip" />
                    </div>
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <div className="k-popup k-popup-transparent">
                        <TooltipNormal content="Angular tooltip" callout="bottom"/>
                    </div>
                </AnimationContainer>
            </section>

            <span>jQuery and Blazor</span>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="jQuery and Blazor" className="k-popup" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipClosable content="jQuery and Blazor" className="k-popup" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <TooltipNormal content="jQuery and Blazor" callout="bottom" className="k-popup" />
                </AnimationContainer>
            </section>
        </div>
    </>
);
