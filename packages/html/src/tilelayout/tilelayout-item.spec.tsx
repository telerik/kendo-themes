import React from 'react';
import { classNames, stateClassNames, States } from '../misc';
import { Card, CardBody, CardHeader } from '../card';

import { KendoComponent } from '../_types/component';
export const TILELAYOUTITEM_CLASSNAME = `k-tilelayout-item`;

const states = [
    States.focus
];

const options = {};

export type KendoTileLayoutItemProps = {
    header?: React.ReactNode | string;
    body?: React.ReactNode;
    focus?: boolean;
    resize?: true | 'vertical' | 'horizontal';
    style?: React.CSSProperties;
};

const defaultOptions = {};

export const TileLayoutItem: KendoComponent<KendoTileLayoutItemProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTileLayoutItemProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        header,
        body,
        focus,
        resize,
        style
    } = props;

    return (

        <Card className={classNames(
            props.className,
            TILELAYOUTITEM_CLASSNAME,
            stateClassNames(TILELAYOUTITEM_CLASSNAME, {
                focus,
            }),
            {
                'k-resize': resize === true,
                'k-resize-x': resize === 'horizontal',
                'k-resize-y': resize === 'vertical'
            }
        )}
        style={style}
        >
            {header &&
                React.isValidElement(header)
                ? <CardHeader className="k-tilelayout-item-header k-cursor-move">{header}</CardHeader>
                : <CardHeader className="k-tilelayout-item-header k-cursor-move" title={header as string} />
            }
            {body &&
                <CardBody className="k-tilelayout-item-body">
                    {body}
                </CardBody>
            }
        </Card>
    );
};

TileLayoutItem.states = states;
TileLayoutItem.options = options;
TileLayoutItem.className = TILELAYOUTITEM_CLASSNAME;
TileLayoutItem.defaultOptions = defaultOptions;
TileLayoutItem.moduleName = "tile-layout";
TileLayoutItem.folderName = "tilelayout";

export default TileLayoutItem;
