import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_CODE_CLASSNAME = 'k-code';

const states = [];
const options = {};

export type KendoTypographyCodeProps = React.HTMLAttributes<HTMLElement>;

export const TypographyCode: KendoComponent<KendoTypographyCodeProps> = (
    props: KendoTypographyCodeProps
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_CODE_CLASSNAME)} type="code" />
    );
};

TypographyCode.states = states;
TypographyCode.options = options;
TypographyCode.className = TYPOGRAPHY_CODE_CLASSNAME;
TypographyCode.moduleName = "typography";
TypographyCode.folderName = TypographyCode.moduleName;

export default TypographyCode;
