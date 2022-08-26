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
                    <h4>Primary ThemeColor</h4>
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
                    <h4>Secondary ThemeColor</h4>
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
                    <h4>Tertiary ThemeColor</h4>
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
                    <h4>Info ThemeColor</h4>
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
                    <h4>Success ThemeColor</h4>
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
                    <h4>Warning ThemeColor</h4>
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
                    <h4>Error ThemeColor</h4>
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
                    <h4>Dark ThemeColor</h4>
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
                    <h4>Light ThemeColor</h4>
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
                    <h4>Primary ThemeColor</h4>
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
                    <h4>Secondary ThemeColor</h4>
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
                    <h4>Tertiary ThemeColor</h4>
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
                    <h4>Info ThemeColor</h4>
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
                    <h4>Success ThemeColor</h4>
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
                    <h4>Warning ThemeColor</h4>
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
                    <h4>Error ThemeColor</h4>
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
                    <h4>Dark ThemeColor</h4>
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
                    <h4>Light ThemeColor</h4>
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
