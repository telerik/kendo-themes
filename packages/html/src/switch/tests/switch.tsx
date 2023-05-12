import { Switch } from '../../switch';


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
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span></span>
            <span>On</span>
            <span>Off</span>


            <span>Normal</span>
            <section>
                <Switch checked />
            </section>
            <section>
                <Switch />
            </section>

            <span>Hover</span>
            <section>
                <Switch checked hover />
            </section>
            <section>
                <Switch hover />
            </section>

            <span>Focus</span>
            <section>
                <Switch checked focus />
            </section>
            <section>
                <Switch focus />
            </section>

            <span>Disabled</span>
            <section>
                <Switch checked disabled />
            </section>
            <section>
                <Switch disabled />
            </section>

            <span>Localized</span>
            <section>
                <Switch onLabel="On" offLabel="Off" checked />
            </section>
            <section>
                <Switch onLabel="On" offLabel="Off" />
            </section>

            <span>RTL</span>
            <section dir="rtl" >
                <Switch checked />
            </section>
            <section dir="rtl">
                <Switch />
            </section>

            <span></span>
            <section dir="rtl">
                <Switch onLabel="On" offLabel="Off" checked />
            </section>
            <section dir="rtl">
                <Switch onLabel="On" offLabel="Off" />
            </section>
        </div>
    </>
);
