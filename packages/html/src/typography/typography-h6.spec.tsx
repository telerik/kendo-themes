import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { TYPOGRAPHY_FOLDER_NAME, TYPOGRAPHY_MODULE_NAME } from './constants';
import { classNames } from '../misc';

const TYPOGRAPHY_H6_CLASSNAME = 'k-h6';

const states = [];
const options = {};

export type KendoTypographyH6Props = React.HTMLAttributes<HTMLHeadingElement>;

export const TypographyH6: KendoComponent<KendoTypographyH6Props> = (
    props: KendoTypographyH6Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_H6_CLASSNAME)} type="h6" />
    );
};

TypographyH6.states = states;
TypographyH6.options = options;
TypographyH6.className = TYPOGRAPHY_H6_CLASSNAME;
TypographyH6.moduleName = TYPOGRAPHY_MODULE_NAME;
TypographyH6.folderName = TYPOGRAPHY_FOLDER_NAME;

export default TypographyH6;
