import { ListView, ListViewItem } from '../../listview';
import { NoData } from '../../nodata';

export const ListViewNoData = (props) => {
    const { selectable, contentAriaLabel, ...other } = props;
    return (
        <ListView selectable={selectable} contentAriaLabel={selectable ? (contentAriaLabel || 'List') : contentAriaLabel} {...other}>
            <ListViewItem itemRole={selectable ? 'option' : 'listitem'} ariaSetSize={1} ariaPosInSet={1} tabIndex={0}>
                <NoData live>No data available.</NoData>
            </ListViewItem>
        </ListView>
    );
};
