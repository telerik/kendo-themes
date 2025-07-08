import { describe, it, expect } from "@jest/globals";
import * as fs from "fs";
import * as path from "path";

// Function to extract export paths from index.ts
function getExportPaths(): string[] {
  const indexPath = path.join(__dirname, "..", "index.ts");
  const content = fs.readFileSync(indexPath, "utf-8");

  // Extract all export * from './path/index' lines
  const exportMatches = content.match(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"];?/g);

  if (!exportMatches) return [];

  return exportMatches
    .map((match) => {
      const pathMatch = match.match(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"];?/);
      return pathMatch ? pathMatch[1] : null;
    })
    .filter(Boolean) as string[];
}

// Generate test modules dynamically
function generateTestModules() {
  const exportPaths = getExportPaths();
  const testModules: Array<{ module: any; file: string; moduleName: string }> = [];

  exportPaths.forEach((exportPath) => {
    // Convert export path to actual module name and spec file path
    const moduleName = exportPath.replace("/index", "");
    const specFile = `${moduleName}/${path.basename(moduleName)}.spec.tsx`;
    const fullSpecPath = path.join(__dirname, "..", specFile);

    if (fs.existsSync(fullSpecPath)) {
      try {
        // Import the spec module using require for CommonJS compatibility
        const specModule = require(`../${specFile.replace(".tsx", "")}`);
        testModules.push({
          module: specModule,
          file: `src/${specFile}`,
          moduleName: moduleName,
        });
      } catch (error) {
        console.warn(`Could not import spec module for ${moduleName}:`, (error as Error).message);
      }
    }
  });

  return testModules;
}

// Generate test modules based on index.ts exports
const testModules = generateTestModules();

describe("Component Requirements", () => {
  // Log discovered modules for debugging
  console.log(`🔍 Discovered ${testModules.length} modules with spec files:`);
  testModules.forEach(({ moduleName, file }) => {
    console.log(`  📁 ${moduleName} -> ${file}`);
  });

  // Generate individual tests for each component
  testModules.forEach(({ module, moduleName }) => {
    const componentNames = Object.keys(module).filter((name) => name[0] === name[0].toUpperCase() && typeof (module as any)[name] === "function");

    if (componentNames.length === 0) {
      console.warn(`⚠️  No components found in ${moduleName}`);
      return;
    }

    componentNames.forEach((componentName) => {
      const component = (module as any)[componentName];

      it(`${componentName} (${moduleName}.spec.tsx) should have className static property set`, () => {
        expect(Object.prototype.hasOwnProperty.call(component, "className")).toBe(true);
        expect(typeof component.className).toBe("string");
        expect(component.className).toBeTruthy();
        expect(component.className.trim()).not.toBe("");
      });
    });
  });
});
