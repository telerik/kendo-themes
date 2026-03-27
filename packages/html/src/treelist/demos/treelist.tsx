import { TreeList } from '../treelist.spec';
import { TreeListNormal } from '../templates/treelist-normal';
import { TreeListWithFilterMenu } from '../templates/treelist-with-filter-menu';
import { TreeListWithColumnMenu } from '../templates/treelist-with-column-menu';
import { TreeListRowReordering } from '../templates/treelist-row-reordering';
import { KendoGridProps, GridToolbar, GridContent, GridHeader, GridHeaderCell, GridHeaderTable, GridTable } from '../../grid';
import { TableRow, TableTbody, TableTd, TableThead } from '../../table';
import { Button } from '../../button';
import { Pager } from '../../pager';
import { Textbox } from '../../textbox';
import { Icon } from '../../icon';

const options = TreeList.options;
const states = TreeList.states;
const defaults = {
  ...TreeList.defaultOptions,
  variant: 'normal',
};

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
        name: 'filter-row',
        title: 'Filter Row',
    },
    {
        name: 'sorting',
        title: 'Sorting',
    },
    {
        name: 'row-reordering',
        title: 'Row Reordering',
    },
];

const modifiers = [
    {
        name: 'toolbar',
        title: 'Toolbar',
    },
    {
        name: 'pager',
        title: 'Pager',
    },
];

export const TreelistDemo = (
    props: KendoGridProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {

    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

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

    switch (variant) {
        case 'row-reordering':
            return (
                <TreeListRowReordering {...other} {...additionalProps} />
            );
        case 'column-menu':
            return (
                <TreeListWithColumnMenu {...other} {...additionalProps} gridHeader={
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell menu="column" columnTitle="First Name"></GridHeaderCell>
                                        <GridHeaderCell menu="column" columnTitle="Last Name"></GridHeaderCell>
                                        <GridHeaderCell menu="column" columnTitle="Position"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                } />
            );
        case 'filter-row':
            return (
                <TreeListWithFilterMenu {...other} {...additionalProps} gridHeader={
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell menu="filter" columnTitle="First Name"></GridHeaderCell>
                                        <GridHeaderCell menu="filter" columnTitle="Last Name"></GridHeaderCell>
                                        <GridHeaderCell menu="filter" columnTitle="Position"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                } />
            );
        case 'sorting':
            return (
                <TreeListNormal {...other} {...additionalProps} gridHeader={
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="First Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Last Name" sortable></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Position"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                }
                    gridContent={
                        <GridContent>
                            <GridTable>
                                <colgroup>
                                    <col />
                                    <col className="k-sorted" />
                                    <col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-treelist-group">
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                            Daryl
                                        </TableTd>
                                        <TableTd>Sweeney</TableTd>
                                        <TableTd>CEO</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group" alt>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                            Guy
                                        </TableTd>
                                        <TableTd>Wooten</TableTd>
                                        <TableTd>Chief Technical Officer</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group">
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                            Buffy
                                        </TableTd>
                                        <TableTd>Weber</TableTd>
                                        <TableTd>VP, Engineering</TableTd>
                                    </TableRow>
                                    <TableRow className="k-treelist-group" alt>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="chevron-down"></Icon>
                                            Hyacinth
                                        </TableTd>
                                        <TableTd>Hood</TableTd>
                                        <TableTd>Team Lead</TableTd>
                                    </TableRow>
                                    <TableRow>
                                        <TableTd>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            <Icon className="k-treelist-toggle" icon="none"></Icon>
                                            Akeem
                                        </TableTd>
                                        <TableTd>Carr</TableTd>
                                        <TableTd>Junior Software Developer</TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </GridContent>
                    } />
            );
        case 'normal':
        default:
            return (
                <TreeListNormal {...other} {...additionalProps} gridHeader={
                    <GridHeader>
                        <div className="k-grid-header-wrap">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <GridHeaderCell columnTitle="First Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Last Name"></GridHeaderCell>
                                        <GridHeaderCell columnTitle="Position"></GridHeaderCell>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                } />
            );
    }
}


TreelistDemo.options = options;
TreelistDemo.states = states;
TreelistDemo.variants = variants;
TreelistDemo.defaultOptions = defaults;
TreelistDemo.modifiers = modifiers;
TreelistDemo.className = TreeList.className;

export default TreelistDemo;

