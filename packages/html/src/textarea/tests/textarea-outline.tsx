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

            <span>TextArea Flat</span>
            <span>TextArea Flat RTL</span>

            <div>
                <Textarea fillMode="outline" placeholder="TextArea..." />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" placeholder="TextArea..." />
            </div>

            <div>
                <Textarea fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" value="Normal" />
            </div>

            <div>
                <Textarea fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <Textarea fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <Textarea fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <Textarea fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <Textarea fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Textarea fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Textarea fillMode="outline" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <Textarea fillMode="outline" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>
        </div>
    </>
);
