import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract export paths from index.ts
function getExportPaths(): string[] {
  const indexPath = path.join(__dirname, "..", "src", "index.ts");
  const content = fs.readFileSync(indexPath, "utf-8");

  // Extract all export * from './path/index' lines
  const matches = content.match(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"];?/g);

  return matches?.map(match => match.match(/['"]\.\/([^'"]+)['"];?/)?.[1]).filter(Boolean) as string[] || [];
}

// Generate test modules dynamically
async function generateTestModules() {
  const testModules: Array<{ module: any; moduleName: string }> = [];

  for (const exportPath of getExportPaths()) {
    const moduleName = exportPath.replace("/index", "");
    const specFile = `${moduleName}/${path.basename(moduleName)}.spec.tsx`;
    const fullSpecPath = path.join(__dirname, "..", "src", specFile);

    if (fs.existsSync(fullSpecPath)) {
      try {
        const specModule = await import(`../src/${specFile.replace(".tsx", "")}`);
        testModules.push({ module: specModule, moduleName });
      } catch (error) {
        console.warn(`Could not import spec module for ${moduleName}:`, (error as Error).message);
      }
    }
  }

  return testModules;
}

// Load test modules at module level using top-level await (proper ESM pattern)
const testModules = await generateTestModules();

describe("Component Requirements", () => {
  // Generate tests for each component
  testModules.forEach(({ module, moduleName }) => {
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

      it(`${componentName} (${moduleName}.spec.tsx) should have moduleName static property set`, () => {
        expect(Object.prototype.hasOwnProperty.call(component, "moduleName")).toBe(true);
        expect((component as any).moduleName === null || typeof (component as any).moduleName === "string").toBe(true);
      });

      it(`${componentName} (${moduleName}.spec.tsx) should have folderName static property set`, () => {
        expect(Object.prototype.hasOwnProperty.call(component, "folderName")).toBe(true);
        expect((component as any).folderName === null || typeof (component as any).folderName === "string").toBe(true);
      });
    });
  });
});
