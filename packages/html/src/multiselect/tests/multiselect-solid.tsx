import { Chip, ChipAction } from '../../chip';
import { MultiSelect, MultiSelectNormal, MultiSelectArrowButton, MultiSelectValue } from '../../multiselect';

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
            <span>MultiSelect</span>
            <span>MultiSelect RTL</span>

            <div>no placeholder or value</div>
            <div>
                <MultiSelectNormal fillMode="solid"/>
            </div>
            <div dir="rtl">
                <MultiSelectNormal fillMode="solid" />
            </div>

            <div>placeholder</div>
            <div>
                <MultiSelectNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <MultiSelectNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            <div>arrow button</div>
            <div>
                <MultiSelectArrowButton fillMode="solid" placeholder="multiSelect with arrow button" />
            </div>
            <div dir="rtl">
                <MultiSelectArrowButton fillMode="solid" placeholder="multiSelect with arrow button" />
            </div>

            {[ 'normal', ...MultiSelect.states ].map((state) => (
                <>
                    <div>{ state }</div>
                    <div>
                        <MultiSelectValue fillMode="solid" { ...{ [state]: true }}>{state}</MultiSelectValue>
                    </div>

                    <div dir="rtl">
                        <MultiSelectValue fillMode="solid" { ...{ [state]: true }}>{state}</MultiSelectValue>
                    </div>
                </>
            ))}

            <div>invalid + focus</div>
            <div>
                <MultiSelectValue fillMode="solid" invalid focus>invalid + focus</MultiSelectValue>
            </div>
            <div dir="rtl">
                <MultiSelectValue fillMode="solid" invalid focus>invalid + focus</MultiSelectValue>
            </div>

            <div>valid + focus</div>
            <div>
                <MultiSelectValue fillMode="solid" valid focus>valid + focus</MultiSelectValue>
            </div>
            <div dir="rtl">
                <MultiSelectValue fillMode="solid" valid focus>valid + focus</MultiSelectValue>
            </div>

            <div>multi line + overflow</div>
            <div>
                <MultiSelectNormal
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
                <MultiSelectNormal
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
