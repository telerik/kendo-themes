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
                <Textarea fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state) => (
                <>
                    <div>
                        <TextareaNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <TextareaNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextareaNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <TextareaNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>

            <div>
                <TextareaNormal value="valid focus" fillMode="outline" valid focus />
            </div>
            <div dir="rtl">
                <TextareaNormal value="valid focus" fillMode="outline" valid focus />
            </div>

            <div>
                <TextareaNormal rows={3} fillMode="outline" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <TextareaNormal rows={3} fillMode="outline" value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>
        </div>
    </>
);
