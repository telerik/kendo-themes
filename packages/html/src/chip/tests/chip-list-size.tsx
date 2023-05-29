import { Chip, ChipList } from '../../chip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            {Chip.options.size.map((size) => (
                <>
                    <span>{size}</span>
                    <section>
                        <ChipList size={size}>
                            <Chip text="Chip Text" size={size}></Chip>
                            <Chip text="Chip Text" size={size}></Chip>
                            <Chip text="Chip Text" size={size}></Chip>
                        </ChipList>
                    </section>
                </>
            ))}
        </div>
    </>
);
