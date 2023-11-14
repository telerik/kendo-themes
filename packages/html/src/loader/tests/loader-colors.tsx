import { Loader, LoaderConverging, LoaderInfinite, LoaderNormal } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>

            {Loader.options.themeColor.map((color) => (
                <>
                    <span>{color}</span>

                    <span>
                        <LoaderNormal size={'large'} themeColor={color} />
                    </span>

                    <span>
                        <LoaderInfinite size={'large'} themeColor={color} />
                    </span>

                    <span>
                        <LoaderConverging size={'large'} themeColor={color} />
                    </span>
                </>

            ))}

        </div>
    </>
);
