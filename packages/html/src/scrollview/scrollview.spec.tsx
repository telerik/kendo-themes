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

ScrollView.ariaSpec = {
    selector: '.k-scrollview',
    rules: [
        { selector: '.k-scrollview', attribute: 'role=application', usage: 'Specifies the role of the Carousel element.' },
        { selector: '.k-scrollview', attribute: 'aria-roledescription=carousel', usage: 'Clarifies the role of the Carousel element.' },
        { selector: '.k-scrollview', attribute: 'tabindex=0', usage: 'Carousel element must be focusable.' },
        { selector: '.k-scrollview-wrap', attribute: 'role=list', usage: 'Clarifies the scrollview wrap as a list of items (images).' },
        { selector: '.k-scrollview-wrap>*', attribute: 'role=listitem', usage: 'Specifies the role of each Carousel item.' },
        { selector: '.k-scrollview-wrap>*', attribute: 'aria-roledescription=slide', usage: 'Clarifies the role of the Carousel item.' },
        { selector: '.k-scrollview-prev,.k-scrollview-next', attribute: 'role=button', usage: 'Specifies the role of the Previous/Next button.' },
        { selector: '.k-scrollview-prev,.k-scrollview-next', attribute: 'aria-label', usage: 'Specifies label for the Previous/Next button.' },
        { selector: '.k-scrollview-prev,.k-scrollview-next', attribute: 'aria-controls', usage: 'Points to the id of the items container element.' },
        { selector: '.k-scrollview>.k-sr-only', attribute: 'aria-live=polite', usage: 'Identifies a hidden element as a live region in the polite state.' },
    ]
};

export default ScrollView;
