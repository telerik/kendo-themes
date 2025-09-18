import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { TYPOGRAPHY_FOLDER_NAME, TYPOGRAPHY_MODULE_NAME } from './constants';
import { classNames } from '../misc';

const TYPOGRAPHY_P_CLASSNAME = 'k-paragraph';

const states = [];
const options = {};

export type KendoTypographyPProps = React.HTMLAttributes<HTMLParagraphElement>;

export const TypographyP: KendoComponent<KendoTypographyPProps> = (
    props: KendoTypographyPProps
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_P_CLASSNAME)} type="p" />
    );
};

TypographyP.states = states;
TypographyP.options = options;
TypographyP.className = TYPOGRAPHY_P_CLASSNAME;
TypographyP.moduleName = TYPOGRAPHY_MODULE_NAME;
TypographyP.folderName = TYPOGRAPHY_FOLDER_NAME;

export default TypographyP;
