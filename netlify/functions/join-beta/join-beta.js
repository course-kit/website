const SENDY_URL = 'https://mail.coursekit.dev'
const fetch = require('node-fetch')

function buildFormBody(details) {
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}

async function verifyToken (token) {
  const url = `https://www.google.com/recaptcha/api/siteverify`
  var details = {
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: buildFormBody(details)
  })
  const { success } = await response.json()
  return success
}

async function subscribe(name, email) {
  const details = {
    api_key: process.env.SENDY_API_KEY,
    name,
    email,
    list: process.env.SENDY_LIST_ID,
    boolean: true
  }
  const response = await fetch(`${SENDY_URL}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: buildFormBody(details)
  })
  console.log(response)
}
const handler = async (event) => {
  try {
    const { name, email, captchaToken } = JSON.parse(event.body)
    const verified = await verifyToken(captchaToken)
    if (verified) {
      await subscribe(name, email)
      return {
        statusCode: 200
      }
    } else {
      return {
        statusCode: 400
      }
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500
    }
  }
}

module.exports = { handler }
