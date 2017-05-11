const FAIL_PERCENT = 0.5 // makes program fail
const randomValue = Math.random() // creating a random value

console.log('start program') // logging that the program has started

function serverCall (successCallback, errorCallback) { // this function takes in a successCallback
  // (a function) and an errorCallback(another error)
  const functionThatWillBeRunInFiveHundredMs = function () {
    // const randomValue = Math.random() // creating a random value
    if (randomValue > FAIL_PERCENT) { // if the random value is greater than the fail percent(0.5)
      errorCallback('init error') // go to error function with string error
    } else { // if it works
      console.log('the server responded!!')
      // dummy data value
      let serverStringReply = '[{"category":"Sporting Goods","price":49.99,"stocked":true,"name":"Football"},{"category":"Sporting Goods","price":9.99,"stocked":true,"name":"Baseball"},{"category":"Sporting Goods","price":29.99,"stocked":false,"name":"Basketball"},{"category":"Electronics","price":99.99,"stocked":true,"name":"iPod Touch"},{"category":"Electronics","price":399.99,"stocked":false,"name":"iPhone 5"},{"category":"Electronics","price":199.99,"stocked":true,"name":"Nexus 7"}]'
      console.log('callback initiated')
      successCallback(serverStringReply) // go to success function with the dummy data
    }
  }
  console.log('initiating connection to the server...')
  setTimeout(functionThatWillBeRunInFiveHundredMs, 500) // make it take a while
}

function convertJson (successfulJsonCallback, errorCallback, jsonString) {
  const conversionFunction = function () {
    if (randomValue > FAIL_PERCENT) {
      console.log('it worked!')
      successfulJsonCallback(JSON.parse(jsonString))
    } else {
      errorCallback('unable to convert to json')
    }
  }
  setTimeout(conversionFunction, 500)
}

const successfulJsonCallback = function (parsedServerReply) {
  console.log('json callback')
  // console.log()
  // console.log(parsedServerReply)
}

const successCallback = function (serverStringReply) {
  // console.log(serverStringReply)
  console.log('our callback was called')
  console.log('success')
  convertJson(successfulJsonCallback, errorCallback, serverStringReply)
}

const errorCallback = function (error) {
  console.log('error!')
  console.log(error)
}

console.log('about to talk to the server')
serverCall(successCallback, errorCallback)

console.log('end of program')
