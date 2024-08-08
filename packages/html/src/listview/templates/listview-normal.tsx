import { ListView, ListViewItem } from '../../listview';

export const ListViewNormal = (props) => (
    <ListView children={
        <>
            <ListViewItem><div>Listview Item</div></ListViewItem>
            <ListViewItem><div>Listview Item</div></ListViewItem>
            <ListViewItem><div>Listview Item</div></ListViewItem>
        </>
    }
    {...props}>
    </ListView>
);

export default ListViewNormal;
