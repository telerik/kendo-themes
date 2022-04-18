import React from 'react';
import ReactDOM from 'react-dom/client';
import { Chip, ChipList } from '../../chip';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>Solid chip List</span>
            <span>Solid chip List (rtl)</span>
            <span>Outline chip list</span>
            <span>Outline chip list (rtl)</span>

            <section>
                <ChipList>
                    <Chip>First</Chip>
                    <Chip selected>Selected</Chip>
                </ChipList>
            </section>
            <section className="k-rtl">
                <ChipList>
                    <Chip>First</Chip>
                    <Chip selected>Selected</Chip>
                </ChipList>
            </section>

            <section>
                <ChipList>
                    <Chip fillMode="outline">First</Chip>
                    <Chip fillMode="outline" selected>Selected</Chip>
                </ChipList>
            </section>
            <section className="k-rtl">
                <ChipList>
                    <Chip fillMode="outline">First</Chip>
                    <Chip fillMode="outline" selected>Selected</Chip>
                </ChipList>
            </section>
        </div>
    </>
);
