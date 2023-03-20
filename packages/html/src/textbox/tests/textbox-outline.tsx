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

            <span>TextBox Outline</span>
            <span>TextBox Outline RTL</span>

            <div>
                <Textbox fillMode="outline" placeholder="TextBox..." />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" placeholder="TextBox..." />
            </div>

            <div>
                <Textbox fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" value="Normal" />
            </div>

            <div>
                <Textbox fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <Textbox fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <Textbox fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <Textbox fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <Textbox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Textbox fillMode="outline"
                    placeholder="Prefix..."
                    prefix={
                        <>
                            <Icon name="menu" />
                            <Button fillMode="clear" icon="calendar"></Button>
                            <span className="k-input-separator"></span>
                        </>
                    }
                />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline"
                    placeholder="Prefix..."
                    prefix={
                        <>
                            <Icon name="menu" />
                            <Button fillMode="clear" icon="calendar"></Button>
                            <span className="k-input-separator"></span>
                        </>
                    }
                />
            </div>

            <div>
                <Textbox fillMode="outline"
                    placeholder="Suffix..."
                    suffix={
                        <>
                            <span className="k-input-separator"></span>
                            <Button fillMode="clear" icon="calendar"></Button>
                            <Icon name="bell" />
                        </>
                    }
                />
            </div>
            <div dir="rtl">
                <Textbox fillMode="outline"
                    placeholder="Suffix..."
                    suffix={
                        <>
                            <span className="k-input-separator"></span>
                            <Button fillMode="clear" icon="calendar"></Button>
                            <Icon name="bell" />
                        </>
                    }
                />
            </div>

        </div>
    </>
);
