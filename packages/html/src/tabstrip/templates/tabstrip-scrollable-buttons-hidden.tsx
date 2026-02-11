import { TabStripNormal } from '../templates/tabstrip-normal';

export const TabStripScrollableButtonsHidden = ({ scrollingPosition = "start", ...other }: any) => (
    <TabStripNormal scrollable scrollButtons="hidden" scrollingPosition={scrollingPosition} {...other} />
);
