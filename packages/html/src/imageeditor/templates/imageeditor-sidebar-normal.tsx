import { ImageEditorSidebar } from "..";
import { Button } from "../../button/button.spec";

export const ImageEditorSidebarNormal = (props: any) => (
    <ImageEditorSidebar {...props} tools={[
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
    ]} />
);
