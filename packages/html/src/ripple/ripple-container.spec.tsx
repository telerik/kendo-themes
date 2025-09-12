import * as React from 'react';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

export const RIPPLE_CONTAINER_CLASSNAME = `k-ripple-container`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoRippleContainerOptions = {};

export type KendoRippleContainerProps = KendoRippleContainerOptions & {};

export const RippleContainer: KendoComponent<KendoRippleContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoRippleContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                RIPPLE_CONTAINER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

RippleContainer.states = states;
RippleContainer.options = options;
RippleContainer.className = RIPPLE_CONTAINER_CLASSNAME;
RippleContainer.defaultOptions = defaultOptions;
RippleContainer.moduleName = "ripple";
RippleContainer.folderName = "ripple";

export default RippleContainer;
