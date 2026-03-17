import { PivotGrid, KendoPivotGridProps } from '../pivotgrid.spec';
import { PivotGridConfiguratorButton } from '../pivotgrid-configurator-button';
import { PivotGridConfigurator } from '../pivotgrid-configurator';
import { PivotGridCell } from '../pivotgrid-cell';
import { PivotGridRow } from '../pivotgrid-row';
import { PivotGridTable } from '../pivotgrid-table';
import { PivotGridTbody } from '../pivotgrid-tbody';
import { PivotGridNormal } from '../templates/pivotgrid-normal';
import { Chip, ChipAction, ChipList } from '../../chip';
import { Form } from '../../form';
import { Treeview, TreeviewItem } from '../../treeview';

const options = PivotGrid.options;
const states = PivotGrid.states;
const defaults = {
  ...PivotGrid.defaultOptions,
  variant: 'top',
};

const variants = [
    {
        name: 'top',
        title: 'Top',
    },
    {
        name: 'right',
        title: 'Right',
    },
    {
        name: 'left',
        title: 'Left',
    },
    {
        name: 'bottom',
        title: 'Bottom',
    }
];

const modifiers = [
    {
        name: 'open',
        title: 'Open Settings',
    }
];

export const PivotgridDemo = (
    props: KendoPivotGridProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };


    const rowHeaders: React.ReactElement = <>
        <PivotGridTable>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <PivotGridTbody>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} rowSpan={5} toggle="up" headerTitle="Regions" headerRootCell />
                    <PivotGridCell as="th" colSpan={1} headerTitle="South America" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} headerTitle="North America" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} headerTitle="Europe" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} headerTitle="Asia" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} headerTitle="Africa" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={2} headerTitle="Regions" headerRootCell headerTotalCell />
                </PivotGridRow>
            </PivotGridTbody>
        </PivotGridTable>
    </>;

    const columnHeaders: React.ReactElement = <>
        <PivotGridTable>
            <colgroup>
                <col width="150" />
                <col width="150" />
            </colgroup>
            <PivotGridTbody>
                <PivotGridRow >
                    <PivotGridCell as="th" colSpan={2} toggle="up" headerTitle="Categories" headerRootCell />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} headerTitle="Seafood" />
                    <PivotGridCell as="th" colSpan={1} headerTitle="Beverages" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Products" headerRootCell />
                    <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Products" headerRootCell />
                </PivotGridRow>
            </PivotGridTbody>
        </PivotGridTable>
    </>

    const values: React.ReactElement = <>
        <PivotGridTable>
            <colgroup>
                <col width="150" />
                <col width="150" />
            </colgroup>
            <PivotGridTbody>
                <PivotGridRow>
                    <PivotGridCell as="td" colSpan={1} content="1847.00" />
                    <PivotGridCell as="td" colSpan={1} content="1488.00" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="td" colSpan={1} content="1998.00" />
                    <PivotGridCell as="td" colSpan={1} content="1406.00" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="td" colSpan={1} content="2065.00" />
                    <PivotGridCell as="td" colSpan={1} content="1242.00" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="td" colSpan={1} content="1830.00" />
                    <PivotGridCell as="td" colSpan={1} content="1579.00" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="td" colSpan={1} content="2005.00" />
                    <PivotGridCell as="td" colSpan={1} content="1441.00" />
                </PivotGridRow>
                <PivotGridRow>
                    <PivotGridCell as="td" colSpan={1} content="9745.00" totalCell />
                    <PivotGridCell as="td" colSpan={1} content="7156.00" totalCell />
                </PivotGridRow>
            </PivotGridTbody>
        </PivotGridTable>
    </>

    const settingsPanelOpened: React.ReactElement = <>
        <PivotGridConfigurator mode="overlay">
            <Form className="k-form-horizontal">
                <div className="k-form-field">
                    <label className="k-label">Fields</label>
                </div>
                <div className="k-form-field">
                    <div className="k-fields-list-wrapper">
                        <Treeview>
                            <TreeviewItem checked showCheckbox text="Category" />
                            <TreeviewItem checked showCheckbox text="Product" />
                        </Treeview>
                    </div>
                </div>
                <div className="k-form-field">
                    <label className="k-label">Columns</label>
                </div>
                <ChipList className="k-column-fields">
                    <Chip
                        text="Category"
                        actions={
                            <>
                                <ChipAction type="more" />
                                <ChipAction type="remove" />
                            </>
                        }
                    />
                    <Chip
                        text="Product"
                        actions={
                            <>
                                <ChipAction type="more" />
                                <ChipAction type="remove" />
                            </>
                        }
                    />
                </ChipList>
                <div className="k-form-field">
                    <label className="k-label">Rows</label>
                </div>
                <ChipList className="k-row-fields">
                    <Chip
                        text="Region"
                        actions={
                            <>
                                <ChipAction type="more" />
                                <ChipAction type="remove" />
                            </>
                        }
                    />
                </ChipList>
            </Form>
        </PivotGridConfigurator>
    </>;

    let settingsPanel = <></>;

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'open': {
                settingsPanel = mods?.[modifier] ? settingsPanelOpened : <></>;
                break;
            }
        }
    });

    const classMap: Record<string, string> = {
        left: "k-d-flex k-flex-row-reverse k-pos-relative",
        bottom: "k-d-flex k-flex-col k-pos-relative",
        top: "k-d-flex k-flex-col-reverse k-pos-relative",
        right: "k-d-flex k-flex-row k-pos-relative"
    }

    const className = classMap[variant] || classMap["right"]

    return (
        <div className={className}>
            <PivotGridNormal rowHeaders={rowHeaders} columnHeaders={columnHeaders} children={values} style={{ gridTemplateRows: "111px 1fr", gridTemplateColumns: "236px 1fr" }} {...other} />
            {settingsPanel}
            <PivotGridConfiguratorButton />
        </div>
    );
}


PivotgridDemo.options = options;
PivotgridDemo.states = states;
PivotgridDemo.variants = variants;
PivotgridDemo.defaultOptions = defaults;
PivotgridDemo.modifiers = modifiers;
PivotgridDemo.className = PivotGrid.className;

export default PivotgridDemo;

