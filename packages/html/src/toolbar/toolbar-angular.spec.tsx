import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { ColorPicker } from '../colorpicker';
import { Combobox } from '../combobox';
import { DropdownList } from '../dropdownlist';
import { MenuButton } from '../menu-button';
import SplitButton from '../split-button/split-button.spec';
import { classNames, optionClassNames, stateClassNames, States, Size, FillMode } from '../misc';

export const TOOLBARANGULAR_CLASSNAME = `k-toolbar`;

const states = [
    States.focus,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    fillMode: [FillMode.solid, FillMode.outline, FillMode.flat],
};

export type KendoToolbarAngularOptions = {
  size?: (typeof options.size)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoToolbarAngularProps = KendoToolbarAngularOptions & {
    resizable?: boolean;
};

export type KendoToolbarAngularState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
    fillMode: FillMode.solid
};

export const ToolbarAngular = (
    props: KendoToolbarAngularProps &
        KendoToolbarAngularState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        fillMode = defaultOptions.fillMode,
        focus,
        resizable,
        ...other
    } = props;

    const toolbarChildren: React.JSX.Element[] = [];

    const addUniqueToolClass = (child, index) => {
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
                <div className="k-toolbar-renderer">
                    <Button
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-button ${child.props.className ? child.props.className : ''}`}
                    ></Button>
                </div>
            );
        } else if (child.type === MenuButton) {
            tempToolbarChildren.push(
                <div className="k-toolbar-renderer">
                    <MenuButton
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-menu-button ${child.props.className ? child.props.className : ''}`}
                    ></MenuButton>
                </div>
            );
        } else if (child.type === SplitButton) {
            tempToolbarChildren.push(
                <div className="k-toolbar-renderer">
                    <SplitButton
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-split-button ${child.props.className ? child.props.className : ''}`}
                    ></SplitButton>
                </div>
            );
        } else if (child.type === ButtonGroup || child.props.className && child.props.className.includes('k-button-group')) {
            const buttonGroupItems: React.JSX.Element[] = [];
            const childrenArray = Array.isArray(child.props.children) ? child.props.children : [ child.props.children ];

            childrenArray.forEach((button, bindex) => {
                buttonGroupItems.push(
                    <Button
                        key={`${bindex}-${new Date().getTime()}`}
                        {...button.props}
                        className={`k-toolbar-button ${button.props.className ? button.props.className : ''}`}
                    ></Button>
                );
            });

            tempToolbarChildren.push(
                <div className="k-toolbar-renderer">
                    <ButtonGroup
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-button-group ${child.props.className ? child.props.className : ''}`}
                    >
                        {buttonGroupItems}
                    </ButtonGroup>
                </div>
            );
        } else if (child.type === Combobox) {
            tempToolbarChildren.push(
                <div className="k-toolbar-renderer">
                    <Combobox
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-combobox ${child.props.className ? child.props.className : ''}`}
                    ></Combobox>
                </div>
            );
        } else if (child.type === DropdownList) {
            tempToolbarChildren.push(
                <div className="k-toolbar-renderer">
                    <DropdownList
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-dropdownlist ${child.props.className ? child.props.className : ''}`}
                    ></DropdownList>
                </div>
            );
        } else if (child.type === ColorPicker) {
            tempToolbarChildren.push(
                <div className="k-toolbar-renderer">
                    <ColorPicker
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-colorpicker ${child.props.className ? child.props.className : ''}`}
                    ></ColorPicker>
                </div>
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
                TOOLBARANGULAR_CLASSNAME,
                optionClassNames(TOOLBARANGULAR_CLASSNAME, {
                    size,
                    fillMode
                }),
                stateClassNames(TOOLBARANGULAR_CLASSNAME, {
                    focus,
                }),
                {
                    [`${TOOLBARANGULAR_CLASSNAME}-resizable`]: resizable,
                }
            )}
        >
            {toolbarChildren}
        </div>
    );
};

ToolbarAngular.states = states;
ToolbarAngular.options = options;
ToolbarAngular.className = TOOLBARANGULAR_CLASSNAME;
ToolbarAngular.defaultOptions = defaultOptions;

export default ToolbarAngular;
