import { Searchbox, SearchboxNormal } from '../../searchbox';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Searchbox</span>
            <span>Searchbox RTL</span>

            <div>
                <SearchboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Searchbox.states ].map((state) => (
                <>
                    <div>
                        <SearchboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <SearchboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <SearchboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
