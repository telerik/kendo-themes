import { DataTable, TableNative } from '../../table';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            { DataTable.options.size.map((size) => (
                <section>
                    <span>Native table {`${size}`}</span>
                    <TableNative size={size} />
                </section>
            ))}
        </div>
    </>
);
