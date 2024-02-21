import fs from "fs/promises";
import { resolve, join } from 'path';

interface Theme {
    theme: string;
    swatches: Swatch[];
}

interface Swatch {
    theme: string;
    swatch: string;
    previewColors: string[];
}

(async () => {
    const themesCatalog: Theme[] = [];

    const root = resolve(__dirname, "../");

    const xamlDist = join(root, "dist", "xaml");

    await fs.rm(xamlDist, { recursive: true, force: true });
    await fs.mkdir(xamlDist, { recursive: true });

    const themes = [ "Default", "Bootstrap", "Fluent", "Material" ].map(name => ({
        name,
        path: join(root, "packages", name.toLowerCase())
    }));

    for (const { name, path } of themes) {
        console.log(name.toUpperCase());
        console.log(underline(name, "="));
        console.log();

        await fs.mkdir(join(xamlDist, name, "Swatches"), { recursive: true });

        const themeCatalog: Theme = {
            theme: name,
            swatches: []
        };
        themesCatalog.push(themeCatalog);

        const _swatchesPath = join(path, "scss", "core", "color-system", "_swatch.scss");
        const _palettesPath = join(path, "scss", "core", "color-system", "_palettes.scss");

        const paletteMap = await parseKendoPalettesFile(_palettesPath);

        const resourceDictionary = await parseSwatchesAndCreateResourceDictionary(_swatchesPath, name, "Main", paletteMap);
        await fs.writeFile(join(xamlDist, name, "Swatches", "Main.xaml"), resourceDictionary);

        // And darkness for all
        const resourceDictionaryDark = await parseSwatchesAndCreateResourceDictionary(_swatchesPath, name, "MainDark", paletteMap, lightToDark);
        await fs.writeFile(join(xamlDist, name, "Swatches", "Main-Dark.xaml"), resourceDictionaryDark);
    }

    // await fs.writeFile(
    //     join(xamlDist, "catalog.json"),
    //     JSON.stringify(themesCatalog, null, "  "));

})().catch(console.error);

function lightToDark(color: string): string {
    const rgb: RGB = rgbFromHEXString(color);
    const hsl = rgbToHsl(rgb);
    const flippedHSL: HSL = {
        hue: hsl.hue,
        saturation: hsl.saturation,
        luminosity: 1 - hsl.luminosity, // 0.5 - hsl.luminosity
    };

    const flippedRGB = hslToRgb(flippedHSL);
    return rgbToHEXString(flippedRGB);
}

/**
 * Convert a single color channel (0 - 255) into double hex digits ("00" to "FF")
 */
function colorHEX(channel: number) {
    let hex = Math.round(channel).toString(16);
    if (hex.length == 1) {
        hex = "0" + hex;
    }
    return hex.toUpperCase();
}

/**
 * Parse a "#RRGGBB" string to {@link RGB} structure.
 * @param color
 */
function rgbFromHEXString(color: string) {
    return {
        red: Number.parseInt(color.substring(1, 3), 16),
        green: Number.parseInt(color.substring(3, 5), 16),
        blue: Number.parseInt(color.substring(5, 7), 16),
    };
}

/**
 * Convert {@link RGB} structure to "#RRGGBB" string
 */
function rgbToHEXString(rgb: RGB): string {
    return `#${colorHEX(rgb.red)}${colorHEX(rgb.green)}${colorHEX(rgb.blue)}`;
}

interface RGB {
    /**
     * Red component 0 - 255.
     */
    red: number;

    /**
     * Green component 0 - 255.
     */
    green: number;

    /**
     * Blue component 0 - 255.
     */
    blue: number;
}

interface HSL {
    /**
     * Hue, color on a color wheel 0 - 360 degree.
     */
    hue: number;

    /**
     * Saturation percentage 0 to 1
     */
    saturation: number;

    /**
     * Luminosity percentage 0 to 1
     */
    luminosity: number;
}

function rgbToHsl(rgb: RGB): HSL {
    const red = rgb.red / 255.0;
    const green = rgb.green / 255.0;
    const blue = rgb.blue / 255.0;

    const max = Math.max(Math.max(red, green), blue);
    const min = Math.min(Math.min(red, green), blue);

    const delta = max - min;

    let hue = 0.0;
    let saturation = 0.0;
    let luminosity = 0.0;

    if (delta > 0) {
        if (max == red) {
            hue = ((green - blue) / delta);
            if (hue < 0) {
                hue = hue + 6;
            }
        } if (max == green) {
            hue = ((blue - red) / delta) + 2;
        } else if (max == blue) {
            hue = ((red - green) / delta) + 4;
        }
        hue = hue * 60;
    }

    luminosity = (max + min) / 2.0;

    if (delta != 0) {
        saturation = delta / (1 - Math.abs(2 * luminosity - 1));
    }

    return { hue, saturation, luminosity };
}

// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
function hslToRgb(hsv: HSL): RGB {
    const hue = hsv.hue / 360.0;
    const { saturation, luminosity } = hsv;

    let red, green, blue;
    if (saturation === 0) {
        red = luminosity;
        green = luminosity;
        blue = luminosity;
    } else {
        const q = luminosity < 0.5 ? luminosity * (1 + saturation) : luminosity + saturation - luminosity * saturation;
        const p = 2.0 * luminosity - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }

    red *= Math.round(255);
    green *= Math.round(255);
    blue *= Math.round(255);

    function hueToRgb(p: number, q: number, _t: number): number {
        let t = _t;
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }

        return p;
    }

    return { red, green, blue };
}

async function parseKendoPalettesFile(_palettesPath: string): Promise<{ [paletteName: string]: { [colorName: string]: string; }; }> {
    const paletteMap: { [paletteName: string]: { [colorName: string]: string; }; } = {};

    const palettes = await fs.readFile(_palettesPath, "utf-8");
    let lastIndex = 0;

    const paletteStartRegEx = /^\$_default-([a-zA-Z-]*)\s*:\s*\(/gm;

    let paletteStart: RegExpExecArray | null;
    while (paletteStart = paletteStartRegEx.exec(palettes)) {
        const paletteName = "kendo-" + paletteStart[1];

        paletteMap[paletteName] = {};

        console.log(`// Palette ${paletteName}`);
        console.log(`const ${paletteName} = {`);

        lastIndex = paletteStartRegEx.lastIndex;

        // Read colors for the palette....
        const colorVariableRegEx = /\s*([a-zA-Z0-9-]*)\s*:\s*(#[0-9a-fA-F]*)\s*,?/gym;
        const paletteEndRegEx = /\s*\)\s*;/gym;

        while (true) {
            colorVariableRegEx.lastIndex = lastIndex;
            const colorVariable = colorVariableRegEx.exec(palettes);
            if (colorVariable) {
                lastIndex = colorVariableRegEx.lastIndex;
                const colorKey = colorVariable[1];
                const colorValue = colorVariable[2];

                paletteMap[paletteName][colorKey] = colorValue;

                console.log(`  ${colorKey}: ${colorValue},`);
                continue;
            }

            paletteEndRegEx.lastIndex = lastIndex;
            if (paletteEndRegEx.exec(palettes)) {
                console.log(`}\n`);
                break;
            }

            console.log(`Unexpected character at ${lastIndex}`);
            break;
        }
    }
    return paletteMap;
}

async function parseSwatchesAndCreateResourceDictionary( // eslint-disable-line max-params
        _swatchesPath: string,
        themeName: string,
        swatchName: string,
        paletteMap: { [paletteName: string]: { [colorName: string]: string; }; },
        colorFilter: (color: string) => string = (color) => color) {
    const swatches = await fs.readFile(_swatchesPath, "utf-8");

    const defaultColorsStartRegEx = /^\$_default-colors\s*:\s*\(\s*$/mg;

    let rd = "";

    const defaultColorsStart = defaultColorsStartRegEx.exec(swatches);
    if (defaultColorsStart) {
        const line = `<?xml version="1.0" encoding="utf-8" ?>
<?xaml-comp compile="true" ?>
<ResourceDictionary xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                    x:Class="Telerik.Theming.${themeName}.Swatches.${swatchName}">

    <!-- This is autogenerated file. Use as reference. Do not modify. -->`;

        console.log(line);
        rd += line + "\n";

        let lastIndex = defaultColorsStartRegEx.lastIndex;

        const commentRegEx = /\s*\/\/\s*(.*)\s*$/gym;
        const kendoPaletteLookupRegEx = /\s*([a-zA-Z-]*)\s*:\s*(k-map-get|map\.get)\s*\(\s*\$([a-zA-Z-]*)\s*,\s*([a-zA-Z\-0-9]*)\s*\)\s*,/gym;
        const filteredPaletteLookupRegEx = /\s*([a-zA-Z-]*)\s*:\s*([a-zA-Z-]*)\s*\(\s*(k-map-get|map\.get)\s*\(\s*\$([a-zA-Z-]*)\s*,\s*([a-zA-Z\-0-9]*)\s*\)\s*(,\s*([.a-zA-Z\-0-9]*))?\)\s*,/gym;

        const endOfMapRegEx = /\s*\)\s*(!default)?\s*;/gym;

        while (true) {
            let result: RegExpExecArray | null;

            commentRegEx.lastIndex = lastIndex;
            result = commentRegEx.exec(swatches);
            if (result) {
                lastIndex = commentRegEx.lastIndex;
                const comment = result[1].trim();

                const line = `\n    <!-- ${comment} -->`;
                console.log(line);
                rd += line + "\n";

                continue;
            }

            kendoPaletteLookupRegEx.lastIndex = lastIndex;
            result = kendoPaletteLookupRegEx.exec(swatches);
            if (result) {
                lastIndex = kendoPaletteLookupRegEx.lastIndex;
                const colorKey = result[1].trim();
                const paletteName = result[3].trim();
                const peletteColorKey = result[4].trim();

                let colorValue = paletteMap[paletteName][peletteColorKey].toUpperCase();
                colorValue = colorFilter(colorValue);

                const line = `    <Color x:Key="${kendoToRadColorNaming(colorKey)}">${colorValue}</Color>`;
                console.log(line);
                rd += line + "\n";

                continue;
            }

            filteredPaletteLookupRegEx.lastIndex = lastIndex;
            result = filteredPaletteLookupRegEx.exec(swatches);
            if (result) {
                lastIndex = filteredPaletteLookupRegEx.lastIndex;

                const colorKey = result[1].trim();

                const paletteName = result[4].trim();
                const peletteColorKey = result[5].trim();

                const filterName = result[2].trim();
                const filterArg = result[7]?.trim();

                let colorValue = paletteMap[paletteName][peletteColorKey].toUpperCase();

                switch (filterName) {
                    case "rgba":
                        if (!filterArg) {
                            console.log("Expected opacity for rgba filter.");
                        }
                        const opacity = Number.parseFloat(filterArg);
                        const alpha = colorHEX(opacity * 255);
                        colorValue = (colorValue[0] + alpha + colorValue.substring(1)).toUpperCase();
                        break;
                    default:
                        console.log(`Unknown filter function: ${filterName}!`);
                        continue;
                }

                colorValue = colorFilter(colorValue);
                const line = `    <Color x:Key="${kendoToRadColorNaming(colorKey)}">${colorValue}</Color>`;
                console.log(line);
                rd += line + "\n";

                continue;
            }

            endOfMapRegEx.lastIndex = lastIndex;
            result = endOfMapRegEx.exec(swatches);
            if (result) {
                lastIndex = endOfMapRegEx.lastIndex;

                const line = "\n</ResourceDictionary>";
                console.log(line);
                rd += line + "\n";

                break;
            }

            console.log("Unexpected character at " + lastIndex);
            break;
        }
    }
    return rd;
}

function kendoToRadColorNaming(name: string): string {
    return "Rad" + (name as any).replaceAll(/(^|-)([a-z])/g, (m: any) => m?.[1]?.toUpperCase() ?? m?.[0]?.toUpperCase() ?? "") + "Color";
}

function underline(title: string, char: string = "="): string {
    let underline = "";
    for (let i = 0; i < title.length; i++) {
        underline += char;
    }
    return underline;
}
