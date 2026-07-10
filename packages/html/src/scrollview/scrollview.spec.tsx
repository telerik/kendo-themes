import { classNames } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
import { SCROLLVIEW_FOLDER_NAME, SCROLLVIEW_MODULE_NAME } from './constants';
const SCROLLVIEW_CLASSNAME = 'k-scrollview';

const states = [];

const options = {};

export type KendoScrollViewProps = {
    mode?: "light" | "normal" | "dark";
    views?: number;
    currentView?: number;
    animate?: boolean;
    arrows?: boolean;
    pager?: boolean;
    rtl?: boolean;
};

const defaultOptions = {
    mode: "normal",
    views: 9,
    currentView: 5,
    animate: true,
    arrows: true,
    pager: true,
    rtl: false
};

/**
 * @aria {role="application"} Specifies the role of the Carousel element.
 * @aria {aria-roledescription="carousel"} Clarifies the role of the Carousel element.
 * @aria {tabindex="0"} Carousel element must be focusable.
 * @aria {role="list"} Clarifies the scrollview wrap as a list of items (images).
 * @aria {role="listitem"} Specifies the role of each Carousel item.
 * @aria {aria-roledescription="slide"} Clarifies the role of the Carousel item.
 * @aria {role="button"} Specifies the role of the Previous/Next button.
 * @aria {aria-label} Specifies label for the Previous/Next button.
 * @aria {aria-controls} Points to the id of the items container element.
 * @aria {aria-live="polite"} Identifies a hidden element as a live region in the polite state.
 * @ux {Paged scrolling} Advances one item at a time on swipe or arrow-button click.
 * @ux {Navigation arrows} Previous and next buttons navigate between pages.
 * @ux {Pager dots} Indicator dots show the current page and total page count.
 * @ux {Auto-play} Cycles through items automatically at a configurable interval.
 */
export const ScrollView: KendoComponent<KendoScrollViewProps> = (
    props: KendoScrollViewProps
        & React.HtmlHTMLAttributes<HTMLDivElement>
) => {
    const {
        mode = defaultOptions.mode,
        views = defaultOptions.views,
        currentView = defaultOptions.currentView,
        animate = defaultOptions.animate,
        arrows = defaultOptions.arrows,
        pager = defaultOptions.pager,
        rtl = defaultOptions.rtl,
        ...other
    } = props;

    const scrollviewViews: React.JSX.Element | React.JSX.Element[] = [];

    const iconPrev = rtl ? 'chevron-right' : 'chevron-left';
    const iconNext = rtl ? 'chevron-left' : 'chevron-right';
    const wrapId = 'scrollview-wrap';

    for ( let i = 0; i < views; i++ ) {
        scrollviewViews.push(
            <div className="k-scrollview-view" key={i} role="listitem" aria-roledescription="slide"></div>
        );
    }

    return (
        <div
            {...other}
            className={classNames(
                SCROLLVIEW_CLASSNAME,
                props.className,
                {
                    [`${SCROLLVIEW_CLASSNAME}-${mode}`]: mode !== "normal",
                    ['k-rtl']: rtl
                }
            )}
            role="application"
            aria-roledescription="carousel"
            tabIndex={0}
        >
            <div className={classNames(
                'k-scrollview-wrap',
                {
                    ['k-scrollview-animate']: animate
                }
            )} id={wrapId} role="list" style={{ "--kendo-scrollview-views": views, "--kendo-scrollview-current": currentView } as React.CSSProperties}>
                {scrollviewViews}
            </div>
            <div className="k-scrollview-elements">
                { arrows &&
                    <>
                        <span className="k-scrollview-prev" role="button" aria-label="Previous" aria-controls={wrapId}>
                            <Icon icon={iconPrev} size="xxxlarge"></Icon>
                        </span>
                        <span className="k-scrollview-next" role="button" aria-label="Next" aria-controls={wrapId}>
                            <Icon icon={iconNext} size="xxxlarge"></Icon>
                        </span>
                    </>
                }
                { pager &&
                    <div className="k-scrollview-nav-wrap">
                        <div className="k-scrollview-nav">
                            { mode === "light" &&
                                <>
                                    <span className="k-link"></span>
                                    <span className="k-link k-primary"></span>
                                    <span className="k-link k-primary k-focus"></span>
                                    <span className="k-link k-focus"></span>
                                    <span className="k-link"></span>
                                </>
                            }
                            {
                                mode === 'normal' &&
                               <>
                                   <span className="k-link" style={{ transform: "scale(0.5)" }}></span>
                                   <span className="k-link" style={{ transform: "scale(0.65)" }}></span>
                                   <span className="k-link" style={{ transform: "scale(0.8)" }}></span>
                                   <span className="k-link"></span>
                                   <span className="k-link k-primary"></span>
                                   <span className="k-link"></span>
                                   <span className="k-link" style={{ transform: "scale(0.8)" }}></span>
                                   <span className="k-link" style={{ transform: "scale(0.65)" }}></span>
                                   <span className="k-link" style={{ transform: "scale(0.5)" }}></span>
                               </>
                            }
                            {
                                mode === "dark" &&
                                <>
                                    <span className="k-link" style={{ transform: "scale(0.5)" }}></span>
                                    <span className="k-link" style={{ transform: "scale(0.65)" }}></span>
                                    <span className="k-link"></span>
                                    <span className="k-link k-primary"></span>
                                    <span className="k-link"></span>
                                    <span className="k-link" style={{ transform: "scale(0.65)" }}></span>
                                    <span className="k-link" style={{ transform: "scale(0.5)" }}></span>
                                </>
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="k-sr-only" aria-live="polite"></div>
        </div>
    );
};

ScrollView.states = states;
ScrollView.options = options;
ScrollView.className = SCROLLVIEW_CLASSNAME;
ScrollView.defaultOptions = defaultOptions;
ScrollView.moduleName = SCROLLVIEW_MODULE_NAME;
ScrollView.folderName = SCROLLVIEW_FOLDER_NAME;

/**
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/carousel/ ARIA Practices: Carousel
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/carousel/carousel-1-prev-next.html ARIA Practices: Carousel Example with Buttons
 */

export default ScrollView;
