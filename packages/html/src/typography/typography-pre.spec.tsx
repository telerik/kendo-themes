import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_PRE_CLASSNAME = 'k-pre';

const states = [];
const options = {};

export type KendoTypographyPreProps = React.HTMLAttributes<HTMLPreElement>;

export const TypographyPre: KendoComponent<KendoTypographyPreProps> = (
    props: KendoTypographyPreProps
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_PRE_CLASSNAME)} type="pre" />
    );
};

TypographyPre.states = states;
TypographyPre.options = options;
TypographyPre.className = TYPOGRAPHY_PRE_CLASSNAME;
TypographyPre.moduleName = "typography";
TypographyPre.folderName = "typography";

export default TypographyPre;
