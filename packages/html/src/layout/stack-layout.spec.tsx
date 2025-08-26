import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Layout, KendoLayoutProps } from './layout';

export const STACKLAYOUT_CLASSNAME = `k-stack-layout`;

const states = [];

const options = {};

export type KendoStackLayoutProps = KendoLayoutProps & {};

export const StackLayout: KendoComponent<KendoStackLayoutProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoStackLayoutProps &
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
                STACKLAYOUT_CLASSNAME
            )}>
            {props.children}
        </Layout>
    );
};

StackLayout.states = states;
StackLayout.options = options;
StackLayout.className = STACKLAYOUT_CLASSNAME;

export default StackLayout;
