const fs = require('fs')
const { createCanvas } = require('canvas')

const width = 1200  
const height = 1200
const opacity = Math.random() * (0.8 - 0.3) + 0.3
const randomColor = Math.floor(Math.random()*16777215).toString(16);

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#000'
context.fillRect(0, 0, width, height)

const text = 'NOTHING.'

context.font = '50pt Sans'
context.textAlign = 'center'
context.fillStyle = "#" + randomColor
context.fillText(text, Math.floor(Math.random() * (1000 - 400) + 400), Math.floor(Math.random() * (1000 - 400) + 400))

for ( x = 0; x < canvas.width; x++ ) {
    for ( y = 0; y < canvas.height; y++ ) {
       number = Math.floor( Math.random() * 255 );

       context.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
       context.fillRect(x, y, Math.random() * 2, Math.random() * 2);
    }
 }

const buffer = canvas.toBuffer('image/png')
fs.writeFileSync('./image.png', buffer)