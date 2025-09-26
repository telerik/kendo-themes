import { Chip, ChipAvatar, ChipIcon, ChipNormal, ChipRemovable } from '../../chip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-6">
            <span><small>state / themeColor</small></span>
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
                            <ChipRemovable text={themeColor} themeColor={themeColor} {...(state ? { [state]: true } : {})} />
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
                <ChipNormal text="Text" />
            </span>
            <span>
                <ChipIcon text="Text" />
            </span>
            <span>
                <ChipAvatar text="Text" />
            </span>
            <span dir="rtl">
                <ChipIcon text="Text" />
            </span>
            <span dir="rtl">
                <ChipAvatar text="Text" />
            </span>

        </div>
    </>
);
