import { readFileSync, writeFileSync } from 'fs'


const DEFAULT_BUILD_OUTPUT_HTML = './dist/index.html'

function modifyBuildOutput() {
    var data = readFileSync(DEFAULT_BUILD_OUTPUT_HTML, 'utf-8');
    
    var newValue = data
        .replaceAll(/crossorigin src="/gm, 'src=".')
        .replaceAll(/crossorigin href="/gm, 'href=".');


    writeFileSync('./dist/index.html', newValue, 'utf-8');
}

modifyBuildOutput()