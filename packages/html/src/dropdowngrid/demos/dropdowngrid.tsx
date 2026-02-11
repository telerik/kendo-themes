import { DropdownGrid, KendoDropdownGridProps } from '../dropdowngrid.spec';
import { DropdownGridNormal } from '../templates/dropdowngrid-normal';
import { Icon } from '../../icon/icon.spec';
import { IconButton } from '../../button/templates/icon-button';
import { DataTable } from '../../table/data-table.spec';
import { TableBody } from '../../table/table-body';
import { TableFooter } from '../../table/table-footer.spec';
import { TableGroupStickyHeader } from '../../table/table-group-sticky-header';
import { TableHeader } from '../../table/table-header.spec';
import { TableList } from '../../table/table-list.spec';
import { TableListGroupRow } from '../../table/table-list-group-row';
import { TableListRow } from '../../table/table-list-row';
import { TableListTd } from '../../table/table-list-td';
import { TableListTh } from '../../table/table-list-th';
import { TableRow } from '../../table/table-row';
import { TableTh } from '../../table/table-th.spec';
import { TableThead } from '../../table/table-thead';

const states = DropdownGrid.states;
const defaults = DropdownGrid.defaultOptions;
const options = DropdownGrid.options;
const modifiers = [
  {
    name: 'prefix',
    title: 'Prefix',
  },
  {
    name: 'suffix',
    title: 'Suffix',
  },
  {
    name: 'opened',
    title: 'Opened',
  },
];
const variants = [];

export const DropdowngridDemo = (
  props: KendoDropdownGridProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoDropdownGridProps = {};

  const popup = (
    <DataTable size="medium">
      <TableHeader>
        <colgroup>
          <col style={{ width: '50px' }} />
          <col style={{ width: '160px' }} />
          <col />
        </colgroup>
        <TableThead>
          <TableRow>
            <TableTh text="ID"></TableTh>
            <TableTh text="Name"></TableTh>
            <TableTh text="Job Title"></TableTh>
          </TableRow>
        </TableThead>
      </TableHeader>
      <TableGroupStickyHeader>
        <TableListTh text="Initial group"></TableListTh>
      </TableGroupStickyHeader>
      <TableBody>
        <TableList>
          <TableListRow>
            <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
            <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
            <TableListTd text="Data 1.3"></TableListTd>
          </TableListRow>
          <TableListRow alt>
            <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
            <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
            <TableListTd text="Data 2.3"></TableListTd>
          </TableListRow>
          <TableListRow>
            <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
            <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
            <TableListTd text="Data 3.3"></TableListTd>
          </TableListRow>
          <TableListGroupRow>
            <TableListTh text="Group"></TableListTh>
          </TableListGroupRow>
          <TableListRow>
            <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
            <TableListTd text="Data 4.2" style={{ width: '160px' }}></TableListTd>
            <TableListTd text="Data 4.3"></TableListTd>
          </TableListRow>
          <TableListRow alt>
            <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
            <TableListTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableListTd>
            <TableListTd text="Data 5.3"></TableListTd>
          </TableListRow>
          <TableListRow>
            <TableListTd text="6" style={{ width: '50px' }}></TableListTd>
            <TableListTd text="Data 6.2" style={{ width: '160px' }}></TableListTd>
            <TableListTd text="Data 6.3"></TableListTd>
          </TableListRow>
        </TableList>
      </TableBody>
      <TableFooter>
        <TableListTd text="30 records in total"></TableListTd>
      </TableFooter>
    </DataTable>
  );

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <Icon icon="map-marker-target" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <IconButton size={other.size} icon="copy" fillMode="clear" /> : undefined;
        break;
      case 'opened':
        additionalProps.opened = mods?.[modifier] ? true : false;
        additionalProps.popup = mods?.[modifier] ? popup : undefined;
        break;
      default:
        break;
    }
  });

  return (
    <DropdownGridNormal value="Value" style={{ width: 300 }} {...other} {...additionalProps} />
  );
}


DropdowngridDemo.options = options;
DropdowngridDemo.states = states;
DropdowngridDemo.variants = variants;
DropdowngridDemo.defaultOptions = defaults;
DropdowngridDemo.modifiers = modifiers;

export default DropdowngridDemo;

