import { Chip, ChipList } from '../../chip';
import {
    DataInsightsComposerPopup,
    DataInsightsComposerPopupListGroupHeader,
} from '..';

export const DataInsightsComposerDataSourceFieldsPopup = (props: any) => (
    <DataInsightsComposerPopup {...props}>
        <DataInsightsComposerPopupListGroupHeader>
            sales_order
        </DataInsightsComposerPopupListGroupHeader>
        <ChipList className="k-datainsights-composer-popup-field-list" role="none">
            <Chip role="presentation" tabIndex={0} rounded="full" fillMode="outline" themeColor="base" text="SalesOrderID" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" themeColor="base" text="OrderDate" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" themeColor="base" text="ShipDate" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" themeColor="base" text="SubTotal" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" themeColor="base" text="TaxAmt" />
        </ChipList>
    </DataInsightsComposerPopup>
);

export default DataInsightsComposerDataSourceFieldsPopup;
