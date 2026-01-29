import { Chip } from "../../chip";

export const ChipStandalone = (props) => (
    <div {...props}>
        <Chip text="Standalone Chip" />
        <Chip text="Info Chip" themeColor="info" />
        <Chip text="Selected Chip" selected />
        <Chip text="Selected Info" themeColor="info" selected />
        <Chip text="Icon Chip" icon="star" />
        <Chip text="Selected Icon" icon="star" selected />
        <Chip text="Disabled" disabled />
        <Chip text="Disabled Selected" disabled selected />
    </div>
);
