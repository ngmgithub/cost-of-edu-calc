// todo: use recursion to add annual % increase to each year
// todo: consider chaining operations using async waterfall or promises

const prompt = require('prompt')

const schema = {
  properties: {
    tuition: {
      //
      // todo: need to allow '$' and ',' and '.'
      //
      pattern: /^[0-9\s]+$/,
      message: 'Tuition must be in digits',
      required: true
    }
  }
}

let tuition = [0.00, 0.00, 0.00, 0.00]

let handleTuition = (err, tuition) => {
  if (err) {
    console.log(err)
  }
  console.log(`First years tuition is $${tuition[0]}`)
}

console.log(`Please enter the first years tuition and fees`)
prompt.start()
prompt.get(schema, (err, result) => {
  tuition[0] = result.tuition
  handleTuition(err, tuition)
})
