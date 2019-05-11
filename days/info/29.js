export default {
  day: 29,
  type: 'log',
  date: '2019-04-21',
  title: 'Prepare for Liftoff!',
  post: `
  I finally managed to deploy this website! It was nothing like I ever did before, reverse proxy, what?!    
  When you have a Node.js application, you run it on a mini server by Node.js, but that makes it run on localhost and a port. So how can you make it accessible to the public? You need to use a reverse proxy, which I've set up on my Nginx-based VPS. Basically you set a rule in Nginx to redirect external requests to the localhost app, and that's it. Once you get it, it is pretty simple.
  After that, I had a bunch of problems with nuxt.js to make certain code that should only run on the client side check which environment it is currently in before executing.  
  It was a learning curve, but I have learned so much and that's how you get better. My next project that uses Nuxt.js will be smoother now thanks to this headache.
  [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04) has some awesome tutorials about this, and other related things.
  
  ![Node.js App Deployment Diagram](/days/29/diagram.png "Node.js App Deployment Diagram")   
  `,
  tags: ['js', 'nodejs', 'vps'],
  github_url: null,
  codepen_url: null
}
