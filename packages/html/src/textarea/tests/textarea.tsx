import { Textarea, TextareaNormal } from '..';

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
                <TextareaNormal />
            </div>
            <div dir="rtl">
                <TextareaNormal />
            </div>
            <div>
                <TextareaNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextareaNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textarea.states ].map((state) => (
                <>
                    <div>
                        <TextareaNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <TextareaNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextareaNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TextareaNormal value="invalid focus" invalid focus />
            </div>

            <div>
                <TextareaNormal rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <TextareaNormal rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>

        </div>
    </>
);
