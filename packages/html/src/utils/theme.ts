export interface KendoThemeMaps {
    sizeMap: Record<Exclude<any, null>, string>;
    roundedMap: Record<Exclude<any, null>, string>;
    calloutMap: Record<Exclude<any, null>, string>;
    orientationMap: Record<Exclude<any, null>, string>;
}

export const kendoThemeMaps: KendoThemeMaps = {
    sizeMap: {
        small: 'sm',
        medium: 'md',
        large: 'lg'
    },
    roundedMap: {
        small: 'sm',
        medium: 'md',
        large: 'lg'
    },
    calloutMap: {
        top: 'n',
        bottom: 's',
        left: 'w',
        right: 'e'
    },
    orientationMap: {
        vertical: 'vstack',
        horizontal: 'hstack',
    },
};
