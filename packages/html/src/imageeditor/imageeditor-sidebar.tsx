import { classNames } from '../misc';
import { Button } from '../button/button.spec';

export const IMAGEEDITORSIDEBAR_CLASSNAME = `k-imageeditor-sidebar`;

export type KendoImageEditorSidebarProps = {
    sidebarItems?: React.JSX.Element | React.JSX.Element[];
    scrollable?: boolean;
};

const defaultSidebarItems = [
    <Button fillMode="flat" icon="image-resize" />,
    <Button fillMode="flat" icon="crop" />,
    <Button fillMode="flat" icon="rotate" />,
    <div className="k-separator" />,
    <Button fillMode="flat" icon="free-text" />,
    <Button fillMode="flat" icon="shapes" />,
    <div className="k-separator" />,
    <Button fillMode="flat" icon="droplet" />,
    <Button fillMode="flat" icon="sliders" />,
    <div className="k-separator" />,
    <Button fillMode="flat" icon="image" />,
    <Button fillMode="flat" icon="brightness-contrast" />
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
