import ActionButtons from '../action-buttons/action-buttons.spec';
import { Button } from '../button';
import { classNames } from '../misc';

export const ACTIONSHEETFOOTER_CLASSNAME = `k-actionsheet-footer`;

export type KendoActionSheetFooterProps = {
    actions?: string[];
}

export const ActionSheetFooter = (
    props: KendoActionSheetFooterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        actions,
        ...other
    } = props;

    return (
        <ActionButtons
            {...other}
            className={classNames(
                props.className,
                ACTIONSHEETFOOTER_CLASSNAME
            )}
            alignment="stretched">
            <>
                {actions && actions.map( (action, index) => {
                    if (action === '|') {
                        return <span key={index} className="k-separator"></span>;
                    }
                    if (action === ' ') {
                        return <span key={index} className="k-spacer"></span>;
                    }

                    const importantFlag = action.startsWith('!');
                    const actionName = importantFlag ? action.substring(1) : action;

                    return <Button key={index} text={actionName} size="large" themeColor={importantFlag ? 'primary' : 'base'} />;
                })}
                {!actions && props.children}
            </>
        </ActionButtons>
    );
};
