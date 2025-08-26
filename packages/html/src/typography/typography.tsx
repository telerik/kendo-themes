import { classNames } from '../misc';

const states = [];

const options = {};

export type KendoTypographyProps = {
    type: 'body' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'pre' | 'div';
};

export const Typography = (
    props: KendoTypographyProps &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        type,
        ...other
    } = props;

    const Component = type as React.ElementType;

    return (
        <Component
            {...other}
            className={classNames(
                props.className,
            )}>
            {props.children}
        </Component>
    );
};

Typography.states = states;
Typography.options = options;

export default Typography;
