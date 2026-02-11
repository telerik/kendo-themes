import { PromptBoxLineModeSingle } from '../templates/prompt-box-single';
import { PromptBoxLineModeMulti } from '../templates/prompt-box-multi';
import { PromptBoxLineModeAuto } from '../templates/prompt-box-auto';
import { PromptBoxLineModeAutoExpanded } from '../templates/prompt-box-auto-expandend';

import { Button } from '../../button/button.spec';
import { IconButton } from '../../button/templates/icon-button';
import { Icon } from '../../icon/icon.spec';

const styles = ``;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>lineMode - auto (Default)</span>
            <span>lineMode - auto + expanded</span>
            <span>lineMode - single</span>
            <span>lineMode - multi</span>


            <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    startAffix={<>
                        <Icon icon="plus"/>
                    </>}
                    endAffix={<>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>
            <div>
                <PromptBoxLineModeAutoExpanded
                    placeholder="Type a message"
                    endAffix={<>
                        <Icon icon="plus"/>
                        <div className="k-spacer"></div>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>
            <div>
                <PromptBoxLineModeSingle
                    placeholder="Type a message"
                    startAffix={<>
                        <Icon icon="plus"/>
                    </>}
                    endAffix={<>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>
             <div>
                <PromptBoxLineModeMulti
                    placeholder="Type a message"
                    startAffix={<>
                        <Icon icon="plus"/>
                    </>}
                    endAffix={<>
                        <Icon icon="plus"/>
                        <div className="k-spacer"></div>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>

            <span>lineMode - auto (Default) - affixes and header</span>
            <span>lineMode - auto + expanded - affixes and header</span>
            <span>lineMode - single - affixes and header</span>
            <span>lineMode - multi - affixes and header</span>


             <div>
                <PromptBoxLineModeAuto
                    placeholder="Type a message"
                    header={<>
                    <Button>Button in header</Button>
                    </>}
                    startAffix={<>
                        <Icon icon="plus"/>
                    </>}
                    endAffix={<>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>
             <div>
                <PromptBoxLineModeAutoExpanded
                    placeholder="Type a message"
                    header={<>
                    <Button>Button in header</Button>
                    </>}
                    endAffix={<>
                        <Icon icon="plus"/>
                        <div className="k-spacer"></div>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>
            <div>
                <PromptBoxLineModeSingle
                    placeholder="Type a message"
                    header={<>
                    <Button>Button in header</Button>
                    </>}
                    startAffix={<>
                        <Icon icon="plus"/>
                    </>}
                    endAffix={<>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>
             <div>
                <PromptBoxLineModeMulti
                    placeholder="Type a message"
                    header={<>
                    <Button>Button in header</Button>
                    </>}
                    startAffix={<>
                        <Icon icon="plus"/>
                    </>}
                    endAffix={<>
                        <Icon icon="plus"/>
                        <span className="k-spacer"></span>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                    </>}
                />
            </div>


        </div>
    </>
);
