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

            <span>Autocomplete</span>
            <span>Autocomplete RTL</span>

            <div>
                <AutocompleteNormal />
            </div>
            <div dir="rtl">
                <AutocompleteNormal />
            </div>
            <div>
                <AutocompleteNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <AutocompleteNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Autocomplete.states ].map((state) => (
                <>
                    <div>
                        <AutocompleteNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <AutocompleteNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <AutocompleteNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <AutocompleteNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
