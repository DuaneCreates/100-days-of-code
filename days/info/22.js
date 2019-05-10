export default {
  day: 22,
  type: 'log',
  date: '2019-03-30',
  title: 'The Problem of the Awesome SPA',
  post: `
  Single Page Applications (SPA) have taken over the world, but there has always been the problem of web crawlers. What's the point of having an informative app if Google can't read it? You would lose so much traffic! Does this mean that you shouldn't build apps which are rendered on the client side with JavaScript? Hell no! Vue / React / Angular / etc are beautiful beasts.
  There are different solutions to make your SPA crawlable. The simplest one is to pre-render your app, which generates static HTML files out of your code. This however is problematic if your content changes frequently or is different per user, as you can't have dynamic content if it is staticly generated. A pre-rendering tool would go through each of your routes and builds HTML files, which would also make websites very fast as they just serve HTML without having to compute anything. Also, this would make hosting very easy and cheap!
  For more complicated scenarios, you can opt for server side rendering your app. This would compute the part of JavaScript using NodeJS, so by the time it is served to the client, it will already be built! This makes it possible for crawlers to read your websites, whatever the content is. This would mean that any code that manipulates the DOM or uses the window document, must be wrapped in a condition that checks if the rendering is being done by a server or client, as the server can't do such things.
  For Vue.js, [Nuxt](https://nuxtjs.org/) seems like an awesome way to do both of these. This is going to be next on my challenge list, where I will try to convert my #100daysofcode website to be server-side rendered. Let's see how it goes, next time!
  `,
  tags: ['js', 'seo', 'ssr', 'nuxt'],
  github_url: null,
  codepen_url: null
}
