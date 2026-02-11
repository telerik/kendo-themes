import { SmartBoxNormal } from '../templates/smart-box-normal';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Normal</span>
            <div>
                <SmartBoxNormal />
            </div>

        </div>
    </>
);
