import { classNames } from '../misc';

const className = `k-list-content`;

export type KendoListContentProps = {
    virtualization?: boolean;
    role?: string;
    ulRole?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-multiselectable'?: 'true' | 'false';
};

export const ListContent = (
    props: KendoListContentProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        virtualization,
        role,
        ulRole,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-multiselectable': ariaMultiselectable,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(className, props.className)}
            {...(role && { role })}
            {...(!ulRole && ariaLabel && { 'aria-label': ariaLabel })}
            {...(!ulRole && ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
            {...(!ulRole && ariaMultiselectable && { 'aria-multiselectable': ariaMultiselectable })}
        >
            <ul
                className={classNames('k-list-ul')}
                {...(ulRole && { role: ulRole })}
                {...(ulRole && ariaLabel && { 'aria-label': ariaLabel })}
                {...(ulRole && ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
                {...(ulRole && ariaMultiselectable && { 'aria-multiselectable': ariaMultiselectable })}
            >
                {props.children}
            </ul>
            { virtualization && <div className="k-height-container"><div></div></div> }
        </div>
    );
};
