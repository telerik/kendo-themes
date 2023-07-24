import { Switch, SwitchNormal, SwitchChecked } from '../../switch';

const styles = `
    body {
        background: #fcfcfc;
    }
    #test-area {
        max-width: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">
            <span></span>
            <span>Off</span>
            <span>On</span>
            <span>RTL - Off</span>
            <span>RTL - On</span>

            {[ 'normal', ...Switch.states ].map((state) => (state !== 'checked' ? (<>
                <span>{ state }</span>
                <section>
                    <SwitchNormal { ...{ [state]: true }} />
                </section>
                <section>
                    <SwitchChecked { ...{ [state]: true }} />
                </section>
                <section dir="rtl">
                    <SwitchNormal { ...{ [state]: true }} />
                </section>
                <section dir="rtl">
                    <SwitchChecked { ...{ [state]: true }} />
                </section>
            </>) : null)
            )}

            <span>localized</span>
            <section>
                <SwitchNormal onLabel="On" offLabel="Off" />
            </section>
            <section>
                <SwitchChecked onLabel="On" offLabel="Off" />
            </section>
            <section dir="rtl">
                <SwitchNormal onLabel="On" offLabel="Off" />
            </section>
            <section dir="rtl">
                <SwitchChecked onLabel="On" offLabel="Off" />
            </section>
        </div>
    </>
);
