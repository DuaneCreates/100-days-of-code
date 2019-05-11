export default {
  day: 31,
  type: 'log',
  date: '2019-04-28',
  title: 'Game Dev - Animation States',
  post: `
  I created some simple sprites to form a character design and learned how to switch between animation states to programmatically trigger animations based on the character's class.
  For example, when the speed is high (because you hold the direction key for a second) the character will use the running animation, but for slow speeds it will just walk.  
  Also, when you have low health, the character will use a wounded animation. Animation states can also be hybrid, so you blend between a wounded and walking animation, this is the power of Unity's animation system.
  `,
  tags: ['unity', 'unity3d', 'C#', 'gamedev'],
  github_url: null,
  codepen_url: null
}
