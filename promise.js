const SUCCESS_PERCENT = 1.0
const randomValue = Math.random()

console.log('\n\n\n\n\n\n\n\n\n\n -----START-----\n')

function serverCall () {
  return new Promise((resolve, reject) => {
    const serverResponse = (randomValue > SUCCESS_PERCENT) ? 500 : 200
    if (randomValue > SUCCESS_PERCENT) {
      reject(new Error('SYSTEM HAS FAILED COMPLETLY'))
    } else {
      const serverReply = {responseCode: serverResponse, output: '[{"category":"Sporting Goods","price":49.99,"stocked":true,"name":"Football"},{"category":"Sporting Goods","price":9.99,"stocked":true,"name":"Baseball"},{"category":"Sporting Goods","price":29.99,"stocked":false,"name":"Basketball"},{"category":"Electronics","price":99.99,"stocked":true,"name":"iPod Touch"},{"category":"Electronics","price":399.99,"stocked":false,"name":"iPhone 5"},{"category":"Electronics","price":199.99,"stocked":true,"name":"Nexus 7"}]'}
      console.log('SUCCESS!')
      resolve(serverReply)
    }
  })
}

function verifyServerResponse (serverResponse) {
  return new Promise((resolve, reject) => {
    if (serverResponse === 500) {
      reject(new Error('INTERNAT SERVER HAS FAILED'))
    } else {
      console.log('SUCCESS2!')
      resolve(serverResponse.output)
    }
  })
}

function convertJson (serverString) {
  return new Promise((resolve, reject) => {
    if (randomValue > SUCCESS_PERCENT) {
      reject(new Error('FAILED TO PARSE JSON'))
    } else {
      console.log('SUCCESS3!')
      resolve(JSON.parse(serverString))
    }
  })
}
serverCall()
  .then(verifyServerResponse)
  .then(convertJson)
  .then((printConverted) => {
    console.log(printConverted)
  })
  .catch((error) => {
    console.log(error)
  })
