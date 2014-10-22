Replacify
=========

A photoshop script to automate replacing texts in multiple files and layers. Use at your own risk!


## Installation

OSX: Copy or alias Replacify.jsx to this folder
```
/Applications/Adobe Photoshop CC/Presets/Scripts
```

Windows: Copy or alias Replacify.jsx to this folder
```
C:\Program Files\Adobe\Adobe Photoshop CC 2014\Presets\Scripts
```

## Setup
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

## Use

In Photoshop select File > Script > Replacify. Select the folder containing the replacify.json file and your .psd files you want to update.

Smack! Done!




The script includes a minified version of Douglas Crockfors's json2.js: 
https://github.com/douglascrockford/JSON-js