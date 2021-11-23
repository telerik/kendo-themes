import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';
import { ListGroupHeaderStatic } from './list-group-header.jsx';
import { ListContentStatic } from './list-content.jsx';
import { ListItemStatic } from './list-item.jsx';

class List extends Component {

    _transformChildrenUniversal() {
        let virtualization = this._props.virtualization;
        let children = this._props.children;
        let outerHeader;
        let listContent;
        let listChildren = [];
        let newChildren = [];

        children.forEach( child => {
            if ( child.type === 'OPTGROUP') {
                if (child.props.root === true) {
                    outerHeader = <ListGroupHeaderStatic {...child.props}>{child.props.label}</ListGroupHeaderStatic>;

                    child.props.children.forEach( optChild => {
                        listChildren.push( <ListItemStatic {...optChild.props} /> );
                    });
                } else {
                    child.props.children.forEach( ( optChild, index ) => {
                        let groupName = '';

                        if ( index === 0 ) {
                            groupName = child.props.label;
                            optChild.props.className = [ optChild.props.className, 'k-first' ];
                        }

                        listChildren.push( <ListItemStatic {...optChild.props} groupName={groupName} /> );
                    });
                }
            } else if ( child.type === 'OPTION' ) {
                listChildren.push( <ListItemStatic {...child.props} /> );
            }
        });

        listContent = <ListContentStatic virtualization={virtualization}>{listChildren}</ListContentStatic>;

        newChildren.push( outerHeader );
        newChildren.push( listContent );

        this._props.children = newChildren;
    }

    _transformChildrenAngular() {
        let virtualization = this._props.virtualization;
        let children = this._props.children;
        let outerHeader;
        let listContent;
        let listChildren = [];
        let newChildren = [];

        children.forEach( child => {
            if ( child.type === 'OPTGROUP') {
                if (child.props.root === true) {
                    outerHeader = <ListGroupHeaderStatic {...child.props}>{child.props.label}</ListGroupHeaderStatic>;

                    child.props.children.forEach( optChild => {
                        listChildren.push( <ListItemStatic {...optChild.props} /> );
                    });
                } else {
                    listChildren.push( <ListGroupHeaderStatic {...child.props}>{child.props.label}</ListGroupHeaderStatic> );

                    child.props.children.forEach( optChild => {
                        listChildren.push( <ListItemStatic {...optChild.props} /> );
                    });
                }
            } else if ( child.type === 'OPTION' ) {
                listChildren.push( <ListItemStatic {...child.props} /> );
            }
        });

        listContent = <ListContentStatic virtualization={virtualization}>{listChildren}</ListContentStatic>;

        newChildren.push( outerHeader );
        newChildren.push( listContent );

        this._props.children = newChildren;
    }

    init() {
        let framework = this._props.framework;

        if ( this._props.children.length === 0 ) {
            this._props.children.push( <div className="k-nodata">No data found.</div> );
            return;
        }

        if ( framework === 'angular' || framework === 'blazor' ) {
            this._transformChildrenAngular();
            return;
        }

        this._transformChildrenUniversal();
    }

    render() {
        return <ListStatic {...this.props} />;
    }
}

function ListStatic(props) {
    const {
        className: ownClassName,
        children,

        size,

        virtualization,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listClasses = [
        ownClassName,
        'k-list',
        styles.sizeClass( size, 'k-list' ),
        {
            'k-virtual-list': virtualization === true
        }
    ];


    let legacyListClasses = [
        ownClassName,
        'k-list-container'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyListClasses} {...ariaAttr} {...htmlAttributes}>
                {children}
            </div>
        );
    }

    return (
        <div className={listClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

ListStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    size: 'medium',

    virtualization: false
};

ListStatic.propTypes = {
    framework: typeof [ 'universal', 'angular' ],
    children: typeof [],
    className: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],

    virtualization: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { List, ListStatic };
