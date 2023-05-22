import { classNames, States, } from '../misc';
import { PROGRESSBAR_CLASSNAME } from './progressbar.spec';

export const CHUNKPROGRESSBAR_CLASSNAME = `k-chunk-progressbar`;

const isSelected = (progress: number, index: number) => (index <= progress - 1 ? true : false);

const states = [
    States.indeterminate
];

const options = {};

export type KendoChunkProgressBarProps = {
    chunkCount?: number;
    progress: number;
    orientation?: 'horizontal' | 'vertical';
    reverse?: boolean;
};

export type KendoChunkProgressBarState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    chunkCount: 5,
    orientation: 'horizontal',
    progress: 0
};

export const ChunkProgressBar = (
    props: KendoChunkProgressBarProps &
        KendoChunkProgressBarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        chunkCount = defaultProps.chunkCount,
        indeterminate,
        orientation = defaultProps.orientation,
        progress = defaultProps.progress,
        reverse,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROGRESSBAR_CLASSNAME,
                CHUNKPROGRESSBAR_CLASSNAME,
                {
                    [`${PROGRESSBAR_CLASSNAME}-${orientation}`]: orientation,
                    [`${PROGRESSBAR_CLASSNAME}-indeterminate`]: indeterminate,
                    [`${PROGRESSBAR_CLASSNAME}-reverse`]: reverse
                }
            )}>
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
ChunkProgressBar.defaultProps = defaultProps;

export default ChunkProgressBar;
