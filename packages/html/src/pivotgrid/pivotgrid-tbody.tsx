import { classNames } from '../misc';

export const PIVOTGRIDTBODY_CLASSNAME = `k-pivotgrid-tbody`;

const states = [];

const options = {};

const defaultProps = {};

export const PivotGridTbody = (
    props: React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <tbody
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDTBODY_CLASSNAME,
            )}>
            {children}
        </tbody>
    );
};

PivotGridTbody.states = states;
PivotGridTbody.options = options;
PivotGridTbody.className = PIVOTGRIDTBODY_CLASSNAME;
PivotGridTbody.defaultProps = defaultProps;

export default PivotGridTbody;
