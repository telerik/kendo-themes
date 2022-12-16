import * as React from 'react';

export interface AppbarSectionProps {
    children?: React.ReactNode;
}

export class AppbarSection extends React.Component<AppbarSectionProps> {
    render() {
        const { children } = this.props;

        return (
            <div className="k-appbar-section">
                {children}
            </div>
        );
    }
}
