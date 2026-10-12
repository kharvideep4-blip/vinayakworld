# Image guide for vinayakworld.com

Drop the generated files into these folders using EXACTLY these names. No code change is needed.
Until a file exists, the site automatically shows the built-in illustration instead.

## Hero slider (home page background)  - size 1920 x 1080 px (16:9), JPG, under 400 KB
public/images/hero/hero-networking.jpg
public/images/hero/hero-cloud.jpg
public/images/hero/hero-ai.jpg
public/images/hero/hero-cybersecurity.jpg

## Course thumbnails  - size 1200 x 720 px (5:3), JPG, under 200 KB
public/images/courses/networking.jpg
public/images/courses/cloud-computing.jpg
public/images/courses/artificial-intelligence.jpg
public/images/courses/cybersecurity.jpg

Tip: compress at https://squoosh.app (JPG, quality 75 to 80).

## Style line to add to EVERY prompt
Dark navy blue and warm amber gold colour palette, clean modern editorial style, soft cinematic lighting, high detail, no text, no letters, no logos, no watermark, no people.

## Hero prompts (16:9). Keep the LEFT 45 percent of the image darker and emptier, because the headline sits there.
hero-networking: Wide cinematic photo of a modern server and network room, rows of racks with glowing blue and amber network cables and switch ports, shallow depth of field, subject on the right side, dark empty space on the left.
hero-cloud: Wide cinematic render of a futuristic data centre corridor with glowing server racks, faint light streams rising upward like a cloud of data, subject on the right side, dark empty space on the left.
hero-ai: Wide cinematic abstract visualisation of a neural network, glowing nodes and connecting lines forming a luminous brain-like structure, subject on the right side, dark empty space on the left.
hero-cybersecurity: Wide cinematic scene of a dark security operations room with large monitors showing abstract network maps and a glowing padlock shield, no readable text on screens, subject on the right side, dark empty space on the left.

## Thumbnail prompts (5:3). Keep the subject CENTRED, because cards crop the top and bottom slightly.
networking: Centred isometric illustration of a small office network, router, two switches, laptops and cables connected by glowing lines, deep navy background, amber highlights.
cloud-computing: Centred isometric illustration of a cloud above a row of servers, connected by glowing amber lines, deep navy background.
artificial-intelligence: Centred illustration of a glowing microchip with a neural network of nodes radiating from it, deep navy background, amber and light blue highlights.
cybersecurity: Centred isometric illustration of a large shield with a padlock, surrounded by faint network lines, deep navy background, amber highlights.


## Course page hero
No image needed. It uses animated floating particles and orbs (src/components/CourseHeroBg.jsx).
