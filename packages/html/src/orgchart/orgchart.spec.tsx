import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const ORGCHART_CLASSNAME = `k-orgchart`;

const states = [];

const options = {};

export type KendoOrgchartProps = {
    width?: string;
    height?: string;
};

const defaultOptions = {
    width: '100%',
    height: '300px',
};

export const Orgchart: KendoComponent<KendoOrgchartProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoOrgchartProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        width = defaultOptions.width,
        height = defaultOptions.height,
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
Orgchart.defaultOptions = defaultOptions;
Orgchart.moduleName = "orgchart";
Orgchart.folderName = "orgchart";

export default Orgchart;
