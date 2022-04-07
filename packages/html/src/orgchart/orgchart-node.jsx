import * as styles from '../../utils/styles';
import { globalDefaultProps, Component } from '../component/index';
import { AvatarStatic } from '../avatar/index';
import { ButtonStatic } from '../button/index';
import { CardStatic, CardBodyStatic, CardTitleStatic, CardSubtitleStatic } from '../card/index';


class OrgChartNode extends Component {
    init() {
        let actions = this._props.actions;
        let newActions = [];

        if (actions === undefined) {
            this._props.actions = [];
            return;
        }

        if (Array.isArray(actions)) {
            return;
        }

        actions.split(',').forEach(action => {
            newActions.push(action.trim());
        });

        this._props.actions = newActions;
    }

    render() {
        return <OrgChartNodeStatic {...this.props} />;
    }
}

function OrgChartNodeStatic(props) {

    const {
        className: ownClassName,
        children,

        title,
        subtitle,
        actions,
        color,

        avatar,
        avatarType,

        line,
        plus,

        aria,

        ...htmlAttributes
    } = props;



    let OrgChartNodeClasses = [
        ownClassName,
        'k-orgchart-node',
        styles.orientationStackClass( "vertical" ),
        styles.alignClass( 'center', 'k-align-items' ),
    ];

    let OrgChartNodeBodyClasses = [
        styles.orientationStackClass( "horizontal" ),
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={OrgChartNodeClasses} {...ariaAttr} {...htmlAttributes}>
            <CardStatic className="k-orgchart-card">
                <CardBodyStatic className={OrgChartNodeBodyClasses} actions={actions} style={`border-top-color: ${color}`}>

                    <AvatarStatic type={avatarType} themeColor="secondary">
                        { avatarType === 'image'
                            ? <img src={avatar} />
                            : avatar
                        }
                    </AvatarStatic>

                    <div className="k-card-title-wrap k-vstack">
                        <CardTitleStatic className="k-text-ellipsis">{title}</CardTitleStatic>
                        <span className="k-spacer"></span>
                        <CardSubtitleStatic className="k-text-ellipsis">Card, Subtitle</CardSubtitleStatic>
                    </div>
                    <span className="k-spacer"></span>

                </CardBodyStatic>

            </CardStatic>
            {line && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            {plus && <ButtonStatic className="k-orgchart-button" icon="plus"></ButtonStatic> }
        </div>
    );
}

OrgChartNodeStatic.defaultProps = {
    ...globalDefaultProps,

    title: '',
    subtitle: '',
    actions: [],
    color: '',

    avatar: '',
    avatarType: 'text'
};

OrgChartNodeStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    title: typeof '',
    subtitle: typeof '',
    actions: typeof [],
    color: typeof '',

    line: typeof false,
    plus: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { OrgChartNode, OrgChartNodeStatic };
