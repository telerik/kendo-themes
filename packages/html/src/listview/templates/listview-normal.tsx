import { ListView } from '../../listview/listview.spec';
import { ListViewItem } from '../../listview/listview-item.spec';

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
