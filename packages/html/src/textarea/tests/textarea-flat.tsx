import { Textarea, TextareaNormal } from '../../textarea';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TextArea Flat</span>
            <span>TextArea Flat RTL</span>

            <div>
                <label htmlFor="textarea-flat-1" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-flat-1" fillMode="flat" />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-flat-rtl-1" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-flat-rtl-1" fillMode="flat" />
            </div>
            <div>
                <label htmlFor="textarea-flat-2" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-flat-2" fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-flat-rtl-2" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-flat-rtl-2" fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`textarea-flat-${index + 3}`} className="k-label">Enter text ({state})</label>
                        <TextareaNormal id={`textarea-flat-${index + 3}`} { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`textarea-flat-rtl-${index + 3}`} className="k-label">Enter text ({state})</label>
                        <TextareaNormal id={`textarea-flat-rtl-${index + 3}`} { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="textarea-flat-invalid-focus" className="k-label">Enter text (invalid focus)</label>
                <TextareaNormal id="textarea-flat-invalid-focus" value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-flat-rtl-invalid-focus" className="k-label">Enter text (invalid focus)</label>
                <TextareaNormal id="textarea-flat-rtl-invalid-focus" value="invalid focus" fillMode="flat" invalid focus />
            </div>

            <div>
                <label htmlFor="textarea-flat-long" className="k-label">Long text</label>
                <TextareaNormal id="textarea-flat-long" rows={3} fillMode="flat" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <label htmlFor="textarea-flat-long-rtl" className="k-label">Long text</label>
                <TextareaNormal id="textarea-flat-long-rtl" rows={3} fillMode="flat" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>

        </div>
    </>
);
