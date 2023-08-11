export type ComponentSlot<P extends object> = React.ReactElement<P> | React.ElementType<P>;

function isValidElement(object) {
    return typeof object === "object" && object !== null && object.type !== undefined;
}
export const componentSlot = <P extends object>(slot: ComponentSlot<P>): [JSX.ElementType, P] => {
    if (isValidElement(slot)) {
        return [ (slot as JSX.Element).type, (slot as JSX.Element).props ];
    }
    return [ slot as JSX.ElementType, {} as P ];
};
