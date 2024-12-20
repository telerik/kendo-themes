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
                <OneTimePasswordGroups />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups />
            </div>

            <span>placeholder</span>
            <div>
                <OneTimePasswordGroups placeholder="#" />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups placeholder="#" />
            </div>

            {['normal', ...OneTimePasswordInput.states].map((state) => (
                <>
                    <span>{state}</span>
                    <div>
                        <OneTimePasswordGroups {...{ [state]: true }} value="1" />
                    </div>

                    <div dir="rtl">
                        <OneTimePasswordGroups {...{ [state]: true }} value="1" />
                    </div>
                </>
            ))}

            <span>invalid focus</span>
            <div>
                <OneTimePasswordGroups value="1" invalid focus />
            </div>
            <div dir="rtl">
                <OneTimePasswordGroups value="1" invalid focus />
            </div>
        </div>
    </>
);
