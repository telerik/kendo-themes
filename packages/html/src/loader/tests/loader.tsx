import { Loader, LoaderConverging, LoaderInfinite, LoaderNormal } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>

            {Loader.options.size.map((size) => (
                <>
                    <span>{size}</span>
                    <span>
                        <LoaderNormal size={size} />
                    </span>

                    <span>
                        <LoaderInfinite size={size} />
                    </span>

                    <span>
                        <LoaderConverging size={size} />
                    </span>
                </>

            ))}
        </div>
    </>
);
