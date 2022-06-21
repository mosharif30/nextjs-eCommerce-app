const fetchUrl = async ({ url, method = 'GET' }) => {
  const absolueUrl = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(absolueUrl, {
        method,
      })
      resolve(await response.json())
    }, 0)
  })
}
export default fetchUrl
