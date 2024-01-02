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

            <span>ComboBox Outline</span>
            <span>ComboBox Outline RTL</span>

            <div>
                <ComboboxNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <ComboboxNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Combobox.states ].map((state) => (
                <>
                    <div>
                        <ComboboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <ComboboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <ComboboxNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <ComboboxNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>

            <div>
                <ComboboxNormal value="valid focus" fillMode="outline" valid focus />
            </div>
            <div dir="rtl">
                <ComboboxNormal value="valid focus" fillMode="outline" valid focus />
            </div>
        </div>
    </>
);
