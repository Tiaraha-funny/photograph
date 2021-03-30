# Front-end final mockup-to-website project

## Design

You can see the live design [here](https://front-end-final-peta.netlify.app/) and the Demo [here]()

## Structure

This is a front-end final project made by pure css and html :)

I followed the design in figma:

- online at [figma.com/Laaqiq-1-Portfolio-detail-Responsive](https://www.figma.com/file/VgF87mULloYb7HZ1EMCRzU/Laaqiq-1-Portfolio-detail-Responsive?node-id=0%3A1)
- by importing the `.fig` file in [the `source_materials` folder](./source_materials/) into the figma app.

### Source files

The sorce materials are in the `source_materials` folder. I have any fonts I need and the images that are required by the design to work.

2. I installed any OTF/TTF fonts found in the `source_materials/fonts` folder in my system, so that I don't get bugged by Figma's Font replacement dialog box.

### Webroot

As with most setups, it's a good idea to isolate all the web-files in the `webroot` folder.
Export all the images, fonts, HTML, JS and CSS I used to this webroot folder.

### Sass

I was using the `scss` folder for all my Sass files to keep the styles.

4. I created a `scss/index.scss` file, that will act as my manifest Sass file.
5. I built my CSS file once by running the `npm run scss` in package script.
6. I linked up the new `webroot/css/index.css` stylesheet in my `index.html`

All my Sass files will be output to the `webroot/css` folder.