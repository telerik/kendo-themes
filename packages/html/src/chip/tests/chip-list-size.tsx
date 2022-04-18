import React from 'react';
import ReactDOM from 'react-dom/client';
import { Chip, ChipList } from '../../chip';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Small</span>
            <section>
                <ChipList size="small">
                    <Chip text="Chip Text" size="small"></Chip>
                    <Chip text="Chip Text" size="small"></Chip>
                    <Chip text="Chip Text" size="small"></Chip>
                </ChipList>
            </section>

            <span>Medium</span>
            <section>
                <ChipList size="medium">
                    <Chip text="Chip Text" size="medium"></Chip>
                    <Chip text="Chip Text" size="medium"></Chip>
                    <Chip text="Chip Text" size="medium"></Chip>
                </ChipList>
            </section>

            <span>Large</span>
            <section>
                <ChipList size="large">
                    <Chip text="Chip Text" size="large"></Chip>
                    <Chip text="Chip Text" size="large"></Chip>
                    <Chip text="Chip Text" size="large"></Chip>
                </ChipList>
            </section>
        </div>
    </>
);
