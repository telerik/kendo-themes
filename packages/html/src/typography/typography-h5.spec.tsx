import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_H5_CLASSNAME = 'k-h5';

const states = [];
const options = {};

export type KendoTypographyH5Props = React.HTMLAttributes<HTMLHeadingElement>;

export const TypographyH5: KendoComponent<KendoTypographyH5Props> = (
    props: KendoTypographyH5Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_H5_CLASSNAME)} type="h5" />
    );
};

TypographyH5.states = states;
TypographyH5.options = options;
TypographyH5.className = TYPOGRAPHY_H5_CLASSNAME;

export default TypographyH5;
