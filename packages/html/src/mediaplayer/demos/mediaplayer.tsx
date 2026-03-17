import { MediaPlayer, KendoMediaPlayerProps } from '../mediaplayer.spec';
import { MediaPlayerNormal } from '../templates/mediaplayer-normal';

const sliderStyles = { "--kendo-slider-start": 0, "--kendo-slider-end": 30 } as React.CSSProperties;

const options = {};
const states = [];
const variants = [];
const defaults = {};
const modifiers = [];

export const MediaplayerDemo = (props: KendoMediaPlayerProps) => {
    return (
        <MediaPlayerNormal  {...props} style={{ height: "360px", width: "540px", ...sliderStyles }}>
            <div className="k-bg-primary-subtle" style={{ width: "100%", height: "100%" }} />
        </MediaPlayerNormal>
    );
}


MediaplayerDemo.options = options;
MediaplayerDemo.states = states;
MediaplayerDemo.variants = variants;
MediaplayerDemo.defaultOptions = defaults;
MediaplayerDemo.modifiers = modifiers;
MediaplayerDemo.className = MediaPlayer.className;

export default MediaplayerDemo;

