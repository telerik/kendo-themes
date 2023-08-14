import { classNames, ComponentSlot, componentSlot, optionClassNames, Size } from "../misc";
import { KendoComponent } from "../misc/component-props";
import { FormButtons, FormButtonsProps } from "./form-buttons.spec";

export const FORM_CLASSNAME = "k-form";

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoFormOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoFormProps = KendoFormOptions & {
  orientation?: string;
  FormButtons?: ComponentSlot<FormButtonsProps>;
  children?: JSX.Element | JSX.Element[];
};

const defaultProps = {
    size: Size.medium,
    FormButtons: FormButtons,
};

export const Form: KendoComponent<"form", KendoFormProps> = (props) => {
    const { as: Component = "form", size = defaultProps.size, orientation } = props;

    const [ FormButtons, FormButtonProps ] = componentSlot<FormButtonsProps>(props.FormButtons || defaultProps.FormButtons);

    return (
        <Component
            className={classNames(
                props.className,
                FORM_CLASSNAME,
                optionClassNames(FORM_CLASSNAME, {
                    size,
                }),
                {
                    [`${FORM_CLASSNAME}-${orientation}`]: orientation,
                }
            )}
        >
            {props.children}
            <FormButtons {...FormButtonProps} />
        </Component>
    );
};

Form.states = states;
Form.options = options;
Form.className = FORM_CLASSNAME;
Form.defaultProps = defaultProps;

export default Form;
