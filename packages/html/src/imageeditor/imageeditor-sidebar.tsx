import { classNames } from '../misc';
import { Button } from '../button/button.spec';

export const IMAGEEDITORSIDEBAR_CLASSNAME = `k-imageeditor-sidebar`;

export type KendoImageEditorSidebarProps = {
    sidebarItems?: React.JSX.Element | React.JSX.Element[];
    scrollable?: boolean;
};

const defaultSidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" />,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" />,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" />,
    <div className="k-separator" key="sidebar-separator-1" />,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" />,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" />,
    <div className="k-separator" key="sidebar-separator-2" />,
    <Button fillMode="flat" key="sidebar-button-6" icon="droplet" />,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders" />,
    <div className="k-separator" key="sidebar-separator-3" />,
    <Button fillMode="flat" key="sidebar-button-8" icon="image" />,
    <Button fillMode="flat" key="sidebar-button-9" icon="brightness-contrast" />
];

const defaultOptions = {
    sidebarItems: defaultSidebarItems,
    scrollable: false,
};

export const ImageEditorSidebar = (
    props: KendoImageEditorSidebarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        sidebarItems = defaultOptions.sidebarItems,
        scrollable = defaultOptions.scrollable,
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
                }
            )}
        >
            <div className="k-imageeditor-sidebar-items">
                {sidebarItems ?? props.children}
            </div>
        </div>
    );
};
