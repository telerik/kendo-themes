import { Button } from '../../button/button.spec';
import { GridWithRowReordering } from '../templates/grid-with-row-reordering';
import { GridToolbar } from '../grid-toolbar.spec';


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
