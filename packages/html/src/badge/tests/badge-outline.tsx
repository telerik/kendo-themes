import { Badge } from '../badge.spec';
import { BadgeNormal } from '../templates/badge-normal';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-9">

            <span></span>
            <span className="col-2">Rectangle</span>
            <span className="col-2">Rounded</span>
            <span className="col-2">Pill</span>
            <span className="col">Circle</span>
            <span className="col">Dot</span>

            {Badge.options.themeColor.map((themeColor) => (
                <>
                    <span>{`${themeColor}`}</span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="none">Rectangle</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="none"></BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="medium">Rounded</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="medium"></BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="full">Pill</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="full"></BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="full">1</BadgeNormal></span>
                    <span><BadgeNormal fillMode="outline" themeColor={themeColor} rounded="full"></BadgeNormal></span>
                </>
            ))}
        </div>
    </>
);
