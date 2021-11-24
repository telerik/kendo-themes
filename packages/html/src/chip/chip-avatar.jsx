import { AvatarStatic } from '../avatar/index';

function ChipAvatarStatic(chipProps) {

    const {
        showAvatar
    } = chipProps;

    if (!showAvatar) {
        return <></>;
    }

    return (
        <AvatarStatic className="k-chip-avatar" type="image">
            <img src="../../assets/avatar.jpg"/>
        </AvatarStatic>
    );

}

export { ChipAvatarStatic };
