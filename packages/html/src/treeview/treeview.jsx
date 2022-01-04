import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { TreeviewGroupStatic } from './treeview-group.jsx';
import { TreeviewItemStatic } from './treeview-item.jsx';

class Treeview extends Component {

    static transformUL( ul ) {
        let children = ul.props.children;
        let items = [];

        children.filter( child => child.type === 'LI' ).forEach( li => {
            items.push( Treeview.transformLI( li ) );
        });

        return items;
    }

    static transformLI( li ) {
        let children = li.props.children;
        let text = li.props.text || '';
        let items = [];

        children.forEach( child => {
            if (text === '' && child.type === '#text') {
                text = child.props.text;
            }
            if (child.type === 'UL') {
                items.push( ...Treeview.transformUL( child ) );
            }
        });

        li.props.children = [];
        li.props.text = text;
        li.props.items = items;

        return <TreeviewItemStatic {...li.props} />;
    }

    init() {
        let children = this._props.children;
        let items = [];

        children.filter( child => child.type === 'LI' ).forEach( li => {
            items.push( Treeview.transformLI( li ) );
        });

        this._props.children = [];
        this._props.items = items;
    }

    render() {
        return <TreeviewStatic {...this.props} />;
    }
}

function TreeviewStatic(props) {
    const {
        className: ownClassName,

        items,

        size,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let treeviewClasses = [
        ownClassName,
        'k-treeview',
        styles.sizeClass( size, 'k-treeview' )
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyTreeviewClasses = [
            ownClassName,
            'k-treeview'
        ];

        return (
            <div className={legacyTreeviewClasses} {...ariaAttr} {...htmlAttributes}>
                <TreeviewGroupStatic className="k-treeview-lines" items={items} />
            </div>
        );
    }

    return (
        <div className={treeviewClasses} {...ariaAttr} {...htmlAttributes}>
            <TreeviewGroupStatic className="k-treeview-lines" items={items} />
        </div>
    );
}

TreeviewStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],
    items: [],

    size: 'medium'
};

TreeviewStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    items: typeof [],

    size: typeof [ null, 'small', 'medium', 'large' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Treeview, TreeviewStatic };
