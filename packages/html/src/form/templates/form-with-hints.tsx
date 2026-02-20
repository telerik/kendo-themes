import { Form, FormField } from "..";
import { Checkbox } from "../../checkbox";
import { DateInput } from "../../dateinput";
import { MaskedTextbox } from "../../maskedtextbox";
import { NumericTextbox } from "../../numerictextbox";
import { Switch } from "../../switch";
import { Textarea } from "../../textarea";
import { Textbox } from "../../textbox";

export const FormWithHints = (props: any) => {
    const { size, children, ...other } = props;
    return (
        <Form size={size} {...other}>
            { children ||
                <>
                    <FormField
                        editorId="name"
                        label="Name:"
                        hint="Enter your full name"
                        editor={<Textbox size={size} id="name" aria-describedby="name-hint" />}
                    />
                    <FormField
                        editorId="email"
                        label="Email:"
                        error="Invalid email address"
                        editor={<Textbox size={size} id="email" invalid aria-describedby="email-error" />}
                    />
                    <FormField
                        editorId="bio"
                        label="Bio:"
                        hint="Tell us about yourself"
                        editor={<Textarea size={size} id="bio" aria-describedby="bio-hint" />}
                    />
                    <FormField
                        editorId="phone"
                        label="Phone:"
                        hint="(000) 000-0000"
                        editor={<MaskedTextbox size={size} id="phone" aria-describedby="phone-hint" />}
                    />
                    <FormField
                        editorId="age"
                        label="Age:"
                        error="Must be 18 or older"
                        editor={<NumericTextbox size={size} id="age" invalid aria-describedby="age-error" />}
                    />
                    <FormField
                        editorId="dob"
                        label="Date of birth:"
                        hint="MM/DD/YYYY"
                        editor={<DateInput size={size} id="dob" aria-describedby="dob-hint" />}
                    />
                    <FormField
                        editorId="terms"
                        label="Terms:"
                        hint="You must agree to continue"
                        editor={<Checkbox id="terms" aria-describedby="terms-hint" />}
                    />
                    <FormField
                        editorId="notify"
                        label="Notifications:"
                        hint="Enable email notifications"
                        editor={<Switch aria-label="Notifications" aria-describedby="notify-hint" />}
                    />
                </>
            }
        </Form>
    );
};
