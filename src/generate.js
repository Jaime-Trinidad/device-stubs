const {generateTemplateFiles} = require('generate-template-files');
const chalk = require('chalk');


export async function createTemplate(options){
if(options.template === 'index'){
    generateTemplateFiles([
        // Prompt and fill TTN Device Repository Templates
        
        {
            option: ( 'Fill Index Template'),
            defaultCase: '(kebabCase)',
            entry: {
                folderPath: './__index__.yaml',
            },
            stringReplacers: [
            {question: chalk.green.bold('Insert index'), slot: '__index__'},
            {question: chalk.dim( 'Unique identifier of the end device (lowercase, alphanumeric with dashes, max 36 characters)'), slot: '__id__'}
            ],
            output: {
                path: './device/__index__(lowerCase).yaml',
                pathAndFileNameDefaultCase: '(kebabCase)',
            },
        }, 
         
    ]);
} else if (options.template === 'device'){
    generateTemplateFiles([
        {
            option: 'Fill Device Template',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './__model__.yaml',
            },
            stringReplacers: [
                {question: chalk.green.bold('File name'), slot: '__model__'},
                {question: chalk.dim('Name of your End Device'), slot: '__name__'},
                {question: chalk.dim('Add a description of your End Device'), slot: '__description__'}, 
                {question: chalk.dim('Hardware Version?'), slot: '__hwdversion__'},
                {question: chalk.dim('Firmware Version?'), slot: '__fmwversion__'}, 
                { question: chalk.dim('Your device is LoRaWAN Certified? (true or false)'), slot: '__loracert__'}],
            output: {
                path: './device/__model__(lowerCase).yaml',
                pathAndFileNameDefaultCase: '(kebabCase)',
            },
        }, 
    ]);

} else if (options.template === 'profile'){
    generateTemplateFiles([
        {
            option: 'Fill Profile Template',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './__profile__-profile.yaml',
            },
            stringReplacers: [
                {question: chalk.green.bold('Name of your profile file'), slot: '__profile__'},
                {question: chalk.dim('LoRaWAN MAC version: 1.0, 1.0.1, 1.0.2, 1.0.3, 1.0.4 or 1.1'), slot: '__macversion__'},
                {question: chalk.dim('Parameters Version: 1.0: TS001-1.0, 1.0.1: TS001-1.0.1, 1.0.2: RP001-1.0.2 or RP001-1.0.2-RevB, 1.0.3: RP001-1.0.3-RevA, 1.0.4: RP002-1.0.0 or RP002-1.0.1, 1.1: RP001-1.1-RevA or RP001-1.1-RevB'), slot: '__paramversion__'}, 
                {question: chalk.dim('Maximum EIRP'), slot: '__maxeirp__'}],
            output: {
                path: './device/__profile__(lowerCase)-profile.yaml',
                pathAndFileNameDefaultCase: '(kebabCase)',
            },
        }, 
    ]);

} else if (options.template === 'codec'){
    generateTemplateFiles([
        {
            option: 'Fill Codec Template',
            defaultCase: '(noCase)',
            entry: {
                folderPath: './__codec__-codec.yaml',
            },
            stringReplacers: [
                {question: chalk.greenBright.bold('Name of your codec file'), slot: '__codec__'},
                {question: chalk.dim('Name of your decoder file'), slot: '__decoder__'}
                ],
            output: {
                path: './device/__codec__(lowerCase)-codec.yaml',
                pathAndFileNameDefaultCase: '(kebabCase)',
            },
        }, 
    ]);

}
}