import * as React from 'react';
import { classNames } from '../utils';
import { ProgressBarProps } from './progressbar';

export interface ChunkProgressBarProps extends ProgressBarProps {
    className?: string;
    chunkCount?: number;
    progress: number;
}

const isSelected = (progress: number, index: number) => (index <= progress - 1 ? true : false);

export class ChunkProgressBar extends React.Component<ChunkProgressBarProps> {

    static defaultProps = {
        chunkCount: 5,
        orientation: 'horizontal',
        progress: 0
    };

    render() {

        const {
            className,
            chunkCount,
            indeterminate,
            orientation,
            progress,
            reverse
        } = this.props;

        return (
            <div
                dir={this.props.dir}
                className={classNames(
                    className,
                    'k-progressbar',
                    'k-chunk-progressbar',
                    {
                        [`k-progressbar-${orientation}`]: orientation,
                        'k-progressbar-indeterminate': indeterminate,
                        'k-progressbar-reverse': reverse
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
    }
}
