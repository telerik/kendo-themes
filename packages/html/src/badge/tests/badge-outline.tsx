import { Badge, BadgeNormal } from '../../badge';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-7">

            <span></span>
            <span>Text</span>
            <span>Text + Icon</span>
            <span>Icon + Text</span>
            <span>Icon</span>
            <span>Number</span>
            <span>Empty</span>

            {Badge.options.themeColor.map((themeColor) => (
                <>
                    <span>{`${themeColor}`}</span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor}>Text</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} endIcon="plus-circle">Text</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} icon="plus-circle">Text</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} icon="plus-circle" /></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor}>1</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor}></BadgeNormal></span>
                </>
            ))}
        </div>
    </>
);
