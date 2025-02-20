import { FloatingLabelNormal } from '..';
import { TextButton } from '../../button';
import { Icon } from '../../icon';
import { TextboxNormal } from '../../textbox';

const styles = `
    #test-area {
        width: 800px;
    }
    .k-floating-label-container {
        width: 100%;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <b className='k-col-span-3'>Input - Empty</b>

            label outside
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="outside" label="Solid">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="outside" label="Outline">
                    <TextboxNormal fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="outside" label="Flat">
                    <TextboxNormal fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            label border
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="border" label="Solid">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="border" label="Outline">
                    <TextboxNormal fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="border" label="Flat">
                    <TextboxNormal fillMode="flat" />
                </FloatingLabelNormal>
            </div>


            label inside
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="within" label="Solid">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="within" label="Outline">
                    <TextboxNormal fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="within" label="Flat">
                    <TextboxNormal fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <b className='k-col-span-3 k-pt-16'>Input - Value </b>


            label outside
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="outside" empty={false} label="Solid">
                    <TextboxNormal focus value="Value" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="outside" empty={false} label="Outline">
                    <TextboxNormal focus value="Value" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="outside" empty={false} label="Flat">
                    <TextboxNormal focus value="Value" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            label border
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="border" empty={false} label="Solid">
                    <TextboxNormal focus value="Value" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="border" empty={false} label="Outline">
                    <TextboxNormal focus value="Value" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="border" empty={false} label="Flat">
                    <TextboxNormal focus value="Value" fillMode="flat" />
                </FloatingLabelNormal>
            </div>


            label inside
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="within" empty={false} label="Solid">
                    <TextboxNormal focus value="Value" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="within" empty={false} label="Outline">
                    <TextboxNormal focus value="Value" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="within" empty={false} label="Flat">
                    <TextboxNormal focus value="Value" fillMode="flat" />
                </FloatingLabelNormal>
            </div>


            <b className='k-col-span-3 k-pt-16'>Input - Adornments</b>


            label outside
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="outside" empty={false} label="Solid">
                    <TextboxNormal focus value="Value"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="outside" empty={false} label="Outline">
                    <TextboxNormal focus value="Value" fillMode="outline"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="outside" empty={false} label="Flat">
                    <TextboxNormal focus value="Value" fillMode="flat"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>

            label border
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="border" empty={false} label="Solid">
                    <TextboxNormal focus value="Value"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="border" empty={false} label="Outline">
                    <TextboxNormal focus value="Value" fillMode="outline"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="border" empty={false} label="Flat">
                    <TextboxNormal focus value="Value" fillMode="flat"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>


            label inside
            <span></span>
            <span></span>
            <div>
                <FloatingLabelNormal labelPosition="within" empty={false} label="Solid">
                    <TextboxNormal focus value="Value"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="within" empty={false} label="Outline">
                    <TextboxNormal focus value="Value" fillMode="outline"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal labelPosition="within" empty={false} label="Flat">
                    <TextboxNormal focus value="Value" fillMode="flat"
                        prefix={
                            <>
                                <Icon icon="envelop" />
                            </>
                        }
                        suffix={
                            <>
                                <TextButton fillMode="clear">Send</TextButton>
                            </>
                        } />
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
