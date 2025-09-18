import { Button, IconButton, IconTextButton } from '../button';
import { ButtonGroup } from '../button-group';
import { ColorPicker } from '../colorpicker';
import { Combobox } from '../combobox';
import { DropdownList } from '../dropdownlist';
import { MenuButton } from '../menu-button';
import SplitButton from '../split-button/split-button.spec';
import { classNames, optionClassNames, stateClassNames, States, Size, FillMode, ThemeColor, Roundness } from '../misc';
import { ToolbarSeparator } from './toolbar-separator';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
export const TOOLBAR_CLASSNAME = `k-toolbar`;

const states = [
    States.focus,
];

const options = {
    size: [Size.small, Size.medium, Size.large],
    fillMode: [FillMode.solid, FillMode.outline, FillMode.flat],
};

export type KendoToolbarOptions = {
    size?: (typeof options.size)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoToolbarProps = KendoToolbarOptions & {
    resizable?: boolean;
    scrollable?: boolean;
    scrollButtons?: 'hidden' | 'start' | 'end' | 'around';
    scrollingPosition?: 'start' | 'end' | 'both';
    section?: boolean;
};

export type KendoToolbarState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
    fillMode: FillMode.solid,
    scrollButtons: 'around'
};

export const Toolbar: KendoComponent<KendoToolbarProps & KendoToolbarState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoToolbarProps &
        KendoToolbarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        fillMode = defaultOptions.fillMode,
        focus,
        resizable,
        scrollable,
        scrollButtons,
        scrollingPosition,
        section,
        ...other
    } = props;

    const toolbarChildren: React.JSX.Element[] = [];

    const addUniqueToolClass = (child, index?) => {
        const tempToolbarChildren: React.JSX.Element[] = [];

        if (child.type === Button && child.props.className && child.props.className.includes('k-toolbar-overflow-button')) {
            tempToolbarChildren.push(
                <Button
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`${child.props.className ? child.props.className : ''}`}
                ></Button>
            );
        } else if (child.type === Button) {
            tempToolbarChildren.push(
                <Button
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-button ${child.props.className ? child.props.className : ''}`}
                ></Button>
            );
        } else if (child.type === IconTextButton) {
            tempToolbarChildren.push(
                <IconTextButton
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-button ${child.props.className ? child.props.className : ''}`}
                ></IconTextButton>
            );
        } else if (child.type === IconButton) {
            tempToolbarChildren.push(
                <IconButton
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-button ${child.props.className ? child.props.className : ''}`}
                ></IconButton>
            );
        } else if (child.type === MenuButton) {
            tempToolbarChildren.push(
                <MenuButton
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-menu-button ${child.props.className ? child.props.className : ''}`}
                ></MenuButton>
            );
        } else if (child.type === SplitButton) {
            tempToolbarChildren.push(
                <SplitButton
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-split-button ${child.props.className ? child.props.className : ''}`}
                ></SplitButton>
            );
        } else if (child.type === ButtonGroup || child.props.className && child.props.className.includes('k-button-group')) {
            const buttonGroupItems: React.JSX.Element[] = [];
            const childrenArray = Array.isArray(child.props.children) ? child.props.children : [ child.props.children ];

            childrenArray.forEach((button, bindex) => {
                buttonGroupItems.push(
                    <Button
                        key={`${bindex}-${new Date().getTime()}`}
                        {...button.props}
                        className={`${button.props.className ? button.props.className : ''}`}
                    ></Button>
                );
            });

            tempToolbarChildren.push(
                <ButtonGroup
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-button-group ${child.props.className ? child.props.className : ''}`}
                >
                    {buttonGroupItems}
                </ButtonGroup>
            );
        } else if (child.type === Combobox) {
            tempToolbarChildren.push(
                <Combobox
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-combobox ${child.props.className ? child.props.className : ''}`}
                ></Combobox>
            );
        } else if (child.type === DropdownList) {
            tempToolbarChildren.push(
                <DropdownList
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-dropdownlist ${child.props.className ? child.props.className : ''}`}
                ></DropdownList>
            );
        } else if (child.type === ColorPicker) {
            tempToolbarChildren.push(
                <ColorPicker
                    key={`${index}-${new Date().getTime()}`}
                    {...child.props}
                    className={`k-toolbar-colorpicker ${child.props.className ? child.props.className : ''}`}
                ></ColorPicker>
            );
        } else {
            tempToolbarChildren.push(child);
        }

        tempToolbarChildren.forEach(item => {
            toolbarChildren.push(item);
        });
    };

    if (props.children) {
        const childrenArray = Array.isArray(props.children) ? props.children : [ props.children ];

        childrenArray.forEach((child, index) => {
            addUniqueToolClass(child, index);
        });
    }

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TOOLBAR_CLASSNAME,
                optionClassNames(TOOLBAR_CLASSNAME, {
                    size,
                    fillMode
                }),
                stateClassNames(TOOLBAR_CLASSNAME, {
                    focus,
                }),
                {
                    [`${TOOLBAR_CLASSNAME}-resizable`]: resizable,
                    [`${TOOLBAR_CLASSNAME}-scrollable`]: scrollable,
                    [`${TOOLBAR_CLASSNAME}-scrollable-overlay`]: (scrollable && scrollButtons === 'hidden'),
                    [`${TOOLBAR_CLASSNAME}-scrollable-${scrollingPosition}`]: scrollingPosition && scrollingPosition !== 'both',
                    [`${TOOLBAR_CLASSNAME}-section`]: section,
                }
            )}
        >
            {!scrollable && toolbarChildren}

            {scrollable && scrollButtons === 'hidden' &&
               <div className='k-toolbar-items k-toolbar-items-scroll'>{toolbarChildren}</div>
            }

            {scrollable && scrollButtons === 'start' &&
                <>
                     <ButtonGroup>
                        <span className={classNames(
                            'k-toolbar-prev',
                            'k-button',
                            optionClassNames('k-button', {
                                size,
                                fillMode,
                                themeColor: ThemeColor.base,
                                rounded: Roundness.medium
                            }),
                            'k-icon-button',
                        )}>
                            <Icon className='k-button-icon' icon= "caret-alt-left" />
                        </span>
                        <span className={classNames(
                            'k-toolbar-next',
                            'k-button',
                            optionClassNames('k-button', {
                                size,
                                fillMode,
                                themeColor: ThemeColor.base,
                                rounded: Roundness.medium
                            }),
                            'k-icon-button',
                        )}>
                            <Icon className='k-button-icon' icon= "caret-alt-right" />
                        </span>
                    </ButtonGroup>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <div className="k-toolbar-items k-toolbar-items-scroll">{toolbarChildren}</div>
                </>
            }

            {scrollable && scrollButtons === 'end' &&
                <>
                    <div className="k-toolbar-items k-toolbar-items-scroll">{toolbarChildren}</div>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <ButtonGroup>
                        <span className={classNames(
                            'k-toolbar-prev',
                            'k-button',
                            optionClassNames('k-button', {
                                size,
                                fillMode,
                                themeColor: ThemeColor.base,
                                rounded: Roundness.medium
                            }),
                            'k-icon-button',
                        )}>
                            <Icon className='k-button-icon' icon= "caret-alt-left" />
                        </span>
                        <span className={classNames(
                            'k-toolbar-next',
                            'k-button',
                            optionClassNames('k-button', {
                                size,
                                fillMode,
                                themeColor: ThemeColor.base,
                                rounded: Roundness.medium
                            }),
                            'k-icon-button',
                        )}>
                            <Icon className='k-button-icon' icon= "caret-alt-right" />
                        </span>
                    </ButtonGroup>
                </>
            }

            {scrollable && (scrollButtons === 'around' || !scrollButtons) &&
                <>
                    <span className={classNames(
                        'k-toolbar-prev',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode,
                            themeColor: ThemeColor.base,
                            rounded: Roundness.medium
                        }),
                        'k-icon-button',
                    )}>
                        <Icon className='k-button-icon' icon= "caret-alt-left" />
                    </span>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <div className="k-toolbar-items k-toolbar-items-scroll">{toolbarChildren}</div>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <span className={classNames(
                        'k-toolbar-next',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode,
                            themeColor: ThemeColor.base,
                            rounded: Roundness.medium
                        }),
                        'k-icon-button',
                    )}>
                        <Icon className='k-button-icon' icon= "caret-alt-right" />
                    </span>
                </>
            }

        </div>
    );
};

Toolbar.states = states;
Toolbar.options = options;
Toolbar.className = TOOLBAR_CLASSNAME;
Toolbar.defaultOptions = defaultOptions;
Toolbar.moduleName = "toolbar";
Toolbar.folderName = Toolbar.moduleName;

export default Toolbar;
