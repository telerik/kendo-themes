import { KendoToolbarProps, Toolbar, ToolbarItem } from '../toolbar';
import { classNames } from '../misc';
import { Button } from '../button';
import { SliderNormal } from '../slider';

export const MEDIAPLAYERTOOLBAR_CLASSNAME = `k-mediaplayer-toolbar`;

const states = [];

const options = {};

export type KendoMediaPlayerToolbarProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
};

const defaultToolbarItems = [
    <Button key="play" fillMode="flat" icon="play" className="k-play-button" aria-label="Play" aria-pressed="false"></Button>,
    <ToolbarItem key="currenttime" className="k-mediaplayer-currenttime-wrap">
        <span className="k-mediaplayer-currenttime">00:18</span> / <span className="k-mediaplayer-duration">00:55</span>
    </ToolbarItem>,
    <div key="spacer" className="k-spacer"></div>,
    <Button key="volume" fillMode="flat" icon="volume-up" className="k-volume-button" aria-label="Mute" aria-pressed="false"></Button>,
    <ToolbarItem key="volume-wrap" className="k-mediaplayer-volume-wrap">
        <SliderNormal className="k-mediaplayer-volume" showButtons={false} showTicks={false} />
    </ToolbarItem>,
    <Button key="fullscreen" fillMode="flat" icon="fullscreen" className="k-fullscreen-button" aria-label="Full screen" aria-pressed="false"></Button>
];

const defaultOptions = {
    toolbarItems: defaultToolbarItems,
};

export const MediaPlayerToolbar = (
    props: KendoToolbarProps &
        KendoMediaPlayerToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems = defaultOptions.toolbarItems,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                MEDIAPLAYERTOOLBAR_CLASSNAME,
            )}
        >
            {toolbarItems}
        </Toolbar>
    );
};

MediaPlayerToolbar.states = states;
MediaPlayerToolbar.options = options;
MediaPlayerToolbar.className = MEDIAPLAYERTOOLBAR_CLASSNAME;
MediaPlayerToolbar.defaultOptions = defaultOptions;

export default MediaPlayerToolbar;
