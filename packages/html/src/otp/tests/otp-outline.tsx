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
                <OneTimePasswordNormal fillMode="outline" />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal fillMode="outline" />
            </div>

            <div>
                <OneTimePasswordNormal fillMode="outline" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal fillMode="outline" placeholder="#" />
            </div>

            {[ 'normal', ...Input.states ].map((state) => (
                <>
                    <div>
                        <OneTimePasswordNormal fillMode="outline" { ...{ [state]: true }} value="0" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordNormal fillMode="outline" { ...{ [state]: true }} value="0" />
                    </div>
                </>
            ))}

            <div>
                <OneTimePasswordNormal fillMode="outline" value="0" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal fillMode="outline" value="0" invalid focus />
            </div>
        </div>
    </>
);
