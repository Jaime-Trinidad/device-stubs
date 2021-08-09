const chalk = require('chalk');
const fs = require('fs');
const ncp = require('ncp');
const path = require('path');
import { async } from 'rxjs';
import { promisify } from 'util';
const execa = require('execa');
import Listr from 'listr';
import { projectInstall } from 'pkg-install';


const access = promisify(fs.access);
const copy = promisify(ncp); //copy template in directory

async function copyTemplateFiles(options){
    return copy(options.templateDirectory, options.targetDirectory,{
        clobber: false,
    });
}

export async function createProject(options){
    options = {
        ...options,
        targetDirectory: options.targetDirectory || process.cwd(),

    };

    const currentFileUrl = import.meta.url;
    const templateDir = path.resolve(
        new URL(currentFileUrl).pathname,
        '../../templates',
        options.template.toLowerCase()
    );
    options.templateDirectory = templateDir;

    try{
        await access(templateDir, fs.constants.R_OK);
    } catch(err){
        console.error('%s Invalid template name', chalk.red.bold('ERROR'));
        process.exit(1);
    }

    const tasks = new Listr([
        {
            title: 'Copy project files',
            task: () => copyTemplateFiles(options), 
        },
      
    ]);

    await tasks.run();

    console.log('%s Device Repository files downloaded ', chalk.greenBright.bold('DONE'));
    return true;
}