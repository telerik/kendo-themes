import { FloatingActionButton } from "../fab.spec";

export const FloatingActionButtonDisabled = (props) =>
    <FloatingActionButton
        icon="plus"
        text="Create"
        disabled
        {...props}
    />;
