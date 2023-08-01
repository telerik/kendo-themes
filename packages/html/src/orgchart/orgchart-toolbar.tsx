import { Toolbar } from '../toolbar';
import { classNames } from '../misc';

export const ORGCHARTTOOLBAR_CLASSNAME = `k-orgchart-toolbar`;

export type KendoOrgchartToolbarProps = {
    resizable?: boolean;
}

export const OrgchartToolbar = (
    props: KendoOrgchartToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        resizable,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                ORGCHARTTOOLBAR_CLASSNAME,
            )} resizable={resizable}>
            {props.children}
        </Toolbar>
    );
};
