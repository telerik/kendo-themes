import ReactDOM from 'react-dom/client';
import { MaskedTextbox } from '../../maskedtextbox';

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
            <span>MaskedTextBox</span>
            <span>MaskedTextBox RTL</span>

            <div>
                <MaskedTextbox placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextbox placeholder="(___) ___-__-__-__" />
            </div>

            <div>
                <MaskedTextbox value="Normal" />
            </div>
            <div dir="rtl">
                <MaskedTextbox value="Normal" />
            </div>

            <div>
                <MaskedTextbox value="Hover" hover />
            </div>
            <div dir="rtl">
                <MaskedTextbox value="Hover" hover />
            </div>

            <div>
                <MaskedTextbox value="Focus" focus />
            </div>
            <div dir="rtl">
                <MaskedTextbox value="Focus" focus />
            </div>

            <div>
                <MaskedTextbox value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <MaskedTextbox value="Disabled" disabled />
            </div>

            <div>
                <MaskedTextbox value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <MaskedTextbox value="Invalid" invalid />
            </div>

            <div>
                <MaskedTextbox value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextbox value="Invalid Focus" invalid focus />
            </div>
        </div>
    </>
);
