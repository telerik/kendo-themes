import { classNames } from '../misc';
import { Button } from '../button/button.spec';

export const IMAGEEDITORSIDEBAR_CLASSNAME = `k-imageeditor-sidebar`;

export type KendoImageEditorSidebarProps = {
    sidebarItems?: React.JSX.Element | React.JSX.Element[];
    scrollable?: boolean;
    scrollingPosition?: 'start' | 'end' | 'both';
};

const defaultSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="crop" aria-label="Crop" />,
    <Button fillMode="flat" key="sidebar-button-2" icon="image-resize" aria-label="Resize" />,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate" />,
    <div className="k-separator" key="sidebar-separator-1" />,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text" />,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes" />,
    <div className="k-separator" key="sidebar-separator-2" />,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" aria-label="Blur" />,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" aria-label="Adjustments" />,
    <Button fillMode="flat" key="sidebar-button-8" icon="filter" aria-label="Filters" />,
    <div className="k-separator" key="sidebar-separator-3" />,
    <Button fillMode="flat" key="sidebar-button-9" icon="borders-all" aria-label="Frame" />,
    <Button fillMode="flat" key="sidebar-button-10" icon="bring-to-back" aria-label="Shadow" />
];

const defaultOptions = {
    sidebarItems: defaultSidebarItems,
    scrollable: false,
    scrollingPosition: 'start' as const,
};

/**
 * @aria {role="toolbar"} The component role, grouping the tool selection buttons.
 * @aria {aria-label="Tools"} Distinguishes the sidebar toolbar from the header toolbar.
 */
export const ImageEditorSidebar = (
    props: KendoImageEditorSidebarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        sidebarItems = defaultOptions.sidebarItems,
        scrollable = defaultOptions.scrollable,
        scrollingPosition = defaultOptions.scrollingPosition,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORSIDEBAR_CLASSNAME,
                {
                    [`${IMAGEEDITORSIDEBAR_CLASSNAME}-scrollable`]: scrollable,
                    [`${IMAGEEDITORSIDEBAR_CLASSNAME}-scrollable-${scrollingPosition}`]: scrollable,
                }
            )}
        >
            <div className="k-imageeditor-sidebar-items" role="toolbar" aria-label="Tools">
                {sidebarItems ?? props.children}
            </div>
        </div>
    );
};
