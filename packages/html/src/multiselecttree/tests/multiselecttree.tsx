import { Chip, ChipAction } from '../../chip';
import { MultiSelectTree, MultiSelectTreeNormal, MultiSelectTreeArrowButton, MultiSelectTreeValue } from '..';


const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelectTree</span>
            <span>MultiSelectTree RTL</span>

            <div>no placeholder nor value</div>
            <div>
                <MultiSelectTreeNormal />
            </div>
            <div dir="rtl">
                <MultiSelectTreeNormal />
            </div>

            <div>placeholder</div>
            <div>
                <MultiSelectTreeNormal placeholder="MultiSelectTree..." />
            </div>
            <div dir="rtl">
                <MultiSelectTreeNormal placeholder="MultiSelectTree..." />
            </div>

            <div>arrow button</div>
            <div>
                <MultiSelectTreeArrowButton showArrowButton placeholder="MultiSelectTree with arrow button" />
            </div>
            <div dir="rtl">
                <MultiSelectTreeArrowButton showArrowButton placeholder="MultiSelectTree with arrow button" />
            </div>

            {[ 'normal', ...MultiSelectTree.states ].map((state) => (
                <>
                    <div>{state}</div>
                    <div>
                        <MultiSelectTreeValue { ...{ [state]: true }}>{state}</MultiSelectTreeValue>
                    </div>
                    <div dir="rtl">
                        <MultiSelectTreeValue { ...{ [state]: true }}>{state}</MultiSelectTreeValue>
                    </div>
                </>
            ))}

            <div>invalid + focus</div>
            <div>
                <MultiSelectTreeValue invalid focus>invalid + focus</MultiSelectTreeValue>
            </div>
            <div dir="rtl">
                <MultiSelectTreeValue invalid focus>invalid + focus</MultiSelectTreeValue>
            </div>

            <div>valid + focus</div>
            <div>
                <MultiSelectTreeValue valid focus>valid + focus</MultiSelectTreeValue>
            </div>
            <div dir="rtl">
                <MultiSelectTreeValue valid focus>valid + focus</MultiSelectTreeValue>
            </div>

            <div>multi line + overflow</div>
            <div>
                <MultiSelectTreeNormal
                    fillMode="solid"
                    tags={(
                        <>
                            <Chip text="multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="multi-line + overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelectTreeNormal
                    fillMode="solid"
                    tags={(
                        <>
                            <Chip text="multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="multi-line + overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
        </div>
    </>
);
