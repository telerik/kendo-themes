#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import React from "react";

// Global React import to satisfy React components
(global as any).React = React;

/**
 * Official Component Registry Builder
 * Builds official component registry by dynamically requiring .spec.* files
 * and extracting COMPONENT.className properties
 */

interface ComponentDetails {
  filePath: string;
  analyzed: boolean;
}

interface ComponentRegistry {
  officialComponents: string[];
  isOfficialClass: (className: string) => boolean;
  classifySelector: (selector: string) => { official: string[]; utility: string[] };
  generateIntelligentFix: (selector: string) => string;
}

class ComponentRegistryBuilder {
  private officialComponents = new Set<string>();

  async buildRegistry(): Promise<ComponentRegistry> {
    console.log("🔍 Building Official Component Registry...\n");

    try {
      // Import the entire HTML package once
      const htmlPackagePath = path.resolve(__dirname, "../../packages/html/src/index.ts");
      console.log(`📦 Importing HTML package from: ${htmlPackagePath}\n`);

      const htmlPackage = await import(htmlPackagePath);
      await this.analyzeHtmlPackage(htmlPackage);
    } catch (error) {
      console.error(`❌ Failed to import HTML package: ${(error as Error).message}`);
      throw error;
    }

    this.generateReport();
    return this.getRegistry();
  }

  private async analyzeHtmlPackage(htmlPackage: any): Promise<void> {
    console.log("🔍 Analyzing HTML package exports...\n");

    let componentCount = 0;
    const exportNames = Object.keys(htmlPackage);
    console.log(`📊 Found ${exportNames.length} exports in HTML package`);

    for (const [exportName, exportValue] of Object.entries(htmlPackage)) {
      if (this.hasClassName(exportValue)) {
        await this.extractClassNames(exportValue, exportName);
        componentCount++;
      }
    }

    console.log(`\n✅ Successfully analyzed ${componentCount} components with className properties`);
  }

  private hasClassName(exportValue: any): boolean {
    return exportValue && (typeof exportValue === "object" || typeof exportValue === "function") && typeof exportValue.className === "string" && exportValue.className.trim().length > 0;
  }

  private async extractClassNames(exportValue: any, sourceName: string): Promise<void> {
    const className = exportValue.className;

    // Handle single class or multiple classes
    const classes = className.split(/\s+/).filter(Boolean);

    for (const cls of classes) {
      if (cls.startsWith("k-")) {
        // Only include Kendo classes
        this.officialComponents.add(cls);
        console.log(`✅ Official Component: ${cls} (from ${sourceName})`);
      }
    }
  }

  private isOfficialClass(className: string): boolean {
    return this.officialComponents.has(className);
  }

  private classifySelector(selector: string): { official: string[]; utility: string[] } {
    // Extract all class names from selector
    const classMatches = selector.match(/\.k-[\w-]+/g);
    if (!classMatches) {
      return { official: [], utility: [] };
    }

    const official: string[] = [];
    const utility: string[] = [];

    for (const classMatch of classMatches) {
      const className = classMatch.substring(1); // Remove the dot
      if (this.isOfficialClass(className)) {
        official.push(className);
      } else {
        utility.push(className);
      }
    }

    return { official, utility };
  }

  private generateIntelligentFix(selector: string): string {
    const classification = this.classifySelector(selector);

    if (classification.utility.length === 0) {
      // No utility classes, no fix needed
      return selector;
    }

    // Smart fix: wrap only utility classes in :where()
    let fixedSelector = selector;

    for (const utilityClass of classification.utility) {
      const utilityPattern = new RegExp(`\\.${utilityClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "g");
      fixedSelector = fixedSelector.replace(utilityPattern, `:where(.${utilityClass})`);
    }

    return fixedSelector;
  }

  private generateReport(): void {
    console.log("\n📊 COMPONENT REGISTRY REPORT");
    console.log("=".repeat(50));
    console.log(`Official Components: ${this.officialComponents.size}`);

    console.log("\n🏗️  OFFICIAL COMPONENTS:");
    Array.from(this.officialComponents)
      .sort()
      .forEach((comp) => console.log(`  • ${comp}`));
  }

  private getRegistry(): ComponentRegistry {
    return {
      officialComponents: Array.from(this.officialComponents),
      isOfficialClass: this.isOfficialClass.bind(this),
      classifySelector: this.classifySelector.bind(this),
      generateIntelligentFix: this.generateIntelligentFix.bind(this),
    };
  }
}

// If run directly, build and save registry
(async () => {
  const builder = new ComponentRegistryBuilder();
  const registry = await builder.buildRegistry();

  // Save registry for other scripts
  fs.writeFileSync(
    "component-registry.json",
    JSON.stringify(
      {
        officialComponents: registry.officialComponents,
      },
      null,
      2
    )
  );

  console.log("\n💾 Registry saved to component-registry.json");
})();

export { ComponentRegistryBuilder };
