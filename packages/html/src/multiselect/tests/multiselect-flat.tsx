import ReactDOM from 'react-dom/client';
import { Chip, ChipAction } from '../../chip';
import { MultiSelect } from '../../multiselect';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelect Flat</span>
            <span>MultiSelect Flat RTL</span>

            <div>Empty</div>
            <div>
                <MultiSelect fillMode="flat" placeholder="MultiSelect..." />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat" placeholder="MultiSelect..." />
            </div>

            <div>Arrow button</div>
            <div>
                <MultiSelect fillMode="flat" showArrowButton placeholder="MultiSelect with arrow button" />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat" showArrowButton placeholder="MultiSelect with arrow button" />
            </div>

            <div>Normal</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Normal" actions={ <ChipAction type="remove"/> } />
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Normal" actions={ <ChipAction type="remove"/> } />
                    )}
                />
            </div>

            <div>Hover</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Hover" actions={ <ChipAction type="remove"/> } />
                    )}
                    hover
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Hover" actions={ <ChipAction type="remove"/> } />
                    )}
                    hover
                />
            </div>

            <div>Focus</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Focus" focus actions={ <ChipAction type="remove"/> } />
                    )}
                    focus
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Focus" focus actions={ <ChipAction type="remove"/> } />
                    )}
                    focus
                />
            </div>

            <div>Disabled</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Disabled" actions={ <ChipAction type="remove"/> } />
                    )}
                    disabled
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Disabled" actions={ <ChipAction type="remove"/> } />
                    )}
                    disabled
                />
            </div>

            <div>Invalid</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Invalid" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Invalid" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                />
            </div>

            <div>Invalid + Focus</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Invalid + Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                    focus
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
                    tags={(
                        <Chip text="Invalid + Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                    focus
                />
            </div>

            <div>Loading</div>
            <div>
                <MultiSelect fillMode="flat" placeholder="Loading..." loading/>
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat" placeholder="Loading..." loading />
            </div>

            <div>Multi Line + Overflow</div>
            <div>
                <MultiSelect fillMode="flat"
                    tags={(
                        <>
                            <Chip text="Multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="Multi-line + Overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelect fillMode="flat"
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
