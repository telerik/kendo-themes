import ReactDOM from 'react-dom/client';
import { Autocomplete } from '../../autocomplete';

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

            <span>Autocomplete Flat</span>
            <span>Autocomplete Flat RTL</span>

            <div>
                <Autocomplete fillMode="flat" placeholder="Autocomplete..." />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" placeholder="Autocomplete..." />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Normal"/>
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Normal" />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Autocomplete fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Autocomplete fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
