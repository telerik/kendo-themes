import { Label } from '..';
import { TextboxNormal } from '../../textbox';

const styles = `
    #test-area {
        max-width: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Label</span>
            <span>Label RTL</span>
            <div>
                <Label>Label</Label>
            </div>
            <div dir="rtl">
                <Label>Label</Label>
            </div>

            <div>
                <Label optional>Optional label</Label>
            </div>
            <div dir="rtl">
                <Label optional>Optional label</Label>
            </div>

            <div>
                <Label info="(field info)">Label with info</Label>
            </div>
            <div dir="rtl">
                <Label info="(field info)">Label with info</Label>
            </div>
            {Label.states.map((state) => (
                <>
                    <div>
                        <Label optional { ...{ [state]: true }}>Label {state}</Label>
                    </div>
                    <div dir="rtl">
                        <Label optional { ...{ [state]: true }}>Label {state}</Label>
                    </div>
                </>
            ))}
            <div className="label-field">
                <Label optional>Label</Label>
                <TextboxNormal placeholder="Placeholder" />
            </div>
            <div className="label-field" dir="rtl">
                <Label optional>Label</Label>
                <TextboxNormal placeholder="Placeholder" />
            </div>
        </div>
    </>
);
