import _ from 'lodash'  //From `node_modules`
import getType from './getType' //기본모듈
import {random,user as heropy} from './getRandom' //이름이 있는 모듈
// import  as R from './getRandom'
// * 로 한번에 내보낼 수 있다.

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
console.log(random(), random())
console.log(heropy)

// console.log(R)