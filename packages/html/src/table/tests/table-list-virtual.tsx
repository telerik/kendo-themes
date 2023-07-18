import { DataTableVirtualization } from '../../table';

const style = `
    #test-area {
        max-width: 1200px;
    }
    .k-data-table {
        width: 372px;
    }
    .k-table-scroller {
        height: 200px;
    }
    .k-virtual-table .k-table-row {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Table list virtual</span>

            <section>
                <DataTableVirtualization />
            </section>
        </div>
    </>
);
