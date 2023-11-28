import { classNames } from '../misc';

export const ORGCHART_CLASSNAME = `k-orgchart`;

const states = [];

const options = {};

export type KendoOrgchartProps = {
    width?: string;
    height?: string;
};

const defaultProps = {
    width: '100%',
    height: '300px',
};

export const Orgchart = (
    props: KendoOrgchartProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        width = defaultProps.width,
        height = defaultProps.height,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ORGCHART_CLASSNAME,
            )}>

            <div className="k-orgchart-container" style={{ width: width, height: height }}>
                {props.children}
            </div>
        </div>
    );
};

Orgchart.states = states;
Orgchart.options = options;
Orgchart.className = ORGCHART_CLASSNAME;
Orgchart.defaultProps = defaultProps;

export default Orgchart;
