import { classNames } from '../misc';

export const DIALOG_WRAPPER_CLASSNAME = `k-dialog-wrapper`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDialogContainerOptions = {};

export type KendoDialogContainerProps = KendoDialogContainerOptions & {};

export const DialogContainer = (
    props: KendoDialogContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DIALOG_WRAPPER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

DialogContainer.states = states;
DialogContainer.options = options;
DialogContainer.className = DIALOG_WRAPPER_CLASSNAME;
DialogContainer.defaultOptions = defaultOptions;

export default DialogContainer;
