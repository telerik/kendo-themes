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
                <OneTimePasswordNormal fillMode="flat" />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal fillMode="flat" />
            </div>

            <div>
                <OneTimePasswordNormal fillMode="flat" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal fillMode="flat" placeholder="#" />
            </div>

            {[ 'normal', ...Input.states ].map((state) => (
                <>
                    <div>
                        <OneTimePasswordNormal fillMode="flat" { ...{ [state]: true }} value="0" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordNormal fillMode="flat" { ...{ [state]: true }} value="0" />
                    </div>
                </>
            ))}

            <div>
                <OneTimePasswordNormal fillMode="flat" value="0" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordNormal fillMode="flat" value="0" invalid focus />
            </div>
        </div>
    </>
);
