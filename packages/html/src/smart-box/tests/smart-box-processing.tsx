import { SmartBoxProcessing } from '../templates/smart-box-processing';
import { SmartBoxNormal } from '../templates/smart-box-normal';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Normal</span>
            <span>Processing</span>

            <div>
                <SmartBoxNormal/>
            </div>

            <div>
                <SmartBoxProcessing/>
            </div>

        </div>
    </>
);
