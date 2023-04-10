import { classNames, optionClassNames, Size } from '../utils';
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
    formButtons?: JSX.Element | string;
    legend?: null | string;
    cols?: number;
    gapX?: number;
    gapY?: number;
    tag?: string;
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
        legend,
        cols,
        gapX,
        gapY,
        tag = defaultProps.tag,
    } = props;

    const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

    const Parent = ({ tag, className, children }) => ( tag === 'form' ? <form className={className}>{children}</form> : <div className={className}>{children}</div> );

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
            <ConditionalWrapper
                condition={layout === 'grid'}
                wrapper={children =>
                    <Fieldset legend={legend}>
                        <div className={classNames(
                            'k-form-layout',
                            'k-d-grid',
                            {
                                [`k-grid-cols-${cols}`]: cols,
                                [`k-gap-x-${gapX}`]: gapX,
                                [`k-gap-y-${gapY}`]: gapY
                            }
                        )}>
                            {children}
                        </div>
                    </Fieldset>
                }
            >
                {props.children}
            </ConditionalWrapper>
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

