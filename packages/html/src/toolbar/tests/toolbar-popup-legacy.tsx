import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Button</span>
            <span>Menu button</span>
            <span>Split button</span>
            <span>Button group</span>

            <section>
                <div className="k-animation-container k-overflow-wrapper">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">Normal</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" hover>Hover</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" focus>Focus</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" active>Active</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" disabled>Disabled</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" disabled focus>Disabled focus</Button>
                        </li>
                        <li className="k-item">
                            <div className="k-separator k-separator-horizontal"></div>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item after separator</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button" disabled>MenuButton</Button>
                            <Button className="k-overflow-button" icon="plus">Normal</Button>
                            <Button className="k-overflow-button" icon="plus" hover>Hover</Button>
                            <Button className="k-overflow-button" icon="plus" focus>Focus</Button>
                            <Button className="k-overflow-button" icon="plus" active>Active</Button>
                            <Button className="k-overflow-button" icon="plus" disabled>Disabled</Button>
                            <Button className="k-overflow-button" icon="plus" disabled focus>Disabled focus</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">SplitButton</Button>
                            <Button className="k-overflow-button" icon="plus">Normal</Button>
                            <Button className="k-overflow-button" icon="plus" hover>Hover</Button>
                            <Button className="k-overflow-button" icon="plus" focus>Focus</Button>
                            <Button className="k-overflow-button" icon="plus" active>Active</Button>
                            <Button className="k-overflow-button" icon="plus" disabled>Disabled</Button>
                            <Button className="k-overflow-button" icon="plus" disabled focus>Disabled focus</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="k-animation-container k-overflow-wrapper">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-button-group k-overflow-group k-item">
                            <Button className="k-overflow-button">Normal</Button>
                            <Button className="k-overflow-button" hover>Hover</Button>
                            <Button className="k-overflow-button" focus>Focus</Button>
                            <Button className="k-overflow-button" active>Active</Button>
                            <Button className="k-overflow-button" disabled>Disabled</Button>
                            <Button className="k-overflow-button" disabled focus>Disabled focus</Button>
                        </li>
                    </ul>
                </div>
            </section>

            <span className="k-colspan-all k-col-span-full">rtl</span>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container k-overflow-wrapper">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">Normal</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" hover>Hover</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" focus>Focus</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" active>Active</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" disabled>Disabled</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" disabled focus>Disabled focus</Button>
                        </li>
                        <li className="k-item">
                            <div className="k-separator k-separator-horizontal"></div>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item after separator</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button" disabled>MenuButton</Button>
                            <Button className="k-overflow-button" icon="plus">Normal</Button>
                            <Button className="k-overflow-button" icon="plus" hover>Hover</Button>
                            <Button className="k-overflow-button" icon="plus" focus>Focus</Button>
                            <Button className="k-overflow-button" icon="plus" active>Active</Button>
                            <Button className="k-overflow-button" icon="plus" disabled>Disabled</Button>
                            <Button className="k-overflow-button" icon="plus" disabled focus>Disabled focus</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">SplitButton</Button>
                            <Button className="k-overflow-button" icon="plus">Normal</Button>
                            <Button className="k-overflow-button" icon="plus" hover>Hover</Button>
                            <Button className="k-overflow-button" icon="plus" focus>Focus</Button>
                            <Button className="k-overflow-button" icon="plus" active>Active</Button>
                            <Button className="k-overflow-button" icon="plus" disabled>Disabled</Button>
                            <Button className="k-overflow-button" icon="plus" disabled focus>Disabled focus</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container k-overflow-wrapper">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-button-group k-overflow-group k-item">
                            <Button className="k-overflow-button">Normal</Button>
                            <Button className="k-overflow-button" hover>Hover</Button>
                            <Button className="k-overflow-button" focus>Focus</Button>
                            <Button className="k-overflow-button" active>Active</Button>
                            <Button className="k-overflow-button" disabled>Disabled</Button>
                            <Button className="k-overflow-button" disabled focus>Disabled focus</Button>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    </>
);
