import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


const styles = `
    .k-actions {
        outline: 1px dotted;
    }

    .k-body {
        --k-elevation-4: 2px 2px red, 4px 4px green, 8px 8px blue, 12px 12px black;

        --kendo-spacing-1: 10px;
        --kendo-spacing-2: 20px;
        --kendo-spacing-25: 200px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span className="k-elevation-4">start</span>
            <span>end</span>
            <div>
                <ActionButtons alignment="start">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div>
                <ActionButtons alignment="end">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>center</span>
            <span>stretch</span>
            <div>
                <ActionButtons alignment="center">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div>
                <ActionButtons alignment="stretched">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>rtl start</span>
            <span>rtl end</span>
            <div dir="rtl">
                <ActionButtons alignment="start">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div dir="rtl">
                <ActionButtons alignment="end">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>rtl center</span>
            <span>rtl stretch</span>
            <div dir="rtl">
                <ActionButtons alignment="center">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div dir="rtl">
                <ActionButtons alignment="stretched">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
        </div>

    </>
);
