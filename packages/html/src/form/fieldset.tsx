import { classNames } from '../misc';

export const FIELDSET_CLASSNAME = 'k-form-fieldset';

export type KendoFieldsetProps = {
    legend?: null | string;
    layout?: null | string;
    cols?: number;
    gapX?: number;
    gapY?: number;
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
        gapX,
        gapY,
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
                        [`k-gap-x-${gapX}`]: gapX,
                        [`k-gap-y-${gapY}`]: gapY
                    }
                )}>
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

