import Switch from "../switch.spec";

export const SwitchNormal = (props) => (
    <Switch
        onLabel="On"
        offLabel="Off"
        {...props}
        aria-label={props['aria-label'] || "Toggle switch"}
    />
);
