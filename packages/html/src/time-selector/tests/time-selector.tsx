import { TimeSelectorAll, TimeSelectorHour, TimeSelectorMinute } from "../../time-selector";

const style = `
    .k-animation-container {
        width: min-content;
        max-width: 100%;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>HH:mm:ss:SSS tt</span>
            <span>HH:mm:ss tt</span>
            <span>HH</span>
            <section>
                <TimeSelectorAll />
            </section>
            <section>
                <TimeSelectorMinute />
            </section>
            <section>
                <TimeSelectorHour />
            </section>
        </div>
    </>
);
