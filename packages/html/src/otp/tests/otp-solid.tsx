import { OneTimePasswordNormal } from '..';
import { Input } from '../../input';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TextBox</span>
            <span>TextBox RTL</span>

            <div>
                <OneTimePasswordNormal />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal />
            </div>

            <div>
                <OneTimePasswordNormal placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal placeholder="#" />
            </div>

            {[ 'normal', ...Input.states ].map((state) => (
                <>
                    <div>
                        <OneTimePasswordNormal { ...{ [state]: true }} value="0" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordNormal { ...{ [state]: true }} value="0" />
                    </div>
                </>
            ))}

            <div>
                <OneTimePasswordNormal value="0" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal value="0" invalid focus />
            </div>
        </div>
    </>
);
