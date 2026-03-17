import { classNames } from '../misc';
import { SliderNormal } from '../slider';
import { MediaPlayerToolbar } from './mediaplayer-toolbar';

import { KendoComponent } from '../_types/component';
import { MEDIAPLAYER_FOLDER_NAME, MEDIAPLAYER_MODULE_NAME } from './constants';
export const MEDIAPLAYER_CLASSNAME = `k-mediaplayer`;

const states = [];

const options = {};

export type KendoMediaPlayerProps = {
    title?: string;
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
};

export type KendoMediaPlayerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    title: "Media player title",
};

export const MediaPlayer: KendoComponent<KendoMediaPlayerProps & KendoMediaPlayerState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoMediaPlayerProps &
        KendoMediaPlayerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title = defaultOptions.title,
        toolbarItems,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                MEDIAPLAYER_CLASSNAME
            )}
        >
            {children}
            <div className="k-mediaplayer-titlebar">{title}</div>
            <div className="k-mediaplayer-toolbar-wrap">
                <SliderNormal className="k-mediaplayer-seekbar" showButtons={false} showTicks={false} />
                <MediaPlayerToolbar toolbarItems={toolbarItems}/>
            </div>
            <div className="k-mediaplayer-overlay"></div>
        </div>
    );
};

MediaPlayer.states = states;
MediaPlayer.options = options;
MediaPlayer.className = MEDIAPLAYER_CLASSNAME;
MediaPlayer.defaultOptions = defaultOptions;
MediaPlayer.moduleName = MEDIAPLAYER_MODULE_NAME;
MediaPlayer.folderName = MEDIAPLAYER_FOLDER_NAME;

/**
 * @see Toolbar ariaSpec for the media player toolbar
 * @see Slider ariaSpec for the seekbar and volume sliders
 */
MediaPlayer.ariaSpec = {
    selector: '.k-mediaplayer',
    rules: [
        { selector: '.k-play-button', attribute: 'aria-label', usage: 'Specifies label for the play/pause button.' },
        { selector: '.k-play-button', attribute: 'aria-pressed', usage: 'Specifies whether play is active or not.' },
        { selector: '.k-volume-button', attribute: 'aria-label', usage: 'Specifies label for the mute button.' },
        { selector: '.k-volume-button', attribute: 'aria-pressed', usage: 'Specifies whether mute is active or not.' },
        { selector: '.k-fullscreen-button', attribute: 'aria-label', usage: 'Specifies label for the full screen button.' },
        { selector: '.k-fullscreen-button', attribute: 'aria-pressed', usage: 'Specifies whether full screen is active or not.' },
    ]
};

export default MediaPlayer;
