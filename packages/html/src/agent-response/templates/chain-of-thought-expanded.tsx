import ChainOfThought from '../chain-of-thought.spec';
import Thought from '../thought.spec';

export const ChainOfThoughtExpanded = (props: any) => (
    <ChainOfThought label="Thought" time="for 4m 18s" completed expandable expanded {...props}>
        <Thought icon="search" label="Searched for components" completed />
        <Thought icon="book" label="Reviewed component variants" completed />
    </ChainOfThought>
);
