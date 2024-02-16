import { Button } from '../../button';
import { GridWithRowReordering, GridToolbar } from '../../grid';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <GridWithRowReordering className="k-grid-no-scrollbar" toolbar={(
                    <GridToolbar>
                        <Button className="k-toolbar-button" themeColor="primary">Add New</Button>
                    </GridToolbar>
                )}></GridWithRowReordering>
            </section>
        </div>
    </>
);
