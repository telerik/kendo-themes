import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { Badge } from '../../badge';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-badge-container {
        padding: 5px;
        width: 80px;
        min-height: 30px;
        box-sizing: border-box;
        background-color: skyblue;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-6">

            <span></span>
            <span className="col">Baseline</span>
            <span className="col">Rectangle</span>
            <span className="col">Rounded</span>
            <span className="col">Pill</span>
            <span className="col">Circle</span>


            <span>Small</span>
            <span>
                <Badge size="small" themeColor="success">99</Badge>
            </span>
            <span>
                <Badge size="small" themeColor="success">
                    <Icon className="k-badge-icon" name="check"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="small" rounded="small" themeColor="success">
                    <Icon className="k-badge-icon" name="check"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="small" rounded="full" themeColor="success">
                    <Icon className="k-badge-icon" name="check"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="small" rounded="full" themeColor="success">
                    <Icon className="k-badge-icon" name="check"></Icon>
                </Badge>
            </span>

            <span>^ outline</span>
            <span>
                <Badge fillMode="outline" size="small">99</Badge>
            </span>
            <span>
                <Badge fillMode="outline" size="small">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge fillMode="outline" size="small" rounded="small">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge fillMode="outline" size="small" rounded="full">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge fillMode="outline" size="small" rounded="full">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>


            <span>Normal</span>
            <span>
                <Badge themeColor="info">99</Badge>
            </span>
            <span>
                <Badge themeColor="info">
                    <Icon className="k-badge-icon" name="calendar"></Icon>
                </Badge>
            </span>
            <span>
                <Badge themeColor="info" rounded="medium">
                    <Icon className="k-badge-icon" name="calendar"></Icon>
                </Badge>
            </span>
            <span>
                <Badge themeColor="info" rounded="full">
                    <Icon className="k-badge-icon" name="calendar"></Icon>
                </Badge>
            </span>
            <span>
                <Badge themeColor="info" rounded="full">
                    <Icon className="k-badge-icon" name="calendar"></Icon>
                </Badge>
            </span>

            <span>^ outline</span>
            <span>
                <Badge fillMode="outline" themeColor="tertiary">99</Badge>
            </span>
            <span>
                <Badge fillMode="outline" themeColor="tertiary">
                    <Icon className="k-badge-icon" name="plus-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge fillMode="outline" themeColor="tertiary" rounded="medium">
                    <Icon className="k-badge-icon" name="plus-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge fillMode="outline" themeColor="tertiary" rounded="full">
                    <Icon className="k-badge-icon" name="plus-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge fillMode="outline" themeColor="tertiary" rounded="full">
                    <Icon className="k-badge-icon" name="plus-circle"></Icon>
                </Badge>
            </span>


            <span>Large</span>
            <span>
                <Badge size="large" themeColor="warning">99</Badge>
            </span>
            <span>
                <Badge size="large" themeColor="warning">
                    <Icon className="k-badge-icon" name="bell"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="large" themeColor="warning" rounded="large">
                    <Icon className="k-badge-icon" name="bell"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="large" themeColor="warning" rounded="full">
                    <Icon className="k-badge-icon" name="bell"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="large" themeColor="warning" rounded="full">
                    <Icon className="k-badge-icon" name="bell"></Icon>
                </Badge>
            </span>

            <span>^ outline</span>
            <span>
                <Badge size="large" fillMode="outline" themeColor="error">99</Badge>
            </span>
            <span>
                <Badge size="large" fillMode="outline" themeColor="error">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="large" fillMode="outline" themeColor="error" rounded="large">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="large" fillMode="outline" themeColor="error" rounded="full">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>
            <span>
                <Badge size="large" fillMode="outline" themeColor="error" rounded="full">
                    <Icon className="k-badge-icon" name="x-circle"></Icon>
                </Badge>
            </span>


            <span></span>
            <span>Rectangle</span>
            <span>Rounded</span>
            <span>Pill</span>
            <span>Circle</span>
            <span>Dot</span>


            <span>Inline</span>
            <div className="k-badge-container">
                <Badge cutoutBorder>Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" cutoutBorder>Round</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full" cutoutBorder>Pill</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full" cutoutBorder>1</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full" cutoutBorder></Badge>
            </div>

            <span>Edge</span>
            <div className="k-badge-container">
                <Badge position="edge" align="top-end" cutoutBorder>Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="edge" align="top-end" cutoutBorder>Round</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full" position="edge" align="top-end" cutoutBorder>Pill</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full" position="edge" align="top-end" cutoutBorder>1</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full" position="edge" align="top-end" cutoutBorder></Badge>
            </div>

        </div>
    </>
);
