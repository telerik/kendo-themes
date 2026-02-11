import { OneTimePasswordGroupsNoSpace } from '../templates/otp-groups-no-space';
import { OneTimePasswordInput } from '../otp-input';

const styles = `
    #test-area {
        max-width: 800px;
        grid-template-columns: 80px repeat(2, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>TextBox</span>
            <span>TextBox RTL</span>

            <span>normal</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="solid" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="solid" />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="solid" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="solid" placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroupsNoSpace fillMode="solid" {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroupsNoSpace fillMode="solid" {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="solid" value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="solid" value="1" invalid focus />
            </div>
        </div>
    </>
);
