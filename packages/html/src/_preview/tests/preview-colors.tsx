const colorGroups: Record<string, string[]> = {
    "Misc": [
        "app-surface",
        "on-app-surface",
        "subtle",
        "surface",
        "surface-alt",
        "border",
        "border-alt",
    ],
    "Base": [
        "base-subtle",
        "base-subtle-hover",
        "base-subtle-active",
        "base",
        "base-hover",
        "base-active",
        "base-emphasis",
        "base-on-subtle",
        "on-base",
        "base-on-surface",
    ],
    "Primary": [
        "primary-subtle",
        "primary-subtle-hover",
        "primary-subtle-active",
        "primary",
        "primary-hover",
        "primary-active",
        "primary-emphasis",
        "primary-on-subtle",
        "on-primary",
        "primary-on-surface",
    ],
    "Secondary": [
        "secondary-subtle",
        "secondary-subtle-hover",
        "secondary-subtle-active",
        "secondary",
        "secondary-hover",
        "secondary-active",
        "secondary-emphasis",
        "secondary-on-subtle",
        "on-secondary",
        "secondary-on-surface",
    ],
    "Tertiary": [
        "tertiary-subtle",
        "tertiary-subtle-hover",
        "tertiary-subtle-active",
        "tertiary",
        "tertiary-hover",
        "tertiary-active",
        "tertiary-emphasis",
        "tertiary-on-subtle",
        "on-tertiary",
        "tertiary-on-surface",
    ],
    "Info": [
        "info-subtle",
        "info-subtle-hover",
        "info-subtle-active",
        "info",
        "info-hover",
        "info-active",
        "info-emphasis",
        "info-on-subtle",
        "on-info",
        "info-on-surface",
    ],
    "Success": [
        "success-subtle",
        "success-subtle-hover",
        "success-subtle-active",
        "success",
        "success-hover",
        "success-active",
        "success-emphasis",
        "success-on-subtle",
        "on-success",
        "success-on-surface",
    ],
    "Warning": [
        "warning-subtle",
        "warning-subtle-hover",
        "warning-subtle-active",
        "warning",
        "warning-hover",
        "warning-active",
        "warning-emphasis",
        "warning-on-subtle",
        "on-warning",
        "warning-on-surface",
    ],
    "Error": [
        "error-subtle",
        "error-subtle-hover",
        "error-subtle-active",
        "error",
        "error-hover",
        "error-active",
        "error-emphasis",
        "error-on-subtle",
        "on-error",
        "error-on-surface",
    ],
    "Inverse": [
        "inverse-subtle",
        "inverse-subtle-hover",
        "inverse-subtle-active",
        "inverse",
        "inverse-hover",
        "inverse-active",
        "inverse-emphasis",
        "inverse-on-subtle",
        "on-inverse",
        "inverse-on-surface",
    ],
    "Series A": [
        "series-a",
        "series-a-bold",
        "series-a-bolder",
        "series-a-subtle",
        "series-a-subtler",
    ],
    "Series B": [
        "series-b",
        "series-b-bold",
        "series-b-bolder",
        "series-b-subtle",
        "series-b-subtler",
    ],
    "Series C": [
        "series-c",
        "series-c-bold",
        "series-c-bolder",
        "series-c-subtle",
        "series-c-subtler",
    ],
    "Series D": [
        "series-d",
        "series-d-bold",
        "series-d-bolder",
        "series-d-subtle",
        "series-d-subtler",
    ],
    "Series E": [
        "series-e",
        "series-e-bold",
        "series-e-bolder",
        "series-e-subtle",
        "series-e-subtler",
    ],
    "Series F": [
        "series-f",
        "series-f-bold",
        "series-f-bolder",
        "series-f-subtle",
        "series-f-subtler",
    ],
};

const style = `
    #test-area {
        max-width: unset;
        padding: 20px;
    }

    .color-group {
        margin-bottom: 32px;
    }

    .color-group-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--kendo-color-border, rgba(0, 0, 0, 0.08));
    }

    .color-grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 8px;
    }

    .series-groups {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .series-groups .color-grid {
        grid-template-columns: repeat(5, 1fr);
    }

    .color-swatch {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--kendo-color-border, rgba(0, 0, 0, 0.08));
        border-radius: 6px;
        overflow: hidden;
    }

    .color-swatch-preview {
        height: 60px;
    }

    .color-swatch-info {
        padding: 8px 10px;
        font-size: 12px;
        line-height: 1.4;
        background: var(--kendo-color-surface-alt, #fff);
    }

    .color-swatch-name {
        font-weight: 600;
        word-break: break-all;
    }

    .color-swatch-var {
        color: var(--kendo-color-subtle, #666);
        word-break: break-all;
        font-family: monospace;
        font-size: 11px;
    }
`;

const ColorSwatch = ({ name }: { name: string }) => {
    const cssVar = `--kendo-color-${name}`;
    return (
        <div className="color-swatch">
            <div
                className="color-swatch-preview"
                style={{ backgroundColor: `var(${cssVar})` }}
            />
            <div className="color-swatch-info">
                <div className="color-swatch-name">{name}</div>
                <div className="color-swatch-var">{cssVar}</div>
            </div>
        </div>
    );
};

const isSeries = (name: string) => name.startsWith("Series");

export default () => {
    const entries = Object.entries(colorGroups);
    const regular = entries.filter(([ name ]) => !isSeries(name));
    const series = entries.filter(([ name ]) => isSeries(name));

    return (
        <>
            <style>{style}</style>
            <div id="test-area">
                {regular.map(([ groupName, colors ]) => (
                    <div className="color-group" key={groupName}>
                        <div className="color-group-title">{groupName}</div>
                        <div className="color-grid">
                            {colors.map((color) => (
                                <ColorSwatch key={color} name={color} />
                            ))}
                        </div>
                    </div>
                ))}
                <div className="series-groups">
                    {series.map(([ groupName, colors ]) => (
                        <div className="color-group" key={groupName}>
                            <div className="color-group-title">{groupName}</div>
                            <div className="color-grid">
                                {colors.map((color) => (
                                    <ColorSwatch key={color} name={color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
