import * as fs from "fs";
import * as path from "path";
import { describe, it, expect } from "vitest";

const themes = ["default", "bootstrap", "material", "classic", "fluent", "meridian"];
const nonComponents = ["core", "utils"];

// A component's unit test also verifies it is forwarded from the theme's index.scss.
describe.each(themes)("%s component coverage", (theme) => {
    const scssDir = path.resolve(__dirname, "../packages", theme, "scss");
    const hasVariables = (component: string) => {
        const variablesFile = path.resolve(scssDir, component, "_variables.scss");

        return fs.existsSync(variablesFile) && /^\$kendo-/m.test(fs.readFileSync(variablesFile, "utf8"));
    };

    it("should have a unit test for every component with variables", () => {
        const missing = fs
            .readdirSync(scssDir, { withFileTypes: true })
            .filter((entry) => entry.isDirectory() && !nonComponents.includes(entry.name))
            .map((entry) => entry.name)
            .filter((component) => hasVariables(component))
            .filter((component) => !fs.existsSync(path.resolve(__dirname, theme, `${component}.test.ts`)))
            .map((component) => `units/${theme}/${component}.test.ts`);

        expect(missing, "Add the missing unit tests").toEqual([]);
    });
});
