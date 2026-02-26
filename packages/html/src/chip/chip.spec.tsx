import { Icon } from '../icon';
import { Avatar } from '../avatar';
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHIP_FOLDER_NAME, CHIP_MODULE_NAME } from './constants';
export const CHIP_CLASSNAME = `k-chip`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.outline, ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info
    ]
};

export type KendoChipOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoChipProps = KendoChipOptions & {
    text?: string;
    icon?: string;
    actions?: React.JSX.Element | string;
    showAvatar?: boolean;
    avatarImage?: string;
};

export type KendoChipState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    avatarImage: "/packages/html/assets/avatar.jpg"
};

export const Chip: KendoComponent<KendoChipProps & KendoChipState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoChipProps &
        KendoChipState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        themeColor,
        text,
        icon,
        actions,
        showAvatar,
        avatarImage = defaultOptions.avatarImage,
        hover,
        focus,
        active,
        selected,
        disabled,
        ...other
    } = props;

    return (
        <div
            { ...other }
            className={classNames(
                props.className,
                CHIP_CLASSNAME,
                optionClassNames(CHIP_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                    themeColor,
                }),
                stateClassNames(CHIP_CLASSNAME, {
                    hover,
                    focus,
                    active,
                    disabled,
                    selected,
                }),
            )}
            role={props.role || 'button'}
            aria-pressed={props.role === 'option' ? undefined : (selected ? 'true' : 'false')}
            aria-selected={props.role === 'option' ? (selected ? 'true' : 'false') : undefined}
            aria-disabled={disabled ? 'true' : undefined}
        >
            {icon && <Icon className="k-chip-icon" icon={icon} size="small" /> }
            {showAvatar && (
                <Avatar className="k-chip-avatar" type="image" >
                    <img src={avatarImage} alt="" />
                </Avatar>
            )}
            <span className="k-chip-content">
                { props.children
                    ? props.children
                    : text && <span className="k-chip-label">{text}</span>
                }
            </span>
            { actions && (
                <span className="k-chip-actions">
                    {actions}
                </span>
            )}
        </div>
    );
};

Chip.states = states;
Chip.options = options;
Chip.className = CHIP_CLASSNAME;
Chip.defaultOptions = defaultOptions;
Chip.moduleName = CHIP_MODULE_NAME;
Chip.folderName = CHIP_FOLDER_NAME;

/**
 * Accessibility specification for Chip (standalone, outside of ChipList).
 *
 * @wcag 4.1.2 Name, Role, Value - button pattern with toggle
 */
Chip.ariaSpec = {
    selector: '.k-chip',
    rules: [
        { selector: '*:not(.k-chip-list) > .k-chip', attribute: 'role=button', usage: 'Announces that the chip acts as a button when standalone.' },
        { selector: '*:not(.k-chip-list) > .k-chip.k-selected', attribute: 'aria-pressed=true', usage: 'Announces that the Chip has been selected.' },
        { selector: '*:not(.k-chip-list) > .k-chip:not(.k-selected)', attribute: 'aria-pressed=false', usage: 'Announces that the Chip has not been selected.' },
        { selector: '.k-chip', attribute: 'aria-disabled=true (when disabled)', usage: 'Announces that the Chip is disabled.' },
    ]
};

export default Chip;
