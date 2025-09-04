import * as React from 'react';
import { ActionSheet } from './action-sheet.spec';

const ACTIONSHEET_CONTAINER_CLASSNAME = 'k-actionsheet-container';

const states = [];

const options = {};

export type KendoActionsheetContainerProps = {
    children?: React.ReactNode;
};

export type KendoActionsheetContainerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const ActionsheetContainer = (
    props: KendoActionsheetContainerProps &
        KendoActionsheetContainerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={ACTIONSHEET_CONTAINER_CLASSNAME}>
            {children}
        </div>
    );
};

ActionsheetContainer.states = states;
ActionsheetContainer.options = options;
ActionsheetContainer.className = ACTIONSHEET_CONTAINER_CLASSNAME;
ActionsheetContainer.defaultOptions = defaultOptions;
ActionsheetContainer.moduleName = ActionSheet.moduleName;
ActionsheetContainer.folderName = ActionSheet.folderName;

export default ActionsheetContainer;
