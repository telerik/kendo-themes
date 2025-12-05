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
                <label htmlFor="textarea-outline-1" className="k-label">Enter text</label>
                <Textarea id="textarea-outline-1" fillMode="outline" />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-outline-rtl-1" className="k-label">Enter text</label>
                <Textarea id="textarea-outline-rtl-1" fillMode="outline" />
            </div>
            <div>
                <label htmlFor="textarea-outline-2" className="k-label">Enter text</label>
                <Textarea id="textarea-outline-2" fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-outline-rtl-2" className="k-label">Enter text</label>
                <Textarea id="textarea-outline-rtl-2" fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`textarea-outline-${index + 3}`} className="k-label">Enter text ({state})</label>
                        <TextareaNormal id={`textarea-outline-${index + 3}`} { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`textarea-outline-rtl-${index + 3}`} className="k-label">Enter text ({state})</label>
                        <TextareaNormal id={`textarea-outline-rtl-${index + 3}`} { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="textarea-outline-invalid-focus" className="k-label">Enter text (invalid focus)</label>
                <TextareaNormal id="textarea-outline-invalid-focus" value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="textarea-outline-rtl-invalid-focus" className="k-label">Enter text (invalid focus)</label>
                <TextareaNormal id="textarea-outline-rtl-invalid-focus" value="invalid focus" fillMode="outline" invalid focus />
            </div>

            <div>
                <label htmlFor="textarea-outline-long" className="k-label">Long text</label>
                <TextareaNormal id="textarea-outline-long" rows={3} fillMode="outline" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <label htmlFor="textarea-outline-long-rtl" className="k-label">Long text</label>
                <TextareaNormal id="textarea-outline-long-rtl" rows={3} fillMode="outline" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>
        </div>
    </>
);
