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
                <TextareaNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <TextareaNormal fillMode="solid" />
            </div>
            <div>
                <TextareaNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextareaNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state) => (
                <>
                    <div>
                        <TextareaNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <TextareaNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextareaNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TextareaNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>

            <div>
                <TextareaNormal fillMode="solid" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <TextareaNormal fillMode="solid" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>

        </div>
    </>
);
