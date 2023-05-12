import { classNames } from '../misc';

export const FIELDSET_CLASSNAME = 'k-form-fieldset';

export type KendoFieldsetProps = {
    legend?: null | string;
};

export const Fieldset = (
    props: KendoFieldsetProps &
        React.HTMLAttributes<HTMLFieldSetElement>
) => {
    const {
        legend,
    } = props;

    return (
        <fieldset className={classNames(FIELDSET_CLASSNAME)}>
            { legend && <legend className="k-form-legend">{legend}</legend> }
            {props.children}
        </fieldset>
    );
};

Fieldset.className = FIELDSET_CLASSNAME;

export default Fieldset;

