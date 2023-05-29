import { Chip } from '../../chip';
import { ChipAvatar } from '../templates/chip-avatar';
import { ChipIcon } from '../templates/chip-icon';
import { ChipNormal } from '../templates/chip-normal';
import { ChipRemovable } from '../templates/chip-removable';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-6">
            <span><small>state / themeColor</small></span>
            <span>Base</span>
            <span>Success</span>
            <span>Warning</span>
            <span>Error</span>
            <span>Info</span>

            {[ 'normal',...Chip.states ].map((state) => (
                <>
                    <span>{state}</span>
                    {Chip.options.themeColor.map((themeColor)=> (
                        <span>
                            <ChipRemovable text={themeColor} fillMode="outline" themeColor={themeColor} {...{ [state]: true }} />
                        </span>
                    ))}
                </>
            ))}

            <span></span>
            <span>Text</span>
            <span>Icon</span>
            <span>Avatar</span>
            <span>Icon (rtl)</span>
            <span>Avatar (rtl)</span>

            <span></span>
            <span>
                <ChipNormal fillMode="outline" text="Text" />
            </span>
            <span>
                <ChipIcon fillMode="outline" text="Text" icon="map-marker-target" />
            </span>
            <span>
                <ChipAvatar fillMode="outline" text="Text" />
            </span>
            <span dir="rtl">
                <ChipIcon fillMode="outline" text="Text" icon="map-marker-target" />
            </span>
            <span dir="rtl">
                <ChipAvatar fillMode="outline" text="Text" />
            </span>

        </div>
    </>
);
