import { MenuButton } from '../menu-button';

const states = [];

const options = {};

export type ChartWizardPreviewPanelContentProps = {
    buttonText?: string;
};

export const ChartWizardPreviewPanelContent = (
    props: ChartWizardPreviewPanelContentProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        buttonText = "Export",
        children
    } = props;


    return (
        <>
            <div className="k-preview-pane-header">
                <MenuButton fillMode="flat" icon="export" showArrow={false}>{buttonText}</MenuButton>
            </div>
            <div className="k-preview-pane-content">
                {children}
            </div>
        </>
    );
};

ChartWizardPreviewPanelContent.states = states;
ChartWizardPreviewPanelContent.options = options;

export default ChartWizardPreviewPanelContent;
