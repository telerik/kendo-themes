import { DateTimeSelector } from '..';
import { Popup } from '../../popup';


const style = `
    .k-animation-container {
        width: min-content;
        max-width: 100%;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Date tab</span>
            <span>Time tab</span>

            <section>
                <Popup className="k-datetime-container">
                    <DateTimeSelector />
                </Popup>
            </section>

            <section>
                <Popup className="k-datetime-container">
                    <DateTimeSelector tab="time" />
                </Popup>
            </section>

        </div>
    </>
);
