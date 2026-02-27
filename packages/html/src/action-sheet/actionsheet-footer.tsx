import { classNames } from '../misc';
import { ActionButtons } from '../action-buttons';
import { KendoBaseProps } from '../_types/component';

export const ACTIONSHEETFOOTER_CLASSNAME = `k-actionsheet-footer`;

export type KendoActionSheetFooterProps = {
    alignment?: 'start' | 'center' | 'end' | 'stretched' | 'justify';
    orientation?: 'horizontal' | 'vertical';
    template?: boolean;
}

const defaultOptions = {
    alignment: 'stretched',
    orientation: 'horizontal'
} as KendoActionSheetFooterProps;

export const ActionSheetFooter = (
    props: KendoActionSheetFooterProps &
        KendoBaseProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        alignment = defaultOptions.alignment,
        orientation = defaultOptions.orientation,
        template,
        as: Component = template ? "div" : ActionButtons,
        ...other
    } = props;

    return (
        <Component
            {...other}
            {...(!template && { alignment, orientation })}
            className={classNames(
                props.className,
                ACTIONSHEETFOOTER_CLASSNAME
            )}
        >
            {props.children}
        </Component>
    );
};
