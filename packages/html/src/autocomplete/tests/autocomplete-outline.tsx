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

            <span>Autocomplete Outline</span>
            <span>Autocomplete Outline RTL</span>

            <div>
                <AutocompleteNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <AutocompleteNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Autocomplete.states ].map((state) => (
                <>
                    <div>
                        <AutocompleteNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <AutocompleteNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <AutocompleteNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <AutocompleteNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
