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

            <span>Callout right</span>
            <span></span>
            <span>Callout left</span>
            <span></span>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" closable={true} callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" closable={true} callout="left" dir="rtl" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" closable={true} callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Long tooltip content. Enough so it goes on another line" closable={true} callout="left" dir="rtl" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" closable={true} callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="Tooltip Content" title="Tooltip title" closable={true} callout="left" dir="rtl" />
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" closable={true} callout="right" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" callout="left" dir="rtl" />
                </AnimationContainer>
            </section>
            <section>
                <AnimationContainer>
                    <Tooltip content="long tooltip content. Enough so it goes on another line" title="g y p q f t d l" closable={true} callout="left" />
                </AnimationContainer>
            </section>
        </div>
    </>
);
