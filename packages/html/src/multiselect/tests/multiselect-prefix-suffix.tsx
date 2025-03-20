import { MultiSelect, MultiSelectNormal, MultiSelectPrefix, MultiSelectSuffix } from '..';
import { TextButton } from '../../button';
import { Chip, ChipAction } from '../../chip';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            {MultiSelect.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-col-span-full k-text-center">{fillMode}</span>

                    <span>normal</span>
                    <div>
                        <MultiSelectPrefix fillMode={fillMode} />
                    </div>

                    <div>
                        <MultiSelectSuffix fillMode={fillMode} />
                    </div>

                    <div>
                        <MultiSelectNormal fillMode={fillMode}
                            prefix={
                                <>
                                    <Icon icon="user" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Cc</TextButton>
                                </>
                            }
                            tags={(
                                <>
                                    <Chip text="Prefix & Suffix" actions={ <ChipAction type="remove"/> } />
                                </>
                            )}
                        />
                    </div>

                    <span>disabled</span>
                    <div>
                        <MultiSelectPrefix fillMode={fillMode} disabled/>
                    </div>

                    <div>
                        <MultiSelectSuffix fillMode={fillMode} disabled/>
                    </div>

                    <div>
                        <MultiSelectNormal fillMode={fillMode} disabled
                            prefix={
                                <>
                                    <Icon icon="user" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Cc</TextButton>
                                </>
                            }
                            tags={(
                                <>
                                    <Chip text="Prefix & Suffix" actions={ <ChipAction type="remove"/> } />
                                </>
                            )}
                        />
                    </div>

                    <span>validation</span>
                    <div>
                        <MultiSelectPrefix fillMode={fillMode} invalid/>
                    </div>

                    <div>
                        <MultiSelectSuffix fillMode={fillMode} invalid/>
                    </div>

                    <div>
                        <MultiSelectNormal fillMode={fillMode} invalid
                            prefix={
                                <>
                                    <Icon icon="user" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Cc</TextButton>
                                </>
                            }
                            tags={(
                                <>
                                    <Chip text="Prefix & Suffix" actions={ <ChipAction type="remove"/> } />
                                </>
                            )}
                        />
                    </div>

                    <span>RTL</span>
                    <div dir="rtl">
                        <MultiSelectPrefix fillMode={fillMode} />
                    </div>

                    <div dir="rtl">
                        <MultiSelectSuffix fillMode={fillMode} />
                    </div>

                    <div dir="rtl">
                        <MultiSelectNormal fillMode={fillMode}
                            prefix={
                                <>
                                    <Icon icon="user" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Cc</TextButton>
                                </>
                            }
                            tags={(
                                <>
                                    <Chip text="Prefix & Suffix" actions={ <ChipAction type="remove"/> } />
                                </>
                            )}
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
