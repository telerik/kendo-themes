import { ListView, ListViewItem } from "../../listview";

export const ListViewSelectable = (props) => (
    <ListView selectable {...props}>
        <ListViewItem selected><div>Selected Item</div></ListViewItem>
        <ListViewItem><div>Listview Item</div></ListViewItem>
        <ListViewItem><div>Listview Item</div></ListViewItem>
        <ListViewItem><div>Listview Item</div></ListViewItem>
    </ListView>
);
