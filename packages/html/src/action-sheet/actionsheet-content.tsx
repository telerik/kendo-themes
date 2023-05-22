import { Button } from '../button';
import { classNames } from '../misc';

export const ACTIONSHEETCONTENT_CLASSNAME = `k-actionsheet-titlebar`;

export type KendoActionSheetContentProps = {
    title?: string;
    subTitle?: string;
    actions?: string[];
}

export const ActionSheetContent = (
    props: KendoActionSheetContentProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subTitle,
        actions,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ACTIONSHEETCONTENT_CLASSNAME
            )}>
            <>
                {!props.children && (title || subTitle) && <>
                    <div className="k-actionsheet-title">
                        {title !== '' && <div>{title}</div>}
                        {subTitle !== '' && <div>{subTitle}</div>}
                    </div>
                </>}
                {props.children && <div className="k-actionsheet-title">{props.children}</div>}
                {actions && <>
                    <div className="k-actionsheet-actions">
                        {actions.map(actionName => <Button key={actionName} icon={actionName} fillMode="flat"></Button>)}
                    </div>
                </>}
            </>
        </div>
    );
};
