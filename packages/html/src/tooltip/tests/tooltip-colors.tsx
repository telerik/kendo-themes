import { AnimationContainer } from '../../animation-container';
import { Tooltip, TooltipNormal, TooltipClosable } from '../../tooltip';

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

            {[ ...Tooltip.options.themeColor ].map((themeColor) => (
                <>
                    <section>
                        <AnimationContainer>
                            <TooltipNormal content={`${themeColor} tooltip`} themeColor={themeColor} />
                        </AnimationContainer>
                    </section>

                    <section>
                        <AnimationContainer>
                            <TooltipClosable content={`${themeColor} tooltip`} themeColor={themeColor} />
                        </AnimationContainer>
                    </section>

                    <section>
                        <AnimationContainer>
                            <TooltipNormal callout="bottom" content={`${themeColor} tooltip`} themeColor={themeColor} />
                        </AnimationContainer>
                    </section>
                </>
            ))}
        </div>
    </>
);
