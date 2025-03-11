import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';


const styles = `
    .k-actions {
        outline: 1px dotted;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>start</span>
            <span>end</span>
            <span>center</span>

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
            <div>
                <ActionButtons alignment="center">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>stretch</span>
            <span>justify</span>
            <span>orientation - vertical</span>

            <div>
                <ActionButtons alignment="stretched">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div>
                <ActionButtons alignment="justify">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div>
                <ActionButtons orientation="vertical">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>rtl start</span>
            <span>rtl end</span>
            <span>rtl center</span>
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
            <div dir="rtl">
                <ActionButtons alignment="center">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>

            <span>rtl stretch</span>
            <span>rtl justify</span>
            <span>rtl orientation - vertical</span>

            <div dir="rtl">
                <ActionButtons alignment="stretched">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div dir="rtl">
                <ActionButtons alignment="justify">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
            <div dir="rtl">
                <ActionButtons orientation="vertical">
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                </ActionButtons>
            </div>
        </div>

    </>
);
