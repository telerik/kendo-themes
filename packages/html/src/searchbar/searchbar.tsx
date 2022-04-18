import * as React from 'react';
import { InputInnerInput } from '../input';

export interface SearchBoxProps {
    className?: string;
    placeholder?: string;
}

export class SearchBox extends React.Component<SearchBoxProps> {

    render() {
        const {
            placeholder,
        } = this.props;

        return (
            <span className="k-searchbar">
                <InputInnerInput placeholder={placeholder} />
            </span>
        );
    }
}
