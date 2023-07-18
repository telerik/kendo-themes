import { DataTable, DataTableList } from '../../table';


const style = `
    #test-area {
        max-width: 1200px;
    }
    .k-data-table {
        width: 372px;
    }
    .k-table-scroller {
        max-height: 200px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Table list small</span>
            <span>Table list medium</span>
            <span>Table list large</span>

            { DataTable.options.size.map((size) => (
                <DataTableList size={size} />
            ))}
        </div>
    </>
);
