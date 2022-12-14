const baseURL = 'http://localhost:8081'

const postJson = function (options) {
  const headers = new Headers();

  headers.append('Contennt-Type', 'application/json')

  return fetch(`${baseURL}${options.url}`, {
    method: 'post',
    headers,
    body: JSON.stringify(options.data)
  }).then(res => {
    res.json()
  })
}

module.exports = {
  postJson
}