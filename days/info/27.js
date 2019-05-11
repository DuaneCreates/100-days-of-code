export default {
  day: 27,
  type: 'log',
  date: '2019-04-13',
  title: 'Local Storage - Web Browser',
  post: `
  LocalStorage is a storage type, sitting in the browser, which JavaScript can save and load data from/to. This is super helpful if you want to persist data to be used after the user comes back after some time, even if the browser window was closed.  
  There are more advanced ways to store data in your browser, as LocalStorage is synchronous, and only allows 5mb of data. It is not secure to store data as the data can be viewed by the user, so do not store any sensitive data! It is not a replacement for a database.  
    
  \`\`\`javascript
  localStorage.setItem('name', 'Duane');
  const name = localStorage.getItem('name');
  localStorage.removeItem('name');
  
  // clear all saved data
  localStorage.clear();
  \`\`\`
  `,
  tags: ['js', 'js30'],
  github_url: null,
  codepen_url: null
}
