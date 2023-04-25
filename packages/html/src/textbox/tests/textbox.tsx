import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { Button } from '../../button';
import { Textbox } from '../../textbox';

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

            <span>TextBox</span>
            <span>TextBox RTL</span>

            <div>
                <Textbox placeholder="TextBox..." />
            </div>
            <div dir="rtl">
                <Textbox placeholder="TextBox..." />
            </div>

            <div>
                <Textbox value="Normal" />
            </div>
            <div dir="rtl">
                <Textbox value="Normal" />
            </div>

            <div>
                <Textbox value="Hover" hover />
            </div>
            <div dir="rtl">
                <Textbox value="Hover" hover />
            </div>

            <div>
                <Textbox value="Focus" focus />
            </div>
            <div dir="rtl">
                <Textbox value="Focus" focus />
            </div>

            <div>
                <Textbox value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Textbox value="Disabled" disabled />
            </div>

            <div>
                <Textbox value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Textbox value="Invalid" invalid />
            </div>

            <div>
                <Textbox value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Textbox value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Textbox
                    placeholder="Prefix..."
                    prefix={
                        <>
                            <Icon icon="menu" />
                            <Button fillMode="clear" icon="calendar"></Button>
                            <span className="k-input-separator"></span>
                        </>
                    }
                />
            </div>
            <div dir="rtl">
                <Textbox
                    placeholder="Prefix..."
                    prefix={
                        <>
                            <Icon icon="menu" />
                            <Button fillMode="clear" icon="calendar"></Button>
                            <span className="k-input-separator"></span>
                        </>
                    }
                />
            </div>

            <div>
                <Textbox
                    placeholder="Suffix..."
                    suffix={
                        <>
                            <span className="k-input-separator"></span>
                            <Button fillMode="clear" icon="calendar"></Button>
                            <Icon icon="bell" />
                        </>
                    }
                />
            </div>
            <div dir="rtl">
                <Textbox
                    placeholder="Suffix..."
                    suffix={
                        <>
                            <span className="k-input-separator"></span>
                            <Button fillMode="clear" icon="calendar"></Button>
                            <Icon icon="bell" />
                        </>
                    }
                />
            </div>

        </div>
    </>
);
