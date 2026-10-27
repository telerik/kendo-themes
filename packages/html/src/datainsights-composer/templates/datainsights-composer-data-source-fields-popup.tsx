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
            <Chip role="presentation" tabIndex={0} rounded="full" fillMode="outline" text="SalesOrderID" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" text="OrderDate" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" text="ShipDate" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" text="SubTotal" />
            <Chip role="presentation" tabIndex={-1} rounded="full" fillMode="outline" text="TaxAmt" />
        </ChipList>
    </DataInsightsComposerPopup>
);

export default DataInsightsComposerDataSourceFieldsPopup;
