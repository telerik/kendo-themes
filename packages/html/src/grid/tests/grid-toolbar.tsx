import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Searchbox } from '../../searchbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: min-content 1fr 1fr;
    }
    #test-area > span {
        white-space: nowrap;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>jQuery</span>
            <span>Angular</span>


            <span>Toolbar</span>
            <section>
                <div className="k-widget k-grid">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-widget k-grid">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </section>


            <span>Toolbar RTL</span>
            <section>
                <div className="k-widget k-grid k-rtl">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-widget k-grid" dir="rtl">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </section>


            <span>Search</span>
            <section>
                <div className="k-widget k-grid">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                    </div>
                </div>
            </section>
            <section>
                <div className="k-widget k-grid">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button>Spacer</Button>
                        <div className="k-spacer"></div>
                        <Button>Spacer</Button>
                    </div>

                </div>
            </section>


            <span>Search RTL</span>
            <section>
                <div className="k-widget k-grid k-rtl">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                    </div>
                </div>
            </section>
            <section>
                {/* Spacer with fixed width */}
                <div className="k-widget k-grid">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button>Spacer fixed width</Button>
                        <div className="k-spacer k-spacer-sized" style={{ width: "10px", flexBasis: "10px" }}></div>
                        <Button>Spacer fixed width</Button>
                    </div>
                </div>
            </section>

            <span>Multi-line</span>
            <section>
                <div className="k-widget k-grid">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                        <Button icon="add">Add new record</Button>
                        <Button icon="check">Save changes</Button>
                        <Button icon="cancel">Cancel changes</Button>
                    </div>
                </div>
            </section>
            <section></section>

            <span>Multiline RTL</span>
            <section>
                <div className="k-widget k-grid k-rtl">
                    <div className="k-toolbar k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                        <Button icon="add">Add new record</Button>
                        <Button icon="check">Save changes</Button>
                        <Button icon="cancel">Cancel changes</Button>
                    </div>
                </div>
            </section>
            <section></section>


        </div>
    </>
);
