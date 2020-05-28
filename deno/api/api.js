const getApi = async () => {
  const fileData = await Deno.create("data.json")

  try {
    const url = "https://api.deezer.com/chart"
    const response = await fetch(url)
    const res = await response.json()
    const data = JSON.stringify(res)
    const contentBytes = new TextEncoder().encode(data)
    const file = await Deno.open("data.json", { write: true })
    await Deno.writeAll(file, contentBytes)

    Deno.close(file.rid)
  } catch (err) {
    console.error(err)
  }
}

export default getApi
