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
                <TextareaNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextareaNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state) => (
                <>
                    <div>
                        <TextareaNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <TextareaNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextareaNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <TextareaNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>

            <div>
                <TextareaNormal value="valid focus" fillMode="flat" valid focus />
            </div>
            <div dir="rtl">
                <TextareaNormal value="valid focus" fillMode="flat" valid focus />
            </div>

            <div>
                <TextareaNormal rows={3} fillMode="flat" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <TextareaNormal rows={3} fillMode="flat" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>

        </div>
    </>
);
