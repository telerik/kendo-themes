import { describe, it, expect } from "@jest/globals";
import * as fs from "fs";
import * as path from "path";

// Function to extract export paths from index.ts
function getExportPaths(): string[] {
  const indexPath = path.join(__dirname, "..", "src", "index.ts");
  const content = fs.readFileSync(indexPath, "utf-8");

  // Extract all export * from './path/index' lines
  const matches = content.match(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"];?/g);

  return matches?.map(match => match.match(/['"]\.\/([^'"]+)['"];?/)?.[1]).filter(Boolean) as string[] || [];
}

// Generate test modules dynamically
function generateTestModules() {
  const testModules: Array<{ module: any; moduleName: string }> = [];

  getExportPaths().forEach((exportPath) => {
    const moduleName = exportPath.replace("/index", "");
    const specFile = `${moduleName}/${path.basename(moduleName)}.spec.tsx`;
    const fullSpecPath = path.join(__dirname, "..", "src", specFile);

    if (fs.existsSync(fullSpecPath)) {
      try {
        const specModule = require(`../src/${specFile.replace(".tsx", "")}`);
        testModules.push({ module: specModule, moduleName });
      } catch (error) {
        console.warn(`Could not import spec module for ${moduleName}:`, (error as Error).message);
      }
    }
  });

  return testModules;
}

describe("Component Requirements", () => {

  // Generate tests for each component
  generateTestModules().forEach(({ module, moduleName }) => {
    const components = Object.entries(module).filter(([name, value]) =>
      name[0] === name[0].toUpperCase() && typeof value === "function"
    );

    components.forEach(([componentName, component]) => {
      it(`${componentName} (${moduleName}.spec.tsx) should have className static property set`, () => {
        expect(Object.prototype.hasOwnProperty.call(component, "className")).toBe(true);
        expect(typeof (component as any).className).toBe("string");
        expect((component as any).className).toBeTruthy();
        expect((component as any).className.trim()).not.toBe("");
      });
    });
  });
});
