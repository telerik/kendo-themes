import React from 'react';
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

            <span>TextBox Flat</span>
            <span>TextBox Flat RTL</span>

            <div>
                <Textbox fillMode="flat" placeholder="TextBox..." />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" placeholder="TextBox..." />
            </div>

            <div>
                <Textbox fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" value="Normal" />
            </div>

            <div>
                <Textbox fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <Textbox fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <Textbox fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <Textbox fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <Textbox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Textbox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Textbox fillMode="flat"
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
                <Textbox fillMode="flat"
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
                <Textbox fillMode="flat"
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
                <Textbox fillMode="flat"
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
