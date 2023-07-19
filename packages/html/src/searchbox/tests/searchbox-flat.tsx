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
            <span>Searchbox Flat</span>
            <span>Searchbox Flat RTL</span>

            <div>
                <SearchboxNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Searchbox.states ].map((state) => (
                <>
                    <div>
                        <SearchboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <SearchboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <SearchboxNormal fillMode="flat" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="flat" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
