import { Chip } from '../../chip/chip.spec';
import { ChipAvatar } from '../../chip/templates/chip-avatar';
import { ChipIcon } from '../../chip/templates/chip-icon';
import { ChipNormal } from '../../chip/templates/chip-normal';
import { ChipRemovable } from '../../chip/templates/chip-removable';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-7">
            <span><small>state / themeColor</small></span>
            <span>undefined</span>
            <span>Base</span>
            <span>Success</span>
            <span>Warning</span>
            <span>Error</span>
            <span>Info</span>

            {[ null, ...Chip.states ].map((state) => (
                <>
                    <span>{state || 'normal'}</span>
                    {Chip.options.themeColor.map((themeColor) => (
                        <span>
                            <ChipRemovable fillMode="solid" text={themeColor === undefined ? 'undefined' : themeColor} themeColor={themeColor} {...(state ? { [state]: true } : {})} />
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

            <span></span>
            <span>
                <ChipNormal fillMode="solid" text="Text" />
            </span>
            <span>
                <ChipIcon fillMode="solid" text="Text" />
            </span>
            <span>
                <ChipAvatar fillMode="solid" text="Text" />
            </span>
            <span dir="rtl">
                <ChipIcon fillMode="solid" text="Text" />
            </span>
            <span dir="rtl">
                <ChipAvatar fillMode="solid" text="Text" />
            </span>

        </div>
    </>
);
