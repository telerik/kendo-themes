import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Layout, KendoLayoutProps } from './layout';

export const GRIDLAYOUT_CLASSNAME = `k-grid-layout`;

const states = [];

const options = {};

export type KendoGridLayoutProps = KendoLayoutProps & {};

export const GridLayout: KendoComponent<KendoGridLayoutProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridLayoutProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        className,
        ...other
    } = props;

    return (
        <Layout
            {...other}
            className={classNames(
                className,
                GRIDLAYOUT_CLASSNAME
            )}>
            {props.children}
        </Layout>
    );
};

GridLayout.states = states;
GridLayout.options = options;
GridLayout.className = GRIDLAYOUT_CLASSNAME;

export default GridLayout;
