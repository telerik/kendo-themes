import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { TYPOGRAPHY_FOLDER_NAME, TYPOGRAPHY_MODULE_NAME } from './constants';
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
TypographyPre.moduleName = TYPOGRAPHY_MODULE_NAME;
TypographyPre.folderName = TYPOGRAPHY_FOLDER_NAME;

export default TypographyPre;
