import { classNames } from '../misc';
import { Icon } from '../icon';

const SCROLLVIEW_CLASSNAME = 'k-scrollview';

const states = [];

const options = {};

export type KendoScrollViewProps = {
    mode?: "light" | "normal" | "dark";
    views?: number;
    animate?: boolean;
    arrows?: boolean;
    pager?: boolean;
    rtl?: boolean;
};

const defaultProps = {
    mode: "normal",
    views: 9,
    animate: true,
    arrows: true,
    pager: true,
    rtl: false
};

export const ScrollView = (
    props: KendoScrollViewProps
        & React.HtmlHTMLAttributes<HTMLDivElement>
) => {
    const {
        mode = defaultProps.mode,
        views = defaultProps.views,
        animate = defaultProps.animate,
        arrows = defaultProps.arrows,
        pager = defaultProps.pager,
        rtl = defaultProps.rtl,
        ...other
    } = props;

    const scrollviewViews: JSX.Element | JSX.Element[] = [];

    const iconPrev = rtl ? 'chevron-right' : 'chevron-left';
    const iconNext = rtl ? 'chevron-left' : 'chevron-right';

    for ( let i = 0; i < views; i++ ) {
        scrollviewViews.push(
            <div className="k-scrollview-view" key={i}></div>
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
            )}>
            <div className={classNames(
                'k-scrollview-wrap',
                {
                    ['k-scrollview-animate']: animate
                }
            )} style={{ "--kendo-scrollview-views": views, "--kendo-scrollview-current": 5 } as React.CSSProperties}>
                {scrollviewViews}
            </div>
            <div className="k-scrollview-elements">
                { arrows &&
                    <>
                        <span className="k-scrollview-prev">
                            <Icon icon={iconPrev} size="xxxlarge"></Icon>
                        </span>
                        <span className="k-scrollview-next">
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
            <div className="k-sr-only"></div>
        </div>
    );
};

ScrollView.states = states;
ScrollView.options = options;
ScrollView.className = SCROLLVIEW_CLASSNAME;
ScrollView.defaultProps = defaultProps;

export default ScrollView;
