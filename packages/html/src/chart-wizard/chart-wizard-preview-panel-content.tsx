import { MenuButton } from '../menu-button';

const states = [];

const options = {};

export type ChartWizardPreviewPanelContentProps = {
    buttonText?: string;
};

const defaultOptions = {
    buttonText: "Export"
};

export const ChartWizardPreviewPanelContent = (
    props: ChartWizardPreviewPanelContentProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        buttonText = defaultOptions.buttonText,
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
ChartWizardPreviewPanelContent.defaultOptions = defaultOptions;

export default ChartWizardPreviewPanelContent;
