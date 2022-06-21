const fetchUrl = async ({ url, method = 'GET' }) => {
  const absolueUrl = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`
  const response = await fetch(absolueUrl, { method })
  return await response.json()
}
export default fetchUrl
