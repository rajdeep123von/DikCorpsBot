var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});

module.exports ={
   name: 'image',
   description:"This is a image command!",
   async execute(client, message, args, Discord){
     const image_query = args.join(' ');
     if(!image_query) return message.channel.send('Photo name tu likh mokkel');
     
     const image_results = await google.scrape(image_query,1)
     message.channel.send(image_results[0].url)
   }
 } 