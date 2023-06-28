import { Button, TextButton } from "../../button";
import { DatePicker } from "../../datepicker";
import { DropdownList } from "../../dropdownlist";

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(6, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <h4>Button</h4>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Active</span>
            <span>Selected</span>
            <span>Disabled</span>
            {[ "base", "primary" ].map((themeColor) => (
                <>
                    <span>{themeColor}</span>
                    {[ "normal", ...Button.states ].map((state) => (
                        <>
                            <span>
                                <TextButton fillMode="solid" themeColor={themeColor} {...{ [state]: true }}>
                  Button
                                </TextButton>
                            </span>
                        </>
                    ))}
                </>
            ))}
            <span></span>
            <span>Outline</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {[ "base", "primary" ].map((themeColor) => (
                <>
                    <span>{themeColor}</span>
                    {[ "normal", ...Button.states ].map((state) => (
                        <>
                            <span>
                                <TextButton fillMode="outline" themeColor={themeColor} {...{ [state]: true }}>
                  Button
                                </TextButton>
                            </span>
                        </>
                    ))}
                </>
            ))}
            <span></span>
            <span>Flat</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {[ "base", "primary" ].map((themeColor) => (
                <>
                    <span>{themeColor}</span>
                    {[ "normal", ...Button.states ].map((state) => (
                        <>
                            <span>
                                <TextButton fillMode="flat" themeColor={themeColor} {...{ [state]: true }}>
                  Button
                                </TextButton>
                            </span>
                        </>
                    ))}
                </>
            ))}
        </div>
        <h4>Input (Picker)</h4>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Invalid</span>
            <span>Invalid Focus</span>
            <span>Disabled</span>
            {[ "solid", "outline", "flat" ].map((fillMode) => (
                <>
                    <span>{fillMode}</span>
                    {[ "normal", "hover", "focus", "invalid", [ "invalid", "focus" ], "disabled" ].map((state) => (
                        <>
                            <span>
                                <DatePicker
                                    fillMode={fillMode as any}
                                    value="1/21/2021"
                                    {...(Array.isArray(state)
                                        ? state.reduce(
                                            (acc, current) => ({
                                                ...acc,
                                                [current]: true,
                                            }),
                                            {}
                                        )
                                        : { [state]: true })}
                                />
                            </span>
                        </>
                    ))}
                </>
            ))}
        </div>
        <h4>Dropdown</h4>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Invalid</span>
            <span>Invalid Focus</span>
            <span>Disabled</span>
            {[ "solid", "outline", "flat" ].map((fillMode) => (
                <>
                    <span>{fillMode}</span>
                    {[ "normal", "hover", "focus", "invalid", [ "invalid", "focus" ], "disabled" ].map((state) => (
                        <>
                            <span>
                                <DropdownList
                                    fillMode={fillMode as any}
                                    value="Dropdown List"
                                    {...(Array.isArray(state)
                                        ? state.reduce(
                                            (acc, current) => ({
                                                ...acc,
                                                [current]: true,
                                            }),
                                            {}
                                        )
                                        : { [state]: true })}
                                />
                            </span>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
