import { Fragment } from 'react';
import { ListBoxNormal } from '../../listbox';

const styles = `
    #test-area .k-listbox {
        width: 250px;
        height: 250px;
    }
`;

const scrollingPositions = [ 'start', 'end', 'both' ];

const scenarios = [
    { title: 'Actions left', actionsPosition: 'left' },
    { title: 'Actions top', actionsPosition: 'top' },
    { title: 'Actions left RTL', actionsPosition: 'left', dir: 'rtl' },
    { title: 'Actions top RTL', actionsPosition: 'top', dir: 'rtl' },
];

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            {scenarios.map(({ title, ...props }) => (
                <Fragment key={title}>
                    {scrollingPositions.map(position => (
                        <div key={`${title}-${position}`}>
                            <span>{title} (scroll {position})</span>
                            <ListBoxNormal
                                {...props}
                                actionsScrollable
                                actionsScrollingPosition={position}
                            />
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    </>
);
