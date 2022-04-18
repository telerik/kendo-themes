import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        background-color: #f3f5f7;
    }
    .title {
        font-size: 19px;
        margin: 0;
    }
    .k-icon {
        width: 30px;
        text-align: center;
    }
    ul {
        font-size: 12px;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    li {
        margin: 0 12px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <h4>Appbar Inherit ThemeColor</h4>
                <div style={{ background: "#1976d2", color: "#fff" }}>
                    <div className="k-appbar k-appbar-inherit">
                        <div className="k-appbar-section">
                            <Icon name="menu" />
                        </div>
                        <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                        <div className="k-appbar-section">
                            <h1 className="title">Page Title</h1>
                        </div>
                        <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                        <div className="k-appbar-section">
                            <ul>
                                <li>Menu Item</li>
                                <li>Menu Item</li>
                                <li>Menu Item</li>
                            </ul>
                        </div>

                        <span className="k-spacer"></span>

                        <div className="k-appbar-section">
                            <Textbox placeholder="Search..." />
                        </div>

                        <div className="k-appbar-section">
                            <Icon name="sliders" />
                            <Icon name="bell" />
                            <span className="k-appbar-separator"></span>
                            <Icon name="user" />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <h4>Appbar Light ThemeColor</h4>
                <div className="k-appbar k-appbar-light">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>


            <section>
                <h4>Appbar Dark ThemeColor</h4>
                <div className="k-appbar k-appbar-dark">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Primary ThemeColor</h4>
                <div className="k-appbar k-appbar-primary">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Secondary ThemeColor</h4>
                <div className="k-appbar k-appbar-secondary">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Tertiary ThemeColor</h4>
                <div className="k-appbar k-appbar-tertiary">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Info ThemeColor</h4>
                <div className="k-appbar k-appbar-info">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Success ThemeColor</h4>
                <div className="k-appbar k-appbar-success">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Warning ThemeColor</h4>
                <div className="k-appbar k-appbar-warning">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Error ThemeColor</h4>
                <div className="k-appbar k-appbar-error">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Appbar Inverse ThemeColor</h4>
                <div className="k-appbar k-appbar-inverse">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>Sticky AppBar</h4>
                <div className="k-appbar k-appbar-light k-appbar-sticky">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

            <section>
                <h4>RTL AppBar</h4>
                <div className="k-appbar k-appbar-light k-rtl" dir="rtl">
                    <div className="k-appbar-section">
                        <Icon name="menu" />
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                    <div className="k-appbar-section">
                        <h1 className="title">Page Title</h1>
                    </div>
                    <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                    <div className="k-appbar-section">
                        <ul>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                            <li>Menu Item</li>
                        </ul>
                    </div>

                    <span className="k-spacer"></span>

                    <div className="k-appbar-section">
                        <Textbox placeholder="Search..." />
                    </div>

                    <div className="k-appbar-section">
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </div>
                </div>
            </section>

        </div>
    </>
);
