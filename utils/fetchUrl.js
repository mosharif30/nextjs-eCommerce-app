const fetchUrl = async ({ url, method = 'GET' }) => {
  const response = await fetch(url, { method })
  return response.json()
}

export default fetchUrl
