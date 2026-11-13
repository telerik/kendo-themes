import { ActionSheetItems, ActionSheetItem, ActionSheetNormal, ActionSheetHeader } from '..';
import { Button } from '../../button';

const styles = `
    #test-area > section {
        width: 360px;
        height: 240px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

const longTitle = "A very long action sheet title that does not fit in the available header width";
const longSubtitle = "A very long action sheet subtitle that does not fit in the available header width either";

const back = <Button icon="chevron-left" size="xsmall" fillMode="flat" aria-label="Back" />;
const close = <Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />;

const items = (
    <ActionSheetItems>
        <ActionSheetItem text="Item Title" iconName="pencil" />
        <ActionSheetItem text="Item Title" iconName="pencil" />
    </ActionSheetItems>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Long title and subtitle - start and end actions</span>

            <section>
                <ActionSheetNormal id="actionsheet-long-title-1" fullscreen
                    header={<ActionSheetHeader actionsStart={back} actionsEnd={close} title={longTitle} subtitle={longSubtitle} />}
                >
                    {items}
                </ActionSheetNormal>
            </section>

            <span>Long title and subtitle - end action only</span>

            <section>
                <ActionSheetNormal id="actionsheet-long-title-2" fullscreen
                    header={<ActionSheetHeader actionsEnd={close} title={longTitle} subtitle={longSubtitle} />}
                >
                    {items}
                </ActionSheetNormal>
            </section>

            <span>Long title and subtitle - no actions</span>

            <section>
                <ActionSheetNormal id="actionsheet-long-title-3" fullscreen
                    header={<ActionSheetHeader title={longTitle} subtitle={longSubtitle} />}
                >
                    {items}
                </ActionSheetNormal>
            </section>

        </div>
    </>
);
