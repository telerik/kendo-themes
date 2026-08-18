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

/**
 * @aria {aria-label} Specifies label for the play/pause button.
 * @aria {aria-pressed} Specifies whether play is active or not.
 * @aria {aria-label} Specifies label for the mute button.
 * @aria {aria-pressed} Specifies whether mute is active or not.
 * @aria {aria-label} Specifies label for the full screen button.
 * @aria {aria-pressed} Specifies whether full screen is active or not.
 * @ux {Play / Pause} The primary button starts and pauses media playback.
 * @ux {Seek} Clicking or dragging the progress bar seeks to a position in the media.
 * @ux {Volume} A slider controls the audio level; a mute button toggles audio.
 * @ux {Fullscreen} Expands the player to fill the viewport.
 * @ux {Captions} Subtitle tracks can be toggled on or off.
 */
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
 * @keyboard {ArrowRight} Seek forward.
 * @keyboard {ArrowLeft} Seek backward.
 * @keyboard {ArrowUp} Increase the volume.
 * @keyboard {ArrowDown} Decrease the volume.
 * @keyboard {Control + 1} Decrease the video quality.
 * @keyboard {Control + 2} Increase the video quality.
 * @keyboard {F} Open and close the full screen.
 * @keyboard {M} Mute and Unmute the sound.
 * @keyboard {Space} Play and Pause the video.
 * @keyboard {Escape} Close the full screen.
 */

export default MediaPlayer;
