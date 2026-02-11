import { PanelBar } from '../panelbar.spec';
import { PanelBarContent } from '../panelbar-content';
import { PanelBarItem } from '../panelbar-item';

export const PanelBarExpandContent = (props) => (
    <PanelBar
        children={
            <>
                <PanelBarItem header expanded text="Item 1">
                    <PanelBarContent>
                        <p>Paragraph content in template.</p>
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 2">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 3">
                    <PanelBarContent>content</PanelBarContent>
                </PanelBarItem>
                <PanelBarItem header text="Item 4" />
            </>
        }
        {...props}
    />
);
