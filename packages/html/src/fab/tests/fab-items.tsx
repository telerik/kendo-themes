import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { FloatingActionButton } from '../../fab';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 150px repeat(3, 1fr);
        grid-template-rows: 30px repeat(5, 320px)
    }
    .relative-container {
        position: relative;
        border: 1px solid #ccc;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <span>Downward - Left Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="top-end" style={{ top: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 36px)", right: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-sm k-fab-items-bottom">
                        <li className="k-fab-item k-text-right">
                            <span className="k-fab-item-text">Normal</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-disabled">
                            <span className="k-fab-item-text">Disabled</span>
                            <Icon className="k-fab-item-icon" name="cancel" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="top-end" style={{ top: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 52px)", right: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-md k-fab-items-bottom">
                        <li className="k-fab-item k-text-right k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-disabled k-focus">
                            <span className="k-fab-item-text">Disabled & Focus</span>
                            <Icon className="k-fab-item-icon" name="cancel" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="top-end" style={{ top: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 68px)", right: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-lg k-fab-items-bottom">
                        <li className="k-fab-item k-text-right k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-disabled">
                            <span className="k-fab-item-text">Disabled</span>
                            <Icon className="k-fab-item-icon" name="cancel" />
                        </li>
                    </ul>
                </div>
            </span>

            <span>Downward - Right Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="top-start" style={{ top: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 36px)", left: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-bottom">
                        <li className="k-fab-item k-text-left k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="top-start" style={{ top: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 52px)", left: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-bottom">
                        <li className="k-fab-item k-text-left k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="top-start" style={{ top: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 68px)", left: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-bottom">
                        <li className="k-fab-item k-text-left k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>

            <span>Upward - Left Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 36px)", right: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-top">
                        <li className="k-fab-item k-text-right k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 52px)", right: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-top">
                        <li className="k-fab-item k-text-right k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 68px)", right: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-top">
                        <li className="k-fab-item k-text-right k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-right k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>

            <span>Upward - Right Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 36px)", left: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-top">
                        <li className="k-fab-item k-text-left k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 52px)", left: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-top">
                        <li className="k-fab-item k-text-left k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 68px)", left: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <ul className="k-fab-items k-fab-items-top">
                        <li className="k-fab-item k-text-left k-hover">
                            <span className="k-fab-item-text">Hover long text</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-focus">
                            <span className="k-fab-item-text">Focus</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                        <li className="k-fab-item k-text-left k-active">
                            <span className="k-fab-item-text">Active</span>
                            <Icon className="k-fab-item-icon" name="pencil" />
                        </li>
                    </ul>
                </div>
            </span>
            <span>Angular rendering</span>
            <span className="relative-container">
                <span className="k-pos-absolute k-bottom-start" style={{ bottom: "16px", left: "16px" }}>
                    <FloatingActionButton icon="plus" size="small" />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "36px", left: "calc(calc(36px/2) - calc(36px/2))" }}>
                        <ul className="k-fab-items k-fab-items-top" >
                            <li className="k-fab-item k-text-left k-hover">
                                <span className="k-fab-item-text">Hover long text</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                            <li className="k-fab-item k-text-left k-focus">
                                <span className="k-fab-item-text">Focus</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                            <li className="k-fab-item k-text-left k-active">
                                <span className="k-fab-item-text">Active</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                        </ul>
                    </div>
                </span>
            </span>
            <span className="relative-container">
                <span className="k-pos-absolute k-bottom-start" style={{ bottom: "16px", left: "16px" }}>
                    <FloatingActionButton icon="plus" size="medium" />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "52px", left: "calc(calc(52px/2) - calc(36px/2))" }}>
                        <ul className="k-fab-items k-fab-items-top" >
                            <li className="k-fab-item k-text-left k-hover">
                                <span className="k-fab-item-text">Hover long text</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                            <li className="k-fab-item k-text-left k-focus">
                                <span className="k-fab-item-text">Focus</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                            <li className="k-fab-item k-text-left k-active">
                                <span className="k-fab-item-text">Active</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                        </ul>
                    </div>
                </span>
            </span>
            <span className="relative-container">
                <span className="k-pos-absolute k-bottom-start" style={{ bottom: "16px", left: "16px" }}>
                    <FloatingActionButton icon="plus" size="large" />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "68px", left: "calc(calc(68px/2) - calc(36px/2))" }}>
                        <ul className="k-fab-items k-fab-items-top" >
                            <li className="k-fab-item k-text-left k-hover">
                                <span className="k-fab-item-text">Hover long text</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                            <li className="k-fab-item k-text-left k-focus">
                                <span className="k-fab-item-text">Focus</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                            <li className="k-fab-item k-text-left k-active">
                                <span className="k-fab-item-text">Active</span>
                                <Icon className="k-fab-item-icon" name="pencil" />
                            </li>
                        </ul>
                    </div>
                </span>
            </span>
        </div>
    </>
);
