import { classNames } from '../utils';

const states = [];

const options = {};

export type KendoTypographyProps = {
    type: 'body' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'pre' | 'display-1' | 'display-2' | 'display-3' | 'display-4';

};

export const Typography = (
    props: KendoTypographyProps &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        type,
        ...other
    } = props;

    const typeClass = type === 'p' ? 'paragraph' : type;
    const Component = type.includes('display') ? 'div' : type as React.ElementType;

    return (
        <Component
            {...other}
            className={classNames(
                props.className,
                {
                    [`k-${typeClass}`]: type,
                }
            )}>
            {props.children}
        </Component>
    );
};

Typography.states = states;
Typography.options = options;

export default Typography;
