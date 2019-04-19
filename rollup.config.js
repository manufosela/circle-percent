import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  preserveSymlinks: true,
	input: ['circle-percent.js'],
	output: {
		file: 'build/circle-percent.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
    babel()
  ]
};