import React from 'react';
import { BackIcon } from './icons';

interface Props {
    /** Label for what failed, e.g. "button/button-solid". */
    title: string;
    /** Link back to the listing (carrying current theme params). */
    backHref: string;
    children?: React.ReactNode;
}

interface State {
    error: Error | null;
}

/**
 * Catches both render-time errors and explicit failures (pass `error` via the
 * `Failure` helper below) and shows a styled glass card instead of a blank page.
 */
export class ErrorBoundary extends React.Component<Props, State> {
    state: State = { error: null };

    static getDerivedStateFromError(error: Error): State {
        return { error };
    }

    render() {
        const { error } = this.state;
        if (!error) return this.props.children;
        return <ErrorCard title={this.props.title} backHref={this.props.backHref} message={String(error)} />;
    }
}

export function ErrorCard({ title, backHref, message }: { title: string; backHref: string; message: string }) {
    return (
        <div className="devkit-error">
            <div className="devkit-error-card">
                <div className="devkit-error-title">Failed to load demo</div>
                <code className="devkit-error-route">{title}</code>
                <pre className="devkit-error-message">{message}</pre>
                <a className="devkit-error-back" href={backHref}>
                    <BackIcon className="devkit-icon" />
                    Back to all demos
                </a>
            </div>
        </div>
    );
}
