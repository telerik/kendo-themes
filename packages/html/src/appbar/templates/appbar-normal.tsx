import { Appbar, AppbarSection } from '../../appbar';
import { Icon } from '../../icon';

export const AppbarNormal = (props) => (
    <Appbar children={
        <>
            <AppbarSection>
                <Icon icon="menu" />
            </AppbarSection>
            <span className="k-spacer k-spacer-sized"></span>
            <AppbarSection>
                <h1 className="title">Page Title</h1>
            </AppbarSection>
            <AppbarSection>
                <ul>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                </ul>
            </AppbarSection>
            <span className="k-spacer"></span>
            <AppbarSection>
                <Icon icon="bell" />
                <span className="k-appbar-separator"></span>
                <Icon icon="user" />
            </AppbarSection>
        </>
    }
    {...props} >
    </Appbar>
);
