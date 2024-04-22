import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { CheckboxItem, CheckboxWithLabelAfter, CheckboxGroupNormal } from '../../checkbox';
import { Textbox } from '../../textbox';
import { EditorNormal } from '../../editor';
import { WindowNormal } from '../../window';
import { ButtonGroup } from '../../button-group';
import { FormField, FormNormal } from '../../form';
import { TabStripNormal, TabStripContent, TabStripItem } from '../..';


const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
    .k-form-label {
        align-items: flex-start !important;
    }
    /* needed for test */
    .k-editor-content > .ProseMirror {
        white-space: normal;
    }
    .k-form-horizontal .k-form-field:nth-child(3) .k-form-field-wrap {
        max-width: initial;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Find Window</span>
            <span>Replace Window</span>

            <section>
                <WindowNormal title="Find and Replace" actions={[ 'x' ]}>
                    <TabStripNormal header={false} className="k-editor-find-replace"
                        tabStripItems={
                            <>
                                <TabStripItem className="k-tab-on-top" value="Find" active />
                                <TabStripItem value="Replace" />
                            </>
                        }
                    >
                        <TabStripContent active>
                            <FormNormal formButtons={null} tag="div">
                                <FormField label="Find What:" editor={<Textbox showClearButton={false} value="editor" />} />
                                <FormField editor={
                                    <CheckboxGroupNormal className="k-search-options">
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Match case</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Match whole word only</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Match cyclic (Wrap around)</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Regular Expression</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                    </CheckboxGroupNormal>
                                } />
                                <div className="k-matches-container">
                                    <Button themeColor="primary" fillMode="flat" icon="chevron-left">Prev</Button>
                                    <span>1 of 3 matches</span>
                                    <Button themeColor="primary" fillMode="flat" icon="chevron-right">Next</Button>
                                </div>
                            </FormNormal>
                        </TabStripContent>
                    </TabStripNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal className="k-editor-window" title="Find and Replace" actions={[ 'x' ]}>
                    <TabStripNormal header={false} className="k-editor-find-replace"
                        tabStripItems={
                            <>
                                <TabStripItem value="Find" />
                                <TabStripItem className="k-tab-on-top" value="Replace" active />
                            </>
                        }
                    >
                        <TabStripContent active>
                            <FormNormal formButtons={null} tag="div">
                                <FormField label="Find What:" editor={ <Textbox showClearButton={false} value="editor" /> } />
                                <FormField label="Replace With:" editor={ <Textbox showClearButton={false} value="grid" /> } />
                                <FormField editor={
                                    <ActionButtons alignment="end">
                                        <Button>Replace</Button>
                                        <Button>Replace All</Button>
                                    </ActionButtons>
                                } />
                                <FormField editor={
                                    <CheckboxGroupNormal className="k-search-options">
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Match case</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Match whole word only</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Match cyclic (Wrap around)</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Regular Expression</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                    </CheckboxGroupNormal>
                                } />
                                <div className="k-matches-container">
                                    <Button themeColor="primary" fillMode="flat" icon="chevron-left">Prev</Button>
                                    <span>1 of 3 matches</span>
                                    <Button themeColor="primary" fillMode="flat" icon="chevron-right">Next</Button>
                                </div>
                            </FormNormal>
                        </TabStripContent>
                    </TabStripNormal>
                </WindowNormal>
            </section>


            <span>Text Highlight</span>
            <span></span>

            <section>
                <EditorNormal style={{ height: "150px" }}
                    toolbarItems={[
                        <ButtonGroup>
                            <Button className="k-group-start" icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                            <Button className="k-group-end" icon="binoculars" selected></Button>
                        </ButtonGroup>
                    ]}
                >
                    <div className="ProseMirror"><span className="k-text-selected">Word</span> and few more <span className="k-text-highlighted">word</span>s. And yet again. <span className="k-text-highlighted">Word</span>.</div>
                </EditorNormal>
            </section>
        </div>
    </>
);
