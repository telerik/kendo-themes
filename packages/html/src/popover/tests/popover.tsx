import { PopoverNormal } from '../../popover';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';


const styles = `
    .k-popover {
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">
            <span>Callout top</span>
            <span>Callout right</span>
            <span>Callout bottom</span>
            <span>Callout left</span>
            <span>Empty body fixed height</span>

            <section>
                <PopoverNormal callout="top" title="Title" body={<>Body content</>}>
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            </section>

            <section>
                <PopoverNormal callout="right" title="Title" body={<>Body content</>}>
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            </section>

            <section>
                <PopoverNormal callout="bottom" title="Title" body={<>Body content</>}>
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            </section>

            <section>
                <PopoverNormal callout="left" title="Title" body={<>Body content</>}>
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button fillMode="flat">Action</Button>
                        <Button fillMode="flat" themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            </section>

            <section>
                <PopoverNormal callout="left" title="Title" style={{ height: "150px" }}></PopoverNormal>
            </section>
        </div>
    </>
);
