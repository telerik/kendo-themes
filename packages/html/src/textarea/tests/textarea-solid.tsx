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

            <span>TextArea</span>
            <span>TextArea RTL</span>

            <div>
                <label htmlFor="textarea-1" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-1" />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-rtl-1" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-rtl-1" />
            </div>
            <div>
                <label htmlFor="textarea-2" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-2" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-rtl-2" className="k-label">Enter text</label>
                <TextareaNormal id="textarea-rtl-2" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`textarea-${index + 3}`} className="k-label">Enter text ({state})</label>
                        <TextareaNormal id={`textarea-${index + 3}`} { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`textarea-rtl-${index + 3}`} className="k-label">Enter text ({state})</label>
                        <TextareaNormal id={`textarea-rtl-${index + 3}`} { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="textarea-invalid-focus" className="k-label">Enter text (invalid focus)</label>
                <TextareaNormal id="textarea-invalid-focus" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-rtl-invalid-focus" className="k-label">Enter text (invalid focus)</label>
                <TextareaNormal id="textarea-rtl-invalid-focus" value="invalid focus" invalid focus />
            </div>

            <div>
                <label htmlFor="textarea-long" className="k-label">Long text</label>
                <TextareaNormal id="textarea-long" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <label htmlFor="textarea-long-rtl" className="k-label">Long text</label>
                <TextareaNormal id="textarea-long-rtl" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>

        </div>
    </>
);
