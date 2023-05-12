import { Textarea } from '../../textarea';


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
                <Textarea placeholder="TextArea..." />
            </div>
            <div dir="rtl">
                <Textarea placeholder="TextArea..." />
            </div>

            <div>
                <Textarea value="Normal" />
            </div>
            <div dir="rtl">
                <Textarea value="Normal" />
            </div>

            <div>
                <Textarea value="Hover" hover />
            </div>
            <div dir="rtl">
                <Textarea value="Hover" hover />
            </div>

            <div>
                <Textarea value="Focus" focus />
            </div>
            <div dir="rtl">
                <Textarea value="Focus" focus />
            </div>

            <div>
                <Textarea value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Textarea value="Disabled" disabled />
            </div>

            <div>
                <Textarea value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Textarea value="Invalid" invalid />
            </div>

            <div>
                <Textarea value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Textarea value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Textarea rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <Textarea rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>
        </div>
    </>
);
