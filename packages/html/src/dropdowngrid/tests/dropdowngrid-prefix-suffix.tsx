import { DropdownGrid, DropdownGridPrefix, DropdownGridSuffix, DropdownGridNormal } from '..';
import { IconButton } from '../../button';
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

            {DropdownGrid.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-col-span-full k-text-center">{`${fillMode}`}</span>

                    <span>normal</span>
                    <div>
                        <DropdownGridPrefix ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div>
                        <DropdownGridSuffix ariaLabel="DropdownGrid" fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="map-marker-target" />
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="copy" fillMode="clear"/>
                                </>
                            }
                        />
                    </div>

                    <span>disabled</span>
                    <div>
                        <DropdownGridPrefix ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix" disabled/>
                    </div>

                    <div>
                        <DropdownGridSuffix ariaLabel="DropdownGrid" fillMode={fillMode} value="Suffix" disabled/>
                    </div>

                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix & Suffix" disabled
                            prefix={
                                <>
                                    <Icon icon="map-marker-target" />
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="copy" fillMode="clear"/>
                                </>
                            }
                        />
                    </div>

                    <span>validation</span>
                    <div>
                        <DropdownGridPrefix ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix" invalid/>
                    </div>

                    <div>
                        <DropdownGridSuffix ariaLabel="DropdownGrid" fillMode={fillMode} value="Suffix" invalid/>
                    </div>

                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix & Suffix" invalid
                            prefix={
                                <>
                                    <Icon icon="map-marker-target" />
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="copy" fillMode="clear"/>
                                </>
                            }
                        />
                    </div>

                    <span>RTL</span>
                    <div dir="rtl">
                        <DropdownGridPrefix ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix"/>
                    </div>

                    <div dir="rtl">
                        <DropdownGridSuffix ariaLabel="DropdownGrid" fillMode={fillMode} value="Suffix"/>
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal ariaLabel="DropdownGrid" fillMode={fillMode} value="Prefix & Suffix"
                            prefix={
                                <>
                                    <Icon icon="map-marker-target" />
                                </>
                            }
                            suffix={
                                <>
                                    <IconButton icon="copy" fillMode="clear"/>
                                </>
                            }
                        />
                    </div>
                </>
            ))}
        </div>
    </>
);
