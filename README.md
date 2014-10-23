PS-BannerToolkit
=========

A set of Photoshop scripts for automating monotonous tasks in display ad creation. Use at your own risk!


### Installation

OSX: Copy or alias Replacify.jsx and Duplicatify.jsx to this folder:
```
/Applications/Adobe Photoshop CC/Presets/Scripts
```

Windows: Copy or alias Replacify.jsx to this folder
```
C:\Program Files\Adobe\Adobe Photoshop CC 2014\Presets\Scripts
```

## Duplicatify

Create multiple copies of a document, rename and and resize them according to your inputs.

### Use

- Create a Photoshop document. Save it and give it a name with the following format: WIDTHxHEIGHT_FILENAME.psd. (Fx: "468x400_filename.psd"). 
- Run the script from the File > Scripts > Duplicatify menu.
- Enter all the sizes you need in the format: "WIDTHxHEIGHT, ...". You can paste formats from your media plan, and anything that does not conform to this pattern will be ignored.
- Check the folder where your original document was saved for the new documents. 
- Done!


## Replacify

Replacing texts in multiple files and layers. 

### Setup
Create a folder with your photoshop files and a replacify.json file:

```json
{
	"document" : {
		"close" : true
	},
	"layers":{
		"title" : {
			"contents" : "The NEW title"
		}, 
		"subtitle" : {
			"contents" : "This is the new subtitle"
		}, 
		"body" : {
			"contents" : "Quisque ullamcorper id diam sed pellentesque. Nunc lobortis fermentum aliquet. Nulla non suscipit erat. Proin auctor, massa id vulputate convallis, nisi dolor auctor est, sed posuere elit lorem sit amet tellus. Mauris ipsum metus, sagittis eget molestie at, tristique non nunc. Sed bibendum, tellus a aliquet ullamcorper, tellus dui placerat mi, sed gravida mi elit non dolor. Duis cursus mi eu vulputate accumsan."
		}
	}
}
```

Replacify will match text layer names in the .psd file with the data in the .json file.

You can update any value for the TextItem that accepts a boolean, numeric, or string value.

For example:
- contents = The text
- size = The font size
- font = The font name
- tracking = spacing

Reference: http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/photoshop/pdfs/photoshop-cc-javascript-ref.pdf
(Search for TextItem)

### Use

In Photoshop select File > Script > Replacify. Select the folder containing the replacify.json file and your .psd files you want to update.

Smack! Done!




The script includes a minified version of Douglas Crockfors's json2.js: 
https://github.com/douglascrockford/JSON-js