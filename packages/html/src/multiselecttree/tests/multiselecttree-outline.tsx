import { Chip, ChipAction } from '../../chip';
import { MultiSelectTree } from '../../multiselecttree';


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
            <span>MultiSelectTree Outline</span>
            <span>MultiSelectTree Outline RTL</span>

            <div>Empty</div>
            <div>
                <MultiSelectTree fillMode="outline" placeholder="MultiSelectTree..." />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline" placeholder="MultiSelectTree..." />
            </div>

            <div>Arrow button</div>
            <div>
                <MultiSelectTree fillMode="outline" showArrowButton placeholder="MultiSelectTree with arrow button" />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline" showArrowButton placeholder="MultiSelectTree with arrow button" />
            </div>

            <div>Normal</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Normal" actions={ <ChipAction type="remove"/> } />
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Normal" actions={ <ChipAction type="remove"/> } />
                    )}
                />
            </div>

            <div>Hover</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Hover" actions={ <ChipAction type="remove"/> } />
                    )}
                    hover
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Hover" actions={ <ChipAction type="remove"/> } />
                    )}
                    hover
                />
            </div>

            <div>Focus</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Focus" focus actions={ <ChipAction type="remove"/> } />
                    )}
                    focus
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Focus" focus actions={ <ChipAction type="remove"/> } />
                    )}
                    focus
                />
            </div>

            <div>Disabled</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Disabled" actions={ <ChipAction type="remove"/> } />
                    )}
                    disabled
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Disabled" actions={ <ChipAction type="remove"/> } />
                    )}
                    disabled
                />
            </div>

            <div>Invalid</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Invalid" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Invalid" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                />
            </div>

            <div>Invalid + Focus</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Invalid + Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                    focus
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <Chip text="Invalid + Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                    focus
                />
            </div>

            <div>Loading</div>
            <div>
                <MultiSelectTree fillMode="outline" placeholder="Loading..." loading/>
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline" placeholder="Loading..." loading />
            </div>

            <div>Multi Line + Overflow</div>
            <div>
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <>
                            <Chip text="Multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="Multi-line + Overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelectTree fillMode="outline"
                    tags={(
                        <>
                            <Chip text="Multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="Multi-line + Overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
        </div>
    </>
);
