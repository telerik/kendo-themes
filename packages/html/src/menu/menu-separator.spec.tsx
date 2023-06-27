import { classNames } from '../misc';

export const SEPARATOR_CLASSNAME = `k-separator`;

export type KendoMenuSeparatorProps = {
    orientation?: 'horizontal' | 'vertical';
};

const defaultProps = {
    orientation: 'horizontal'
};

export const MenuSeparator = (
    props: KendoMenuSeparatorProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        orientation = defaultProps.orientation,
        ...other
    } = props;

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                "k-item",
                SEPARATOR_CLASSNAME,
                {
                    [`${SEPARATOR_CLASSNAME}-${orientation}`]: orientation
                }
            )}>
        </li>
    );
};

export default MenuSeparator;
