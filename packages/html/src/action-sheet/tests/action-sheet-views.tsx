import { Button } from "../../button";
import { ActionSheetNormal, ActionSheetHeader, ActionSheetFooter, ActionSheetView } from "../../action-sheet";
import { ColumnMenuNormal, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander } from "../../column-menu";

const styles = `
    #test-area {
        max-width: 1060px;
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "1" } as React.CSSProperties}
                    adaptive
                    template={
                        <>
                            <ActionSheetView animated adaptive header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="View 1" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Go to View 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="View 2" />
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
                <ActionSheetNormal style={{ "--kendo-actionsheet-view-current": "2" } as React.CSSProperties}
                    adaptive
                    template={
                        <>
                            <ActionSheetView animated adaptive header={
                                <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="View 1" />
                            }>
                                <ColumnMenuNormal size="large">
                                    <ColumnMenuItemWrapper>
                                        <ColumnMenuExpander itemText="Go to View 2" expanderIcon="chevron-right" />
                                    </ColumnMenuItemWrapper>
                                </ColumnMenuNormal>
                            </ActionSheetView>
                            <ActionSheetView animated adaptive
                                header={
                                    <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="View 2" />
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
