import { ImageEditor, ImageEditorPane, ImageEditorCanvas } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { ColorPicker } from "../../colorpicker";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { InputPrefixText } from "../../input";

export const ImageEditorShadow = ({
    positionX = 0,
    positionY = 0,
    blur = 0,
    spread = 0,
    color = "#000000",
    opacity = 100,
    isPristine = positionX === 0 && positionY === 0 && blur === 0 && spread === 0 && color === "#000000" && opacity === 100,
    adaptive,
    imageSrc,
    ...props
}: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Shadow"
        actionPane={
            <ImageEditorPane title="Shadow" adaptive={adaptive} confirmDisabled={isPristine} actions={
                <>
                    <Button disabled={isPristine}>Reset</Button>
                    <Button themeColor="primary" disabled={isPristine}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Position"
                        editor={
                            <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                                <NumericTextbox id="shadow-position-x" showClearButton={false} showSpinButton={false} value={String(positionX)} prefix={<InputPrefixText>X</InputPrefixText>} aria-label="Position X" />
                                <NumericTextbox id="shadow-position-y" showClearButton={false} showSpinButton={false} value={String(positionY)} prefix={<InputPrefixText>Y</InputPrefixText>} aria-label="Position Y" />
                            </Fieldset>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Blur"
                            editorId="shadow-blur"
                            editor={ <NumericTextbox id="shadow-blur" showClearButton={false} showSpinButton={false} value={String(blur)} prefix={<Icon icon="blur" />} /> }
                        />
                        <FormField
                            label="Spread"
                            editorId="shadow-spread"
                            editor={ <NumericTextbox id="shadow-spread" showClearButton={false} showSpinButton={false} value={String(spread)} prefix={<Icon icon="brightness-contrast" />} /> }
                        />
                    </Fieldset>
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Color"
                            editor={ <ColorPicker id="shadow-color" value={color} aria-label="Color" /> }
                        />
                        <FormField
                            label="Opacity"
                            editorId="shadow-opacity"
                            editor={ <NumericTextbox id="shadow-opacity" showClearButton={false} showSpinButton={false} value={`${opacity}%`} prefix={<Icon icon="transparency" />} /> }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <ImageEditorCanvas adaptive={adaptive} imageSrc={imageSrc} style={{
                boxShadow: `${positionX}px ${positionY}px ${blur}px ${spread}px color-mix(in srgb, ${color} ${opacity}%, transparent)`
            }} />
        }
        {...props} />
);
