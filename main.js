import _, { uniqBy } from 'lodash'  //From `node_modules`

const usersA = [
  { 
    userId: '1', 
    name : 'HEROPY'
  },
  {
    userId: '2', 
    name : 'Neo' 
  }
]

const usersB = [
  { 
    userId: '1', 
    name : 'HEROPY'
  },
  {
    userId: '3', 
    name : 'Amy' 
  }
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) //userId로 중복 제거

const usersD = _.unionBy(usersA, usersB, 'userId') // 여러개의 배열을 합칠때 userId로 중복을 제거하여 합친다.
console.log('unionBy', usersD)