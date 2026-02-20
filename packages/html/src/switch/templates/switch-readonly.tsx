import Switch from "../switch.spec";

export const SwitchReadonly = (props) => (
    <Switch
        readonly
        onLabel="On"
        offLabel="Off"
        aria-label={props['aria-label'] || "Read-only switch"}
        {...props}
    />
);
