import { OneTimePasswordGroupsNoSpace, OneTimePasswordInput } from '..';

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
                <OneTimePasswordGroupsNoSpace fillMode="flat" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="flat" />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="flat" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="flat" placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroupsNoSpace fillMode="flat" {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroupsNoSpace fillMode="flat" {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="flat" value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="flat" value="1" invalid focus />
            </div>
        </div>
    </>
);
