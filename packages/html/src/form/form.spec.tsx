import { classNames, optionClassNames, Size } from '../misc';
import { FormField } from './form-field';
import { Fieldset } from './fieldset';

export const FORM_CLASSNAME = 'k-form';

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoFormOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoFormProps = KendoFormOptions & {
    orientation?: string;
    layout?: string;
    formButtons?: React.JSX.Element | string;
    cols?: number;
    gapX?: number;
    gapY?: number;
    tag?: string;
    children?: React.JSX.Element | React.JSX.Element[];
};

const defaultProps = {
    size: Size.medium,
    layout: 'basic',
    tag: 'form'
};

export const Form = (
    props: KendoFormProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        orientation,
        layout = defaultProps.layout,
        formButtons,
        cols,
        gapX,
        gapY,
        tag = defaultProps.tag,
        children
    } = props;

    const Parent = ({ tag, className, children }) => ( tag === 'form' ? <form className={className}>{children}</form> : <div className={className}>{children}</div> );

    const formChildren: React.JSX.Element | React.JSX.Element[] = [];

    if (children) {
        if ( Array.isArray(children) ) {
            children.map( (child, index) => {
                if ( child.type === FormField ) {
                    formChildren.push(
                        <FormField {...child.props} orientation={orientation} key={index} />
                    );
                } else {
                    formChildren.push(child);
                }
            } );
        } else if ( children.type === FormField ) {
            formChildren.push( <FormField {...children.props} orientation={orientation} key={`${new Date().getTime()}`} /> );
        } else if (children.type === Fieldset) {
            formChildren.push(<Fieldset {...children.props} key={`${new Date().getTime()}`} />);
        }

    }

    return (
        <Parent tag={tag} className={classNames(
            props.className,
            FORM_CLASSNAME,
            optionClassNames(FORM_CLASSNAME, {
                size
            }),
            {
                [`${FORM_CLASSNAME}-${orientation}`]: orientation
            }
        )}>
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
                    {formChildren}
                </div>
                :
                <>{formChildren}</>
            }
            { formButtons &&
                <div className="k-form-buttons">
                    {formButtons}
                </div>
            }
        </Parent>
    );
};

Form.states = states;
Form.options = options;
Form.className = FORM_CLASSNAME;
Form.defaultProps = defaultProps;

export default Form;

