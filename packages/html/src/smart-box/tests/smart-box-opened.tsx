import { SmartBoxOpened } from '..';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Smart box - Opened</span>
            <span>Smart box - Opened RTL</span>

            <div>
                <SmartBoxOpened />
            </div>
            <div dir="rtl">
                <SmartBoxOpened />
            </div>
        </div>
    </>
);
