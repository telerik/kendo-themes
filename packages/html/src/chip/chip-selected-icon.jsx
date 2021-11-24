import { IconStatic } from '../icon/index';

function ChipSelectedIconStatic(chipProps) {

    const {
        className: ownClassName,

        showSelectedIcon,

        selected,

        aria,
        legacy
    } = chipProps;

    if (!showSelectedIcon || !selected) {
        return <></>;
    }

    let ariaAttr = aria
        ? {}
        : {};

    let iconClasses = [
        ownClassName,
        'k-selected-icon',
        'k-chip-icon'
    ];

    let legacyClasses = [
        ownClassName,
        'k-chip-selected-icon'
    ];

    if (legacy) {
        return (
            <span className="k-selected-icon-wrapper">
                <IconStatic name="check" className={legacyClasses} {...ariaAttr} />
            </span>
        );
    }

    return ("");

}

export { ChipSelectedIconStatic };
