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
            <span>MultiSelect Outline</span>
            <span>MultiSelect Outline RTL</span>

            <div>placeholder</div>
            <div>
                <MultiSelectNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <MultiSelectNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            <div>arrow button</div>
            <div>
                <MultiSelectArrowButton fillMode="outline" placeholder="multiSelect with arrow button" />
            </div>
            <div dir="rtl">
                <MultiSelectArrowButton fillMode="outline" placeholder="multiSelect with arrow button" />
            </div>

            {[ 'normal', ...MultiSelect.states ].map((state) => (
                <>
                    <div>{ state }</div>
                    <div>
                        <MultiSelectValue { ...{ [state]: true }} fillMode="outline">{state}</MultiSelectValue>
                    </div>

                    <div dir="rtl">
                        <MultiSelectValue { ...{ [state]: true }} fillMode="outline">{state}</MultiSelectValue>
                    </div>
                </>
            ))}

            <div>invalid + focus</div>
            <div>
                <MultiSelectValue fillMode="outline" invalid focus>invalid + focus</MultiSelectValue>
            </div>
            <div dir="rtl">
                <MultiSelectValue fillMode="outline" invalid focus>invalid + focus</MultiSelectValue>
            </div>

            <div>multi line + overflow</div>
            <div>
                <MultiSelectNormal fillMode="outline"
                    tags={(
                        <>
                            <Chip text="multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="multi-line + overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelectNormal fillMode="outline"
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
