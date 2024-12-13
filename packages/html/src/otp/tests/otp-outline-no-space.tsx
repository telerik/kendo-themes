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
                <OneTimePasswordGroupsNoSpace fillMode="outline" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="outline" />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="outline" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="outline" placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroupsNoSpace fillMode="outline" {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroupsNoSpace fillMode="outline" {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroupsNoSpace fillMode="outline" value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace fillMode="outline" value="1" invalid focus />
            </div>
        </div>
    </>
);
