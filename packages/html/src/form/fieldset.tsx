import { classNames, responsiveClassNames } from '../misc';

export const FIELDSET_CLASSNAME = 'k-form-fieldset';

export type KendoFieldsetProps = {
    legend?: null | string;
    layout?: null | string;
    cols?: string | number | Array<Record<string, number | string>>;
    gapX?: string | number | Array<Record<string, number | string>>;
    gapY?: string | number | Array<Record<string, number | string>>;
    colSpan?: string | number | Array<Record<string, number | string>>;
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

    const formGridClasses: string[] = [
        ...(cols ? responsiveClassNames('k-grid-cols', cols) : []),
        ...(gapX ? responsiveClassNames('k-gap-x', gapX) : []),
        ...(gapY ? responsiveClassNames('k-gap-y', gapY) : []),
    ];

    return (
        <fieldset className={classNames(
                    FIELDSET_CLASSNAME,
                    ...(colSpan ? responsiveClassNames('k-col-span', colSpan) : [])
            )}>
            { legend && <legend className="k-form-legend">{legend}</legend> }
            { layout === 'grid' ?
                <div className={classNames(
                    'k-form-layout',
                    'k-d-grid',
                    ...formGridClasses
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

