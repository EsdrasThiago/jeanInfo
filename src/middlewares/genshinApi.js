const jeanApi = async () => {
  const url = 'https://api.genshin.dev/characters/jean'
  const response = await fetch(url)
  const result = await response.json();
  return result
}

export default jeanApi;