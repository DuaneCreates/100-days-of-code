# 100 Days of Code
*Focusing on JavaScript with Vue.js (Nuxt) and CSS with Tailwind.css*  
Please find each day's work in a [separate branch](https://github.com/DuaneCreates/100-days-of-code/branches)

### Identity
Insert details in */info.js* with the format below
```javascript
export default {
  title: '100 Days of Code',
  name: 'Duane Creates',
  codepen_url: 'https://codepen.io/duanecreates/',
  github_url: 'https://github.com/DuaneCreates/100-days-of-code',
  instagram_url: 'https://www.instagram.com/duanecreates/',
  twitter_url: 'https://www.twitter.com/duanecreates/',
  ga_code: 'UA-XXX-X'
};
```

### Log a day
Insert day's info file as **day_number.js** in */days/info* with this format
```javascript
// example for day 1
export default {
  day: 1,
  type: 'result',
  date: '2019-02-17',
  title: 'Something',
  post: `
  put some **markdown** up in here  
  `,
  tags: ['JS', 'Duane', 'Creates'],
  github_url: 'link to commit or branch',
  codepen_url: 'link to a pen on codepen',
};
```

##### Description of each field
- day: the numeric day in the timeline
- type: determines the way the day is presented, more details below
- desktop_only: determines whether the component will be shown on mobile devices or not (some components might not support touch)
- date: the date of the day
- title: self explanatory I would say
- post: the description of the day in markdown format 
- tags: an array of strings representing some topics around the component
- github_url: the link to view more about the construction of such component
- codepen_url: the link to a codepen pen in case it was posted on there

##### Available choices for ```type```
- result (just a preview of the component, like codepen)
- log (just shows the text from the ```post``` field)
- ui (presented on a mobile device which can scale to show responsiveness)

Insert day's result file as **day_number.vue** in */days/results* as a normal Vue component
```vue
// example for day 1
<template>
  <h1>Day 1</h1>
</template>

<script>
export default {
  name: 'result-1',
};
</script>
```

### Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

