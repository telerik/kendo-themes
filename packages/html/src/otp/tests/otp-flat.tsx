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
                <OneTimePasswordGroups fillMode="flat" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups fillMode="flat" />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroups fillMode="flat" placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups fillMode="flat" placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroups fillMode="flat" {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroups fillMode="flat" {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroups fillMode="flat" value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups fillMode="flat" value="1" invalid focus />
            </div>
        </div>
    </>
);
