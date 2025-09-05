import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-grid-footer`;

export const GridFooter: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </div>
);

GridFooter.className = className;
GridFooter.moduleName = "grid";
GridFooter.folderName = "grid";
