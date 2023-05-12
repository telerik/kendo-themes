import { Chip, ChipAction } from '../../chip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-6">
            <span><small>state / themeColor</small></span>
            <span>Base</span>
            <span>Error</span>
            <span>Warning</span>
            <span>Info</span>
            <span>Success</span>


            <span>Normal</span>
            <span>
                <Chip fillMode="outline" text="Base" actions={ <ChipAction type="remove"/> } />
            </span>
            <span>
                <Chip fillMode="outline" text="Error" actions={ <ChipAction type="remove"/> } themeColor="error" />
            </span>
            <span>
                <Chip fillMode="outline" text="Warning" actions={ <ChipAction type="remove"/> } themeColor="warning" />
            </span>
            <span>
                <Chip fillMode="outline" text="Info" actions={ <ChipAction type="remove"/> } themeColor="info" />
            </span>
            <span>
                <Chip fillMode="outline" text="Success" actions={ <ChipAction type="remove"/> } themeColor="success" />
            </span>

            <span>Hover</span>
            <span>
                <Chip fillMode="outline" text="Base" actions={ <ChipAction type="remove"/> } hover />
            </span>
            <span>
                <Chip fillMode="outline" text="Error" actions={ <ChipAction type="remove"/> } themeColor="error" hover />
            </span>
            <span>
                <Chip fillMode="outline" text="Warning" actions={ <ChipAction type="remove"/> } themeColor="warning" hover />
            </span>
            <span>
                <Chip fillMode="outline" text="Info" actions={ <ChipAction type="remove"/> } themeColor="info" hover />
            </span>
            <span>
                <Chip fillMode="outline" text="Success" actions={ <ChipAction type="remove"/> } themeColor="success" hover />
            </span>

            <span>Focus</span>
            <span>
                <Chip fillMode="outline" text="Base" actions={ <ChipAction type="remove"/> } focus />
            </span>
            <span>
                <Chip fillMode="outline" text="Error" actions={ <ChipAction type="remove"/> } themeColor="error" focus />
            </span>
            <span>
                <Chip fillMode="outline" text="Warning" actions={ <ChipAction type="remove"/> } themeColor="warning" focus />
            </span>
            <span>
                <Chip fillMode="outline" text="Info" actions={ <ChipAction type="remove"/> } themeColor="info" focus />
            </span>
            <span>
                <Chip fillMode="outline" text="Success" actions={ <ChipAction type="remove"/> } themeColor="success" focus />
            </span>

            <span>Selected</span>
            <span>
                <Chip fillMode="outline" text="Base" actions={ <ChipAction type="remove"/> } selected />
            </span>
            <span>
                <Chip fillMode="outline" text="Error" actions={ <ChipAction type="remove"/> } themeColor="error" selected />
            </span>
            <span>
                <Chip fillMode="outline" text="Warning" actions={ <ChipAction type="remove"/> } themeColor="warning" selected />
            </span>
            <span>
                <Chip fillMode="outline" text="Info" actions={ <ChipAction type="remove"/> } themeColor="info" selected />
            </span>
            <span>
                <Chip fillMode="outline" text="Success" actions={ <ChipAction type="remove"/> } themeColor="success" selected />
            </span>

            <span>Disabled</span>
            <span>
                <Chip fillMode="outline" text="Base" actions={ <ChipAction type="remove"/> } disabled />
            </span>
            <span>
                <Chip fillMode="outline" text="Error" actions={ <ChipAction type="remove"/> } themeColor="error" disabled />
            </span>
            <span>
                <Chip fillMode="outline" text="Warning" actions={ <ChipAction type="remove"/> } themeColor="warning" disabled />
            </span>
            <span>
                <Chip fillMode="outline" text="Info" actions={ <ChipAction type="remove"/> } themeColor="info" disabled />
            </span>
            <span>
                <Chip fillMode="outline" text="Success" actions={ <ChipAction type="remove"/> } themeColor="success" disabled />
            </span>


            <span></span>
            <span>Text</span>
            <span>Icon</span>
            <span>Avatar</span>
            <span>Icon (rtl)</span>
            <span>Avatar (rtl)</span>

            <span></span>
            <span>
                <Chip fillMode="outline" text="Text" />
            </span>
            <span>
                <Chip fillMode="outline" text="Text" icon="map-marker-target" />
            </span>
            <span>
                <Chip fillMode="outline" text="Text" showAvatar />
            </span>
            <span dir="rtl">
                <Chip fillMode="outline" text="Text" icon="map-marker-target" />
            </span>
            <span dir="rtl">
                <Chip fillMode="outline" text="Text" showAvatar />
            </span>

        </div>
    </>
);
