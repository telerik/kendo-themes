import { IconStatic } from '../icon/index';

function ChipRemoveIconStatic(chipProps) {

    const {
        className: ownClassName,

        showRemoveIcon,

        aria,
        legacy
    } = chipProps;

    if (!showRemoveIcon) {
        return <></>;
    }

    let ariaAttr = aria
        ? {}
        : {};

    let iconClasses = [
        ownClassName,
        'k-chip-remove-icon',
        'k-chip-icon'
    ];

    let legacyClasses = [
        ownClassName,
        'k-remove-icon'
    ];

    if (legacy) {
        return (
            <IconStatic className={legacyClasses} name="x-circle" {...ariaAttr} />
        );
    }

    return (
        <IconStatic className={iconClasses} name="x-circle" {...ariaAttr} />
    );

}

export { ChipRemoveIconStatic };
