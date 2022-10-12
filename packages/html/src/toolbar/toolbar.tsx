import * as React from 'react';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { ColorPicker } from '../colorpicker';
import { Combobox } from '../combobox';
import { DropdownList } from '../dropdownlist';
import { MenuButton } from '../menu-button';
import { SplitButton } from '../split-button';
import { classNames, kendoThemeMaps } from '../utils';

export interface ToolbarProps {
    children?: React.ReactElement[] | React.ReactElement;
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    resizable?: boolean;
    focus?: boolean;
    style?: any;
}

export class Toolbar extends React.Component<ToolbarProps> {

    static defaultProps = {
        size: 'medium'
    };

    render() {
        const {
            children,
            className,
            size,
            resizable,
            focus,
            ...htmlAttributes
        } = this.props;

        const toolbarChildren: React.ReactElement[] = [];

        /* eslint-disable complexity */
        const addUniqueToolClass = (child, index, framework?) => {
            const tempToolbarChildren: React.ReactElement[] = [];

            if (child.type === Button && child.props.className && child.props.className.includes('k-toolbar-overflow-button')) {
                tempToolbarChildren.push(
                    <Button
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`${child.props.className ? child.props.className : ''}`}
                    ></Button>
                );
            } else if (child.type === Button && child.props.className && child.props.className.includes('k-toggle-button')) {
                tempToolbarChildren.push(
                    <Button
                        key={`${index}-${new Date().getTime()}`}
                        {...child.props}
                        className={`k-toolbar-toggle-button ${child.props.className ? child.props.className : ''}`}
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
                const buttonGroupItems: React.ReactElement[] = [];
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
                const tool = framework === 'angular' ? React.createElement('div', { className: 'k-toolbar-renderer' }, item) : item;
                toolbarChildren.push(tool);
            });
        };
        /* eslint-enable complexity */

        if (children) {
            const childrenArray = Array.isArray(children) ? children : [ children ];

            childrenArray.forEach((child, index) => {
                // In Angular the Tools are wrapped in a 'k-toolbar-renderer' container
                if (child.props.className && child.props.className.includes('k-toolbar-renderer')) {
                    addUniqueToolClass(child.props.children, index, 'angular');
                } else {
                    addUniqueToolClass(child, index);
                }
            });
        }

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-toolbar',
                    {
                        [`k-toolbar-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        'k-toolbar-resizable': resizable,
                        'k-focus': focus
                    }
                )}
            >
                {toolbarChildren}
            </div>
        );
    }
}
