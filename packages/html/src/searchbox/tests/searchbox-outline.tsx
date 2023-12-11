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
            <span>Searchbox Outline</span>
            <span>Searchbox Outline RTL</span>

            <div>
                <SearchboxNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Searchbox.states ].map((state) => (
                <>
                    <div>
                        <SearchboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <SearchboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <SearchboxNormal fillMode="outline" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="outline" value="invalid focus" invalid focus />
            </div>

            <div>
                <SearchboxNormal fillMode="outline" value="valid focus" valid focus />
            </div>
            <div dir="rtl">
                <SearchboxNormal fillMode="outline" value="valid focus" valid focus />
            </div>
        </div>
    </>
);
