import ReactDOM from 'react-dom/client';
import { Textarea } from '../../textarea';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TextArea Flat</span>
            <span>TextArea Flat RTL</span>

            <div>
                <Textarea fillMode="flat" placeholder="TextArea..." />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" placeholder="TextArea..." />
            </div>

            <div>
                <Textarea fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" value="Normal" />
            </div>

            <div>
                <Textarea fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <Textarea fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <Textarea fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <Textarea fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <Textarea fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Textarea fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Textarea fillMode="flat" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."'/>
            </div>
            <div>
                <Textarea fillMode="flat" rows={3} value='Long text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum, illo asperiores alias cum facere illum qui sapiente possimus consectetur magnam aperiam eveniet esse molestias aut repudiandae sit aliquam perspiciatis."' />
            </div>
        </div>
    </>
);
