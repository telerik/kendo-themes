import { TimePicker } from '..';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TimePicker</span>
            <span>TimePicker RTL</span>

            <div>
                <TimePicker value="Opened" opened />
            </div>
            <div dir="rtl">
                <TimePicker value="Opened" opened />
            </div>

        </div>
    </>
);
