import { Autocomplete, AutocompleteNormal, AutocompletePrefix, AutocompleteSuffix } from '..';
import { Icon, TextButton } from '../..';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            {Autocomplete.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-col-span-full k-text-center">{fillMode}</span>

                    <span>normal</span>
                    <div>
                        <AutocompletePrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <AutocompleteSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <AutocompleteNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="search" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Search</TextButton>
                                </>
                            }
                        />
                    </div>

                    <span>disabled</span>
                    <div>
                        <AutocompletePrefix fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <AutocompleteSuffix fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <AutocompleteNormal fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <Icon icon="search" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Search</TextButton>
                                </>
                            }
                        />
                    </div>

                    <span>validation</span>
                    <div>
                        <AutocompletePrefix fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <AutocompleteSuffix fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <AutocompleteNormal fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <Icon icon="search" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Search</TextButton>
                                </>
                            }
                        />
                    </div>

                    <span>RTL</span>
                    <div dir="rtl">
                        <AutocompletePrefix fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <AutocompleteSuffix fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <AutocompleteNormal fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="search" />
                                </>
                            }
                            suffix={
                                <>
                                    <TextButton fillMode="clear">Search</TextButton>
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
