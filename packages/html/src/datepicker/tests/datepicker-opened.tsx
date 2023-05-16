import { DatePicker } from '..';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }

    .k-popup {
        width: max-content;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DatePicker</span>
            <span>DatePicker RTL</span>

            <div>
                <DatePicker value="Opened" opened />
            </div>
            <div dir="rtl">
                <DatePicker value="Opened" opened dir="rtl" />
            </div>

        </div>
    </>
);
