import { describe, expect, it } from "vitest";

import { ImageEditorInsertShapes } from "../src/imageeditor";

type ToolbarItemElement = {
    props?: {
        icon?: string;
        selected?: boolean;
        "aria-label"?: string;
    };
};

describe("ImageEditorInsertShapes", () => {
    it("marks the shapes tool as selected", () => {
        const element = ImageEditorInsertShapes({});
        const toolbarItems = element.props.toolbarItems as ToolbarItemElement[];
        const shapesButton = toolbarItems.find((item: ToolbarItemElement) => item?.props?.icon === "shapes");

        expect(shapesButton?.props.selected).toBe(true);
        expect(shapesButton?.props["aria-label"]).toBe("Insert shapes");
    });

    it("describes the inserted shapes on the edited image", () => {
        const element = ImageEditorInsertShapes({});
        const [canvas] = element.props.children.props.children;

        expect(canvas.props["aria-label"]).toContain("inserted");
        expect(canvas.props["aria-label"]).toContain("ellipse");
        expect(element.props.actionPane).toBeTruthy();
    });
});
