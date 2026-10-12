import { Button } from "../../button";
import { ActionSheetNormal, ActionSheetHeader, ActionSheetFooter, ActionSheetView } from "../../action-sheet";
import { ColumnMenuNormal, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander } from "../../column-menu";

const styles = `
    #test-area {
        max-width: 1060px;
    }
    #test-area > section {
        height: 720px;
        --kendo-actionsheet-height: 60cqh;
        --kendo-actionsheet-max-height: 60cqh;
        container-type: size;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span className="k-col-span-2" >ActionSheet With Multiple Views</span>

            <section>
                <ActionSheetNormal id="actionsheet-views-1" style={{ "--kendo-actionsheet-view-current": "1" } as React.CSSProperties}
                    template={
                        <>
                            <ActionSheetView animated header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="View 1" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Go to View 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="xsmall" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="View 2" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button size="large">Button</Button>
                                        <Button size="large" themeColor="primary">Button</Button>
                                    </ActionSheetFooter>
                                }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuItem text="Item" />
                                        <ColumnMenuItem text="Item" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-views-2" style={{ "--kendo-actionsheet-view-current": "2" } as React.CSSProperties}
                    template={
                        <>
                            <ActionSheetView animated header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="View 1" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Go to View 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="xsmall" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="View 2" />
                                }
                                footer={
                                    <ActionSheetFooter>
                                        <Button size="large">Button</Button>
                                        <Button size="large" themeColor="primary">Button</Button>
                                    </ActionSheetFooter>
                                }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuItem text="Item" />
                                        <ColumnMenuItem text="Item" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                        </>
                    }
                >
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
