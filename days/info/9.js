export default {
  day: 9,
  type: 'result',
  desktop_only: true,
  date: '2019-03-05',
  title: '',
  post: `
  This challenge is not based on any of the challenges I am following. It was just an idea I had in my head which I wanted to implement. It turned out to be a very simple challenge, thanks to the animate.css library and the simplicity of Vue.
  
  ### Topics Touched:
  - Animate.css
  - Dynamic Vue Styling & Classes
  
  ### What have I done?
  - I registered a keydown event with a handler that just adds the key pressed to an array, and generates a random color and absolute position
  - As soon as a key is pressed and added to the array, a timeout is called to delay a function call that will apply the animation css class to go out of view
  - I looped over the array and simply displayed each one with the background color and scatter position which was generated
  
  ### What could be done better?
  - Mobile responsiveness!
  - Better colors
  `,
  tags: ['tailwindcss', 'vuejs', 'playground'],
  github_url: 'https://github.com/DuaneCreates/100-days-of-code/tree/day/9',
  codepen_url: 'https://codepen.io/duanecreates/pen/MxbBrZ'
}
