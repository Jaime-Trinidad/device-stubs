# Download and fill Device Repository Templates CLI

This is a Command-line tool to download and fill The Things Network Device Repository templates.

## Documentation

Follow instructions to install this package:

- Create a folder.
- Inside of the created folder install this package `npm install devrepo-templates`
- Inside the folder you will have all this  folders and files, follow the comments: 

```bash
folder
│ package.json                  #delete this file
│ package-lock.json             #delete this file
├── node_modules
│   ├── ...
│   ├── devrepo-templates
│   │   ├── bin                 #move this folder to main folder
│   │   ├── src                 #move this folder to main folder
│   │   ├── templates           #move this folder to main folder
│   │   ├── package.json        #move this file to main folder
│   │   ├── package-lock.json.  #move this file to main folder
│   ├── ...
```
- Your main folder must end with the next structure:

```bash
folder
├── bin                 
├── src                 
├── templates           
│ package.json        
│ package-lock.json.  
├── node_modules
```
- Once you have this structure run 'create-project' and you can start downloading and filling device repository templates

<img width="580" alt="Screen Shot 2021-08-15 at 19 55 46" src="https://user-images.githubusercontent.com/81958808/129498295-3f353500-4599-4747-9f63-17b43fd81d87.png">

- When you finish with any template CLI will create a folder named device, inside of it will be your file.

```bash
folder
├── ...                 
├── device
│   ├── index.yaml
├── ...           
```

## Example

Create a new folder named test6
Run 'create-project' and fill device template

<img width="511" alt="Screen Shot 2021-08-15 at 20 02 26" src="https://user-images.githubusercontent.com/81958808/129498568-6239d2e4-e5b4-4c7c-9188-09b7849946ce.png">

Download template and fill the infomation: file name, name of the device, description, etc. 
Fill the Output path as the CLI ask.

<img width="573" alt="Screen Shot 2021-08-15 at 20 04 56" src="https://user-images.githubusercontent.com/81958808/129498670-e91395fe-c4cc-4a3c-9284-100812e043be.png">

Device file will be created in device folder with the information you fill.

<img width="947" alt="Screen Shot 2021-08-15 at 20 09 17" src="https://user-images.githubusercontent.com/81958808/129498815-e12cabce-6b88-46c6-a38b-9534cf734361.png">

Now you can use this file in device repository for adding new devices.
