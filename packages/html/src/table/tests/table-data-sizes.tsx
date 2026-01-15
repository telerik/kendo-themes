import { DataTable, DataTableNormal } from '../../table';


const style = `
    #test-area {
        max-width: 1200px;
    }
    .k-data-table {
        width: 280px;
    }
    .k-table-scroller {
        max-height: 200px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Data table undefined</span>
            <span>Data table small</span>
            <span>Data table medium</span>
            <span>Data table large</span>

            { DataTable.options.size.map((size) => (
                <DataTableNormal size={size} />
            ))}
        </div>
    </>
);
