# Front-end final mockup-to-website project

## Structure

This is a project in the front-end course so I make it a good one :)

I follow the design in figma:

- online at [figma.com/Laaqiq-1-Portfolio-detail-Responsive](https://www.figma.com/file/VgF87mULloYb7HZ1EMCRzU/Laaqiq-1-Portfolio-detail-Responsive?node-id=0%3A1) (Recommended)
- by importing the `.fig` file in [the `source_materials` folder](./source_materials/) into your figma app.

### Source files

The sorce materials are in the `source_materials` folder. I have any fonts I need, images that are required by the design work.

2. I install any OTF/TTF fonts found in the `source_materials/fonts` folder in my system, so that I don't get bugged by Figma's Font replacement dialog box.

### Webroot

As with most setups, it's a good idea to isolate all the web-files in the `webroot` folder.
Export all the images, fonts, HTML, JS, and CSS I use to this webroot folder (in the right subfolder of course!).

3. I create a `webroot/index.html` file.

### Sass

I am using the `scss` folder for all my Sass files.

4. I create a `scss/index.scss` file, that will act as our manifest Sass file.
5. I build my CSS file once by running the `npm run scss` script.
6. I link up the new `webroot/css/index.css` stylesheet in my `index.html`

All my Sass files will be output to the `webroot/css` folder.