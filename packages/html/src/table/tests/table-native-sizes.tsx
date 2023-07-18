import { DataTable, TableNative } from '../../table';

const styles = `
#test-area {
    max-width: 1200px;
}
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Native table small</span>
            <span>Native table medium</span>
            <span>Native table large</span>

            { DataTable.options.size.map((size) => (
                <TableNative size={size} />
            ))}
        </div>
    </>
);
