import { Grid, KendoGridProps } from '../grid.spec';
import { GridToolbar } from '../grid-toolbar.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridTable } from '../grid-table.spec';
import { TableRow, TableTbody, TableTd, TableThead } from '../../table';
import { GridGroupingHeader } from '../grid-grouping-header.spec';
import { GridWithEditRow } from '../templates/grid-with-edit-row';
import { GridWithGrouping } from '../templates/grid-with-grouping';
import { GridWithMultiColumnHeaders } from '../templates/grid-with-multicolumn-headers';
import { Button } from '../../button';
import { Pager } from '../../pager';
import { Textbox } from '../../textbox';
import { Icon } from '../../icon';
import { Chip, ChipAction, ChipList } from '../../chip';
import { GridWithFilterRow } from '../templates/grid-with-filter-row';

const options = Grid.options;
const states = Grid.states;
const defaults = { ...Grid.defaultOptions, variant: 'normal' };
const variants = [
  {
    name: 'normal',
    title: 'Normal',
  },
  {
    name: 'column-menu',
    title: 'Column Menu',
  },
  {
    name: 'filter-menu',
    title: 'Filter Menu',
  },
  {
    name: 'filter-row',
    title: 'Filter Row',
  },
  {
    name: 'row-reordering',
    title: 'Row Reordering',
  },
  {
    name: 'multicolumn-headers',
    title: 'Multicolumn Headers',
  },
  {
    name: 'grouping',
    title: 'Grouping',
  },
  {
    name: 'editing',
    title: 'Editing',
  },
];

const modifiers = [
  {
    name: 'toolbar',
    title: 'Toolbar',
    type: 'boolean',
  },
  {
    name: 'pager',
    title: 'Pager',
    type: 'boolean',
  },
];

export const GridDemo = (
  props: KendoGridProps & { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }) => {

  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

  let additionalProps: any = {
    toolbar: undefined,
    pager: undefined
  };

  const defaultToolbar = (
    <GridToolbar>
      <Button icon="plus">Add New</Button>
      <Button icon="file-pdf">Export to PDF</Button>
      <span className="k-spacer"></span>
      <Textbox prefix={<Icon icon='search' />} separators={false} placeholder='Search...' />
    </GridToolbar>
  )
  const defaultPager = (
    <Pager pageSizes={false} refresh={false} />
  )

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'toolbar': {
        additionalProps.toolbar = mods?.[modifier] ? defaultToolbar : undefined;
      }
        break;
      case 'pager': {
        additionalProps.pager = mods?.[modifier] ? defaultPager : undefined;
      }
        break;
      default:
        return;
    }
  });

  const variants: any = {
    "column-menu": { menu: "column" },
    "filter-menu": { menu: "filter" },
    "filter-row": {},
  };

  const defaultGridContent = (
    <>
      <GridHeader>
        <div className="k-grid-header-wrap">
          <GridHeaderTable>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <TableThead>
              <TableRow>
                <GridHeaderCell {...variants[variant]} columnTitle="ID"></GridHeaderCell>
                <GridHeaderCell {...variants[variant]} columnTitle="Product Name"></GridHeaderCell>
                <GridHeaderCell {...variants[variant]} columnTitle="Units in Stock"></GridHeaderCell>
                <GridHeaderCell {...variants[variant]} columnTitle="Units Price"></GridHeaderCell>
              </TableRow>
            </TableThead>
          </GridHeaderTable>
        </div>
      </GridHeader>
      <GridContainer>
        <GridContent>
          <GridTable>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <TableTbody>
              <TableRow>
                <TableTd>1</TableTd>
                <TableTd>Chai</TableTd>
                <TableTd>39</TableTd>
                <TableTd>18</TableTd>
              </TableRow>
              <TableRow alt>
                <TableTd>2</TableTd>
                <TableTd>Chang</TableTd>
                <TableTd>17</TableTd>
                <TableTd>19</TableTd>
              </TableRow>
              <TableRow>
                <TableTd>3</TableTd>
                <TableTd>Aniseed Syrup</TableTd>
                <TableTd>13</TableTd>
                <TableTd>10</TableTd>
              </TableRow>
              <TableRow alt>
                <TableTd>4</TableTd>
                <TableTd>Chef Anton&apos;s Cajun Seasoning</TableTd>
                <TableTd>53</TableTd>
                <TableTd>22</TableTd>
              </TableRow>
              <TableRow>
                <TableTd>5</TableTd>
                <TableTd>Chef Anton&apos;s Gumbo Mix</TableTd>
                <TableTd>0</TableTd>
                <TableTd>21.35</TableTd>
              </TableRow>
            </TableTbody>
          </GridTable>
        </GridContent>
      </GridContainer>
    </>
  )

  switch (variant) {
    case 'multicolumn-headers':
      return (
        <GridWithMultiColumnHeaders {...other} {...additionalProps} />
      )
    case 'editing':
      return (
        <GridWithEditRow {...other} {...additionalProps} />
      )
    case 'grouping':
      return (
        <GridWithGrouping {...other} {...additionalProps}
          groupingHeader={(
            <GridGroupingHeader>
              <ChipList>
                <Chip icon="sort-asc-small" actions={
                  <>
                    <ChipAction type="more" />
                    <ChipAction type="remove" />
                  </>
                }>ID</Chip>
                <Chip icon="sort-desc-small" actions={
                  <>
                    <ChipAction type="more" />
                    <ChipAction type="remove" />
                  </>
                }>Name</Chip>
              </ChipList>
            </GridGroupingHeader>
          )}
        />
      )
    case 'row-reordering':
      return (
        <Grid {...other} {...additionalProps} >
          <>
            <GridHeader>
              <div className="k-grid-header-wrap"> {/*TODO: Move this div inside GridHeader */}
                <GridHeaderTable>
                  <colgroup>
                    <col className="k-drag-col" />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableThead>
                    <TableRow>
                      <GridHeaderCell className="k-drag-cell" accessibleLabel="Reorder"></GridHeaderCell>
                      <GridHeaderCell columnTitle="ID"></GridHeaderCell>
                      <GridHeaderCell columnTitle="Product Name"></GridHeaderCell>
                      <GridHeaderCell columnTitle="Units in Stock"></GridHeaderCell>
                      <GridHeaderCell columnTitle="Units Price"></GridHeaderCell>
                    </TableRow>
                  </TableThead>
                </GridHeaderTable>
              </div>
            </GridHeader>
            <GridContainer>
              <GridContent>
                <GridTable>
                  <colgroup>
                    <col className="k-drag-col" />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow>
                      <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                      <TableTd>1</TableTd>
                      <TableTd>Chai</TableTd>
                      <TableTd>39</TableTd>
                      <TableTd>18</TableTd>
                    </TableRow>
                    <TableRow alt>
                      <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                      <TableTd>2</TableTd>
                      <TableTd>Chang</TableTd>
                      <TableTd>17</TableTd>
                      <TableTd>19</TableTd>
                    </TableRow>
                    <TableRow>
                      <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                      <TableTd>3</TableTd>
                      <TableTd>Aniseed Syrup</TableTd>
                      <TableTd>13</TableTd>
                      <TableTd>10</TableTd>
                    </TableRow>
                    <TableRow alt>
                      <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                      <TableTd>4</TableTd>
                      <TableTd>Chef Anton&apos;s Cajun Seasoning</TableTd>
                      <TableTd>53</TableTd>
                      <TableTd>22</TableTd>
                    </TableRow>
                    <TableRow>
                      <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                      <TableTd>5</TableTd>
                      <TableTd>Chef Anton&apos;s Gumbo Mix</TableTd>
                      <TableTd>0</TableTd>
                      <TableTd>21.35</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridContent>
            </GridContainer>
          </>
        </Grid>
      );

    case 'filter-row':
      return (
        <GridWithFilterRow {...other} {...additionalProps} />
      );
    case 'normal':
    default:
      return (
        <Grid {...other} {...additionalProps} >
          {defaultGridContent}
        </Grid>
      );
  }
}

GridDemo.options = options;
GridDemo.states = states;
GridDemo.variants = variants;
GridDemo.defaultOptions = defaults;
GridDemo.modifiers = modifiers;
GridDemo.className = Grid.className;

export default GridDemo;