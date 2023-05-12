import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Searchbox } from '../../searchbox';
import { Toolbar } from '../../toolbar';


const styles = `
    #test-area {
        grid-template-columns: min-content 1fr 1fr;
    }
    #test-area > span {
        white-space: nowrap;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>jQuery</span>
            <span>Angular</span>


            <span>Toolbar</span>
            <section>
                <div className="k-grid k-grid-md">
                    <Toolbar className="k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>
            </section>
            <section>
                <div className="k-grid k-grid-md">
                    <Toolbar className="k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>
            </section>


            <span>Toolbar RTL</span>
            <section>
                <div className="k-grid k-grid-md k-rtl">
                    <Toolbar className="k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>
            </section>
            <section>
                <div className="k-grid k-grid-md" dir="rtl">
                    <Toolbar className="k-grid-toolbar">
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button icon="underline"></Button>
                        </ButtonGroup>
                    </Toolbar>
                </div>
            </section>


            <span>Search</span>
            <section>
                <div className="k-grid k-grid-md">
                    <Toolbar className="k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                    </Toolbar>
                </div>
            </section>
            <section>
                <div className="k-grid k-grid-md">
                    <Toolbar className="k-grid-toolbar">
                        <Button>Spacer</Button>
                        <div className="k-spacer"></div>
                        <Button>Spacer</Button>
                    </Toolbar>

                </div>
            </section>


            <span>Search RTL</span>
            <section>
                <div className="k-grid k-grid-md k-rtl">
                    <Toolbar className="k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                    </Toolbar>
                </div>
            </section>
            <section>
                {/* Spacer with fixed width */}
                <div className="k-grid k-grid-md">
                    <Toolbar className="k-grid-toolbar">
                        <Button>Spacer fixed width</Button>
                        <div className="k-spacer k-spacer-sized" style={{ width: "10px", flexBasis: "10px" }}></div>
                        <Button>Spacer fixed width</Button>
                    </Toolbar>
                </div>
            </section>

            <span>Multi-line</span>
            <section>
                <div className="k-grid k-grid-md">
                    <Toolbar className="k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                        <Button icon="plus">Add new record</Button>
                        <Button icon="check">Save changes</Button>
                        <Button icon="cancel">Cancel changes</Button>
                    </Toolbar>
                </div>
            </section>
            <section></section>

            <span>Multiline RTL</span>
            <section>
                <div className="k-grid k-grid-md k-rtl">
                    <Toolbar className="k-grid-toolbar">
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                        <Button icon="plus">Add new record</Button>
                        <Button icon="check">Save changes</Button>
                        <Button icon="cancel">Cancel changes</Button>
                    </Toolbar>
                </div>
            </section>
            <section></section>


        </div>
    </>
);
