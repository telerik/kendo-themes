import { babel } from '@rollup/plugin-babel';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';


const config = {
    input: 'src/index.js',
    output: {
        name: 'kendo.Html',
        dir: 'dist',
        format: 'iife',
    },
    plugins: [
        // commonjs(),
        // nodeResolve(),
        babel({
            babelHelpers: 'bundled',
            extensions: [ '.js', '.jsx' ]
            // extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
        })
    ]
};

export default config;
