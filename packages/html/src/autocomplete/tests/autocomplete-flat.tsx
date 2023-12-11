import { Autocomplete, AutocompleteNormal } from '../../autocomplete';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Autocomplete Flat</span>
            <span>Autocomplete Flat RTL</span>

            <div>
                <AutocompleteNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <AutocompleteNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Autocomplete.states ].map((state) => (
                <>
                    <div>
                        <AutocompleteNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <AutocompleteNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <AutocompleteNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <AutocompleteNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>

            <div>
                <AutocompleteNormal value="valid focus" fillMode="flat" valid focus />
            </div>
            <div dir="rtl">
                <AutocompleteNormal value="valid focus" fillMode="flat" valid focus />
            </div>
        </div>
    </>
);
