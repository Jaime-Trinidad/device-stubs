# Download Device Repository Templates CLI

Download The Things Network device repository pre-build templates, you only need to fill them.

## Documentation

- Create a folder and install this npm .
- Inside the folder you have created Run create-project, it will create a folder and download The Things Network Device Repository templates inside of it.

```bash
folder
├── src
│   ├── index.yaml              # vendor index
│   ├── device.yaml             # device definition
│   ├── profile.yaml            # generic end device profile
│   ├── codec-x                 # payload codec definition
```
- Files need to be fill following instructions:

https://user-images.githubusercontent.com/81958808/128865600-f3d5067c-f48a-4f68-8ad0-988d29a0d9b5.mov

- If you download codec file it will be neccesary to add the decoder .js file.
- Device Repository information can be review in this link https://github.com/TheThingsNetwork/lorawan-devices

## Example

Create a new folder named dev1.
Inside this folder run:

```bash
create-project
```

Depending on your selection template files will be downloaded in your folder

https://user-images.githubusercontent.com/81958808/128866623-69936451-bb52-467b-90b2-7a9bd9f7608d.mov

Now you only have to fill all the parameters of each files.
