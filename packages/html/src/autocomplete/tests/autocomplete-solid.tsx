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
                <AutocompleteNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <AutocompleteNormal fillMode="solid" />
            </div>
            <div>
                <AutocompleteNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <AutocompleteNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Autocomplete.states ].map((state) => (
                <>
                    <div>
                        <AutocompleteNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <AutocompleteNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <AutocompleteNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <AutocompleteNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
