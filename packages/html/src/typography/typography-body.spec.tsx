import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_BODY_CLASSNAME = 'k-body';

const states = [];
const options = {};

export type KendoTypographyBodyProps = React.HTMLAttributes<HTMLElement>;

export const TypographyBody: KendoComponent<KendoTypographyBodyProps> = (
    props: KendoTypographyBodyProps
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_BODY_CLASSNAME)} type="body" />
    );
};

TypographyBody.states = states;
TypographyBody.options = options;
TypographyBody.className = TYPOGRAPHY_BODY_CLASSNAME;

export default TypographyBody;
