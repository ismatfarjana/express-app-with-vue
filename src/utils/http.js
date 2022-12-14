const baseURL = 'http://localhost:4000'

const postJson = async function (options) {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json')

  const response = await fetch(`${baseURL}${options.url}`, {
    method: 'post',
    headers,
    body: JSON.stringify(options.data)
  }).then(res => {
    return res.body;
  }).then(obj => {
    if (obj.token) {
      localStorage.setItem('auth-token', obj.token)
    }
    return obj;
  })

  return response;
}

module.exports = {
  postJson
}