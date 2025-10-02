import { Combobox, ComboboxNormal } from '../../combobox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ComboBox</span>
            <span>ComboBox RTL</span>

            <div>
                <ComboboxNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <ComboboxNormal fillMode="solid" />
            </div>
            <div>
                <ComboboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <ComboboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Combobox.states ].map((state) => (
                <>
                    <div>
                        <ComboboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <ComboboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <ComboboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <ComboboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
