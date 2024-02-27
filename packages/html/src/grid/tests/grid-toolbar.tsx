import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Searchbox } from '../../searchbox';
import { Grid, GridToolbar } from '../../grid';


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
                <Grid toolbar={(
                    <GridToolbar>
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button className="k-group-end" icon="underline"></Button>
                        </ButtonGroup>
                    </GridToolbar>
                )} />
            </section>
            <section>
                <Grid toolbar={(
                    <GridToolbar>
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button className="k-group-end" icon="underline"></Button>
                        </ButtonGroup>
                    </GridToolbar>
                )}
                />
            </section>


            <span>Toolbar RTL</span>
            <section>
                <Grid className="k-rtl" toolbar={(
                    <GridToolbar>
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button className="k-group-end" icon="underline"></Button>
                        </ButtonGroup>
                    </GridToolbar>
                )}/>
            </section>
            <section>
                <Grid dir="rtl" toolbar={(
                    <GridToolbar>
                        <Button>Button</Button>
                        <ButtonGroup>
                            <Button className="k-group-start" icon="bold"></Button>
                            <Button icon="italic"></Button>
                            <Button className="k-group-end" icon="underline"></Button>
                        </ButtonGroup>
                    </GridToolbar>
                )}/>
            </section>


            <span>Search</span>
            <section>
                <Grid toolbar={(
                    <GridToolbar>
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                    </GridToolbar>
                )}/>
            </section>
            <section>
                <Grid toolbar={(
                    <GridToolbar>
                        <Button>Spacer</Button>
                        <span className="k-spacer"></span>
                        <Button>Spacer</Button>
                    </GridToolbar>
                )}/>
            </section>


            <span>Search RTL</span>
            <section>
                <Grid className="k-rtl" toolbar={(
                    <GridToolbar>
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                    </GridToolbar>
                )}/>
            </section>
            <section>
                {/* Spacer with fixed width */}
                <Grid toolbar={(
                    <GridToolbar>
                        <Button>Spacer fixed width</Button>
                        <div className="k-spacer k-spacer-sized" style={{ width: "10px", flexBasis: "10px" }}></div>
                        <Button>Spacer fixed width</Button>
                    </GridToolbar>
                )}/>
            </section>

            <span>Multi-line</span>
            <section>
                <Grid toolbar={(
                    <GridToolbar>
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                        <Button icon="plus">Add new record</Button>
                        <Button icon="check">Save changes</Button>
                        <Button icon="cancel">Cancel changes</Button>
                    </GridToolbar>
                )}/>
            </section>
            <section></section>

            <span>Multiline RTL</span>
            <section>
                <Grid className="k-rtl" toolbar={(
                    <GridToolbar>
                        <Button icon="file-pdf">Export to PDF</Button>
                        <span className="k-spacer"></span>
                        <Searchbox className="k-grid-search" placeholder="Search..." />
                        <Button icon="plus">Add new record</Button>
                        <Button icon="check">Save changes</Button>
                        <Button icon="cancel">Cancel changes</Button>
                    </GridToolbar>
                )}/>
            </section>
            <section></section>


        </div>
    </>
);
