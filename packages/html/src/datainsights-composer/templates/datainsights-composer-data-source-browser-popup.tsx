import { Chip } from '../../chip';
import { Searchbox } from '../../searchbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { DataInsightsComposerPopup } from '..';

const TreeviewChipItem = ({ text }: { text: string }) => (
    <TreeviewItem
        content={
            <Chip role="presentation" tabIndex={-1} text={text} rounded="full" fillMode="outline" themeColor="base" />
        }
    />
);

export const DataInsightsComposerDataSourceBrowserPopup = (props: any) => (
    <DataInsightsComposerPopup {...props}>
        <Searchbox
            placeholder="Search data sources"
            aria-label="Search data sources"
        />
        <Treeview className="k-datainsights-composer-popup-tree" aria-label="Data sources">
            <TreeviewItem text="sales_orders" hasChildren expanded>
                <TreeviewGroup>
                    <TreeviewChipItem text="SalesOrderID" />
                    <TreeviewChipItem text="OrderDate" />
                    <TreeviewChipItem text="ShipDate" />
                    <TreeviewChipItem text="SubTotal" />
                    <TreeviewChipItem text="TaxAmt" />
                </TreeviewGroup>
            </TreeviewItem>
            <TreeviewItem text="sales_persona" hasChildren>
                <TreeviewGroup>
                    <TreeviewChipItem text="Name" />
                    <TreeviewChipItem text="Territory" />
                    <TreeviewChipItem text="SalesQuota" />
                </TreeviewGroup>
            </TreeviewItem>
        </Treeview>
    </DataInsightsComposerPopup>
);

export default DataInsightsComposerDataSourceBrowserPopup;
