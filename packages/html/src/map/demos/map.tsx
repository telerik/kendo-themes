import { KendoMapProps } from '../map.spec';
import { MapNormal } from '../templates/map-normal';

const options = {};
const states = [];
const variants = [];
const defaults = {};
const modifiers = [];

export const MapDemo = (props: KendoMapProps) => {
    return (
        <MapNormal className="k-bg-primary-subtle" markerStyle={{ zIndex: "1000", left: "250px", top: "200px" }} style={{ position: "relative", width: "500px", height: "350px" }} {...props} />
    );
}


MapDemo.options = options;
MapDemo.states = states;
MapDemo.variants = variants;
MapDemo.defaultOptions = defaults;
MapDemo.modifiers = modifiers;

export default MapDemo;

