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

            <span>Autocomplete</span>
            <span>Autocomplete RTL</span>

            <div>
                <Autocomplete placeholder="Autocomplete..." />
            </div>
            <div dir="rtl">
                <Autocomplete placeholder="Autocomplete..." />
            </div>

            <div>
                <Autocomplete value="Normal"/>
            </div>
            <div dir="rtl">
                <Autocomplete value="Normal" />
            </div>

            <div>
                <Autocomplete value="Hover" hover />
            </div>
            <div dir="rtl">
                <Autocomplete value="Hover" hover />
            </div>

            <div>
                <Autocomplete value="Focus" focus />
            </div>
            <div dir="rtl">
                <Autocomplete value="Focus" focus />
            </div>

            <div>
                <Autocomplete value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Autocomplete value="Disabled" disabled />
            </div>

            <div>
                <Autocomplete value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Autocomplete value="Invalid" invalid />
            </div>

            <div>
                <Autocomplete value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Autocomplete value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Autocomplete value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Autocomplete value="Loading..." loading />
            </div>

        </div>
    </>
);
