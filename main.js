//promise
// 에러의 위치를 파악하기 어렵다, 특정 위치에서 조건을 걸기가 어렵다(then으로 이어지기때문에)
// 단점을 보안하기 위해 async,await를 사용한다.

function increaseAndPrint1(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if( callback) {
      callback(increased);
    }
  },1000)
}
increaseAndPrint1(0, n => {
  increaseAndPrint1(n, n => {
    increaseAndPrint1(n, n => {
      increaseAndPrint1(n, n => {
        increaseAndPrint1(n,n => {
          console.log('작업끝!')
        })
      })
    })
  })
})

//promise사용하기
//성공 - resolve
 const myPromiseResolve = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('result');
   },1000)
 });

 myPromiseResolve.then(result => {
   console.log(result);
 })
//실패 - reject
 const myPromiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  },1000)
});

myPromiseReject.then(result => {
  console.log(result);
}).catch(e => {
  console.error(e);
})

function increaseAndPrint2(n){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const value = n +1;
      if(value ===5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    },1000);
  });
}

increaseAndPrint2(0).then(n => {
  return increaseAndPrint2(n);
}).then(n => {
  return increaseAndPrint2(n);
}).then(n => {
  return increaseAndPrint2(n);
}).then(n => {
  return increaseAndPrint2(n);
}).then(n => {
  return increaseAndPrint2(n);
}).catch(e => {
  console.error(e);
})
/*위와 같은 코드
increaseAndPrint2(0).then(increaseAndPrint2)
.then(increaseAndPrint2)
.then(increaseAndPrint2)
.then(increaseAndPrint2)
.then(increaseAndPrint2)
.catch(e => {
  console.error(e);
})
*/
