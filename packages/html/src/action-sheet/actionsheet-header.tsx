import { Button } from '../button';
import { Searchbox } from '../searchbox';
import { classNames } from '../utils';

export const ACTIONSHEETHEADER_CLASSNAME = `k-actionsheet-titlebar`;

export type KendoActionSheetHeaderProps = {
    title?: string;
    subTitle?: string;
    actions?: string[];
    filter?: boolean;
}

export const ActionSheetHeader = (
    props: KendoActionSheetHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subTitle,
        actions,
        filter,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ACTIONSHEETHEADER_CLASSNAME
            )}>
            <>
                <div className="k-actionsheet-titlebar-group k-hbox">
                    {!props.children && (title || subTitle) && <>
                        <div className="k-actionsheet-title">
                            {title !== '' && <div className="k-text-center">{title}</div>}
                            {subTitle !== '' && <div className="k-actionsheet-subtitle k-text-center">{subTitle}</div>}
                        </div>
                    </>}
                    {props.children && <div className="k-actionsheet-title">{props.children}</div>}
                    {actions && <>
                        <div className="k-actionsheet-actions">
                            {actions.map(actionName => <Button key={actionName} icon={actionName} size="large" fillMode="flat"></Button>)}
                        </div>
                    </>}
                </div>
                {filter && <>
                    <div className="k-actionsheet-titlebar-group k-actionsheet-filter">
                        <Searchbox placeholder="Filter" size="large" />
                    </div>
                </>}
            </>
        </div>
    );
};
