import { classNames } from "../misc";
import { KendoComponent } from "../misc/component-props";

export const FORM_BUTTONS_CLASSNAME = "k-form-buttons";

export type FormButtonsProps = object;

export const FormButtons: KendoComponent<"div", FormButtonsProps> = (props) => {
    const { as: Component = "div", ...other } = props;

    return <Component {...other} className={classNames(FORM_BUTTONS_CLASSNAME, props.className)} />;
};

FormButtons.className = FORM_BUTTONS_CLASSNAME;
