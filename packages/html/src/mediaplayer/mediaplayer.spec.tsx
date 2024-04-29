import { SliderNormal } from '..';
import { classNames } from '../misc';
import { MediaPlayerToolbar } from './mediaplayer-toolbar';

export const MEDIAPLAYER_CLASSNAME = `k-mediaplayer`;

const states = [];

const options = {};

export type KendoMediaPlayerProps = {
    title?: string;
    toolbarItems?: JSX.Element | JSX.Element[];
};

export type KendoMediaPlayerState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    title: "Media player title",
};

export const MediaPlayer = (
    props: KendoMediaPlayerProps &
        KendoMediaPlayerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
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
MediaPlayer.defaultProps = defaultProps;

export default MediaPlayer;
