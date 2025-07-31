import { classNames } from '../misc';

export const FIELDSET_CLASSNAME = 'k-form-fieldset';

export type KendoFieldsetProps = {
    legend?: null | string;
    layout?: null | string;
    cols?: number;
    gutters?: string | { rows?: string; cols?: string };
    colSpan?: string | number;
};

export const Fieldset = (
    props: KendoFieldsetProps &
        React.HTMLAttributes<HTMLFieldSetElement>
) => {
    const {
        legend,
        layout,
        cols,
        gutters,
        colSpan
    } = props;

    return (
        <fieldset className={classNames(
            FIELDSET_CLASSNAME,
            {
                [`k-col-span-${colSpan}`]: colSpan
            }
        )}>
            { legend && <legend className="k-form-legend">{legend}</legend> }
            { layout === 'grid' ?
                <div className={classNames(
                    'k-form-layout',
                    'k-d-grid',
                    {
                        [`k-grid-cols-${cols}`]: cols,
                    }
                )} style={{
                    ...(typeof gutters === 'string' && { gap: gutters }),
                    ...(typeof gutters === 'object' && gutters.rows && { rowGap: gutters.rows }),
                    ...(typeof gutters === 'object' && gutters.cols && { columnGap: gutters.cols })
                }}>
                    {props.children}
                </div>
                :
                <>{props.children}</>
            }
        </fieldset>
    );
};

Fieldset.className = FIELDSET_CLASSNAME;

export default Fieldset;

