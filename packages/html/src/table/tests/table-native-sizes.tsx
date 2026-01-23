import { DataTable, TableNative } from '../../table';

const styles = `
#test-area {
    max-width: 1200px;
}
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            { DataTable.options.size.map((size) => (
                <section>
                    <span>Native table {`${size}`}</span>
                    <TableNative size={size} />
                </section>
            ))}
        </div>
    </>
);
