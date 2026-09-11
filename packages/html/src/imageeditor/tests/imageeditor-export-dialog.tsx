import { ImageEditor } from '..';
import { Button } from '../../button';
import { Dialog } from '../../dialog';
import { Form, FormField, FormHint } from '../../form';
import { Textbox } from '../../textbox';
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from '../../radio';

const styles = `
    .k-dialog-wrapper {
        position: absolute;
    }
    .k-overlay {
        position: absolute;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Export Dialog</h4>

            <div className="k-pos-relative">
                <ImageEditor contentHeight="482px">
                    <canvas
                        width="860"
                        height="430"
                        role="img"
                        aria-label="Image being edited"
                        style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}
                    ></canvas>
                </ImageEditor>

                <Dialog
                    title="Export Image"
                    actions={[ 'x' ]}
                    actionButtonsAlign="end"
                    style={{ width: "520px" }}
                    actionButtons={
                        <>
                            <Button>Cancel</Button>
                            <Button themeColor="primary">Export</Button>
                        </>
                    }
                >
                    <div className="k-d-flex k-gap-6">
                        <div>
                            <img
                                src="/packages/html/assets/sofia.jpg"
                                alt=""
                                style={{ width: "144px", height: "144px", objectFit: "cover", borderRadius: "4px" }}
                                className="k-border k-border-solid k-border-secondary"
                            />
                            <FormHint>Size: 12.34 MB</FormHint>
                        </div>
                        <Form tag="div" style={{ flex: "1" }}>
                            <FormField
                                label="File Name"
                                editorId="export-file-name"
                                editor={ <Textbox id="export-file-name" showClearButton={false} value="sofia" /> }
                            />
                            <FormField
                                label="File Format"
                                editor={
                                    <RadioGroup layout="horizontal">
                                        <RadioItem>
                                            <RadioButtonWithLabelAfter id="export-format-jpeg" name="export-format" checked>JPEG</RadioButtonWithLabelAfter>
                                        </RadioItem>
                                        <RadioItem>
                                            <RadioButtonWithLabelAfter id="export-format-png" name="export-format">PNG</RadioButtonWithLabelAfter>
                                        </RadioItem>
                                        <RadioItem>
                                            <RadioButtonWithLabelAfter id="export-format-webp" name="export-format">WebP</RadioButtonWithLabelAfter>
                                        </RadioItem>
                                    </RadioGroup>
                                }
                            />
                        </Form>
                    </div>
                </Dialog>
            </div>

        </div>
    </>
);
