import { classNames, stateClassNames, States, } from '../misc';
import { PROGRESSBAR_CLASSNAME } from './progressbar.spec';

import { KendoComponent } from '../_types/component';
import { PROGRESSBAR_FOLDER_NAME, PROGRESSBAR_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const CHUNKPROGRESSBAR_CLASSNAME = `k-chunk-progressbar`;

const isSelected = (progress: number, index: number) => (index <= progress - 1 ? true : false);

const states = [
    States.disabled,
    States.indeterminate
];

const options = {};

export type KendoChunkProgressBarProps = {
    chunkCount?: number;
    progress: number;
    orientation?: 'horizontal' | 'vertical';
    reverse?: boolean;
    /** @aria aria-label - accessible name for the progressbar */
    ariaLabel?: string;
};

export type KendoChunkProgressBarState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    chunkCount: 5,
    orientation: 'horizontal',
    progress: 0
};

export const ChunkProgressBar: KendoComponent<KendoChunkProgressBarProps & KendoChunkProgressBarState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoChunkProgressBarProps &
        KendoChunkProgressBarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        chunkCount = defaultOptions.chunkCount,
        indeterminate,
        orientation = defaultOptions.orientation,
        progress = defaultOptions.progress,
        reverse,
        ariaLabel,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROGRESSBAR_CLASSNAME,
                CHUNKPROGRESSBAR_CLASSNAME,
                stateClassNames(PROGRESSBAR_CLASSNAME, {
                    disabled,
                }),
                {
                    [`${PROGRESSBAR_CLASSNAME}-${orientation}`]: orientation,
                    [`${PROGRESSBAR_CLASSNAME}-indeterminate`]: indeterminate,
                    [`${PROGRESSBAR_CLASSNAME}-reverse`]: reverse
                }
            )}
            role="progressbar"
            aria-label={ariaLabel || 'progress'}
            aria-valuenow={indeterminate ? undefined : progress}
            aria-valuemin={0}
            aria-valuemax={chunkCount}
        >
            <ul className="k-progressbar-chunks k-reset">
                {[ ...Array(chunkCount) ].map((_el, i) =>
                    <li key={i} className={classNames(
                        'k-progressbar-chunk',
                        {
                            'k-first': i === 0,
                            'k-last': i === [ ...Array(chunkCount) ].length - 1,
                            'k-selected': isSelected(progress, i)
                        }
                    )}></li>
                )}
            </ul>
        </div>
    );
};

ChunkProgressBar.states = states;
ChunkProgressBar.options = options;
ChunkProgressBar.className = CHUNKPROGRESSBAR_CLASSNAME;
ChunkProgressBar.defaultOptions = defaultOptions;
ChunkProgressBar.moduleName = PROGRESSBAR_MODULE_NAME;
ChunkProgressBar.folderName = PROGRESSBAR_FOLDER_NAME;

ChunkProgressBar.ariaSpec = a11ySpec.ariaSpec;

export default ChunkProgressBar;
