import { Badge, BadgeNormal } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-9">

            <span></span>
            <span className="col-2">Rectangle</span>
            <span className="col-2">Rounded</span>
            <span className="col-2">Pill</span>
            <span className="col">Circle</span>
            <span className="col">Dot</span>

            {Badge.options.themeColor.map((color) => (
                <>
                    <span>{color}</span>
                    <span><BadgeNormal fillMode="solid" themeColor={color}>Rectangle</BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color}></BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color} rounded="medium">Rounded</BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color} rounded="medium"></BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color} rounded="full">Pill</BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color} rounded="full"></BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color} rounded="full">1</BadgeNormal></span>
                    <span><BadgeNormal fillMode="solid" themeColor={color} rounded="full"></BadgeNormal></span>
                </>
            ))}
        </div>
    </>
);
