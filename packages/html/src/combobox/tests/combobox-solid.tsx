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
                <ComboboxNormal />
            </div>
            <div dir="rtl">
                <ComboboxNormal />
            </div>
            <div>
                <ComboboxNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <ComboboxNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Combobox.states ].map((state) => (
                <>
                    <div>
                        <ComboboxNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <ComboboxNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <ComboboxNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <ComboboxNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
