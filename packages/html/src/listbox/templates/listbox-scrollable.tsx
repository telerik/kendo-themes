import { ListBoxNormal } from './listbox-normal';

export const ListBoxScrollable = ({ actionsScrollingPosition = 'start', ...props }) => (
    <ListBoxNormal actionsScrollable actionsScrollingPosition={actionsScrollingPosition} {...props} />
);
