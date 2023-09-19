import { ListView, ListViewNormal, ListViewItem } from '../../listview';

const styles = `
    .k-listview-header,
    .k-listview-footer,
    .k-listview-item {
        padding: 5px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            {[ 'normal', ...ListView.states ].map((state) => (
                <>
                    <div>{state}</div>
                    <ListViewNormal
                        header
                        footer
                        pageable
                        { ...{ [ state ]: true } }
                        layout="flex"
                        flexDirection="col">
                        <ListViewItem><div>Listview Item</div></ListViewItem>
                        <ListViewItem><div>Listview Item</div></ListViewItem>
                    </ListViewNormal>
                </>
            ))}

        </div>
    </>
);
