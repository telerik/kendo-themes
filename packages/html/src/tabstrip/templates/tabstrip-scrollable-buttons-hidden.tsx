import { TabStripNormal } from "..";

export const TabStripScrollableButtonsHidden = ({ scrollingPosition = "start", ...other }: any) => (
    <TabStripNormal scrollable scrollButtons="hidden" scrollingPosition={scrollingPosition} {...other} />
);
