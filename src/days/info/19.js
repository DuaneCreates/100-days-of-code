export default {
  day: 19,
  type: 'result',
  date: '2019-03-24',
  title: 'Type & Fetch',
  post: `
  I've done a simple input with a key up event to automatically search when the user types, but only when the user stops typing for 350ms, to prevent calling the API with every key stroke.  
  Axios was used to fetch external data from a public API.  
  I also toggle a loading animation which I found on [Codepen](https://codepen.io/sean_codes/pen/RKzNWj) when I am requesting data from the API.  
  
  You can't just call the API request with every key up event, as that would send too many requests and cause a problem of race conditions.  
  
  Let's picture the problem. If you press a key, a request is sent, and press another key, you can't guarantee that the first API request will complete before the second one, so your last-received response might be from an 'old' search term.  
  To help with this problem, I used [debounce](https://css-tricks.com/debouncing-throttling-explained-examples/), which is a technique used to group a number of sequentials calls into one, along a time period.  
  This does not fix the problem, it just helps, and prevents lots of unnecessary calls to a server. To really fix the problem, you have to cancel the request itself, which Axios allows by using a [cancellation token](https://github.com/axios/axios#cancellation).  
  `,
  tags: ['js', 'axios', 'api', 'tailwindcss'],
  github_url: 'https://github.com/DuaneCreates/100-days-of-code/tree/day/19',
  codepen_url: null,
};
