import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area .colors {
        padding: 10px 20px;
        gap: 20px;
    }
    #test-area .colors-flat {
        background-color: rgb(234, 234, 234);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <h2>Solid Colors</h2>
            <div className="colors k-d-grid k-grid-cols-2">
                <section>
                    <span className="k-col-start-1">Primary ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Secondary ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-secondary k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Tertiary ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-tertiary k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Info ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-info k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Success ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-success k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Warning ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-warning k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Error ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-error k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Dark ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-dark k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Light ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-light k-bottom-nav-solid k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>
            </div>

            <h2>Flat Colors</h2>
            <div className="colors colors-flat k-d-grid k-grid-cols-2">
                <section>
                    <span>Primary ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Secondary ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-secondary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Tertiary ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-tertiary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Info ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-info k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Success ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-success k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Warning ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-warning k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Error ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-error k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Dark ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-dark k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>

                <section>
                    <span>Light ThemeColor</span>
                    <nav className="k-bottom-nav k-bottom-nav-light k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled</span>
                        </span>
                    </nav>
                </section>
            </div>
        </div>
    </>
);
