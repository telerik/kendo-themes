import { classNames, optionClassNames, Size } from '../misc';
import { FormField } from './form-field';
import { Fieldset } from './fieldset';

import { KendoComponent } from '../_types/component';
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
    gutters?: string | { rows?: string; cols?: string };
    tag?: string;
    children?: React.JSX.Element | React.JSX.Element[];
};

const defaultOptions = {
    size: Size.medium,
    layout: 'basic',
    tag: 'form'
};

export const Form: KendoComponent<KendoFormProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFormProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        orientation,
        layout = defaultOptions.layout,
        formButtons,
        cols,
        gutters,
        tag = defaultOptions.tag,
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
                        [`k-grid-cols-${cols}`]: cols
                    }
                )} style={{
                    ...(typeof gutters === 'string' && { gap: gutters }),
                    ...(typeof gutters === 'object' && gutters.rows && { rowGap: gutters.rows }),
                    ...(typeof gutters === 'object' && gutters.cols && { columnGap: gutters.cols })
                }}>
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
Form.defaultOptions = defaultOptions;

export default Form;

