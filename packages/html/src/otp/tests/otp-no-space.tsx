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
                <OneTimePasswordGroupsNoSpace />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroupsNoSpace placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroupsNoSpace {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroupsNoSpace {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroupsNoSpace value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroupsNoSpace value="1" invalid focus />
            </div>
        </div>
    </>
);
