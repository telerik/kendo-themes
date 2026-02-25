import Switch from "../switch.spec";

export const SwitchDisabled = (props) => (
    <Switch
        disabled
        onLabel="On"
        offLabel="Off"
        aria-label={props['aria-label'] || "Disabled switch"}
        {...props}
    />
);
