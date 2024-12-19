import { OneTimePasswordGroups, OneTimePasswordInput } from '..';

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
                <OneTimePasswordGroups fillMode="outline" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups fillMode="outline" />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroups fillMode="outline" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups fillMode="outline" placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroups fillMode="outline" {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroups fillMode="outline" {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroups fillMode="outline" value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups fillMode="outline" value="1" invalid focus />
            </div>
        </div>
    </>
);
