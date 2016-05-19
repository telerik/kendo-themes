import React from 'react'
import ReactDOM from 'react-dom'

import { Slider } from '@telerik/kendo-react-inputs';
import { Dialog } from '@telerik/kendo-react-dialog';
import { Button } from '@telerik/kendo-react-buttons';
import '@telerik/kendo-theme-default/styles/slider/main.scss';
import '@telerik/kendo-theme-default/styles/dialog/main.scss';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: true,
            value: 4
        };
        this.valueChangeHandler = this.onValueChange.bind(this);
        this.dialogActionHandler = this.onDialogAction.bind(this);
    }

    updateState(newState) {
        this.setState(Object.assign({}, this.state, newState));
    }

    onValueChange(e) {
        this.updateState({ value: e.value });
    }

    onDialogAction(e) {
        this.updateState({ dialogVisible: false });
    }

    render() {
        const dialog = (
            <Dialog title="Slider in dialog" onClose={this.dialogActionHandler}>
                <Slider
                    min={0}
                    max={10}
                    smallStep={1}
                    onChange={this.valueChangeHandler}
                    value={this.state.value}
                />
            </Dialog>
        );

        return (
            <article>
                <h1>Sample Kendo UI for React Application</h1>

                <Button onClick={() => this.updateState({ dialogVisible: true })}>
                    Show dialog
                </Button>

                { this.state.dialogVisible ?  dialog : null }
            </article>
        );
    }
}

ReactDOM.render(<Container />, document.querySelector('#main'))
