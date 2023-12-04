async function get(){
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    const data = await response.json()
    const data_img = ["https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/1ad0719c-1943-4824-9a0b-6fca536c4ebc.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/0916f3f5-70c8-4081-b138-3771ceebae75.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/34013cbb-ca25-4690-9b27-04364f228a7d.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/4996b178-838f-4b00-940d-55ca08112173.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/2adcbf50-52e4-4def-b6b3-ba758de7703c.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/95a5d396-696c-4c27-88e6-f1d385f0ed55.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/af32ad35-ed72-4de0-b65b-e4e8da70fb93.webp",
    "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/c705a333-4fd5-47ac-9915-6dc291f7ae54.webp"
  ]
    console.log(data)
    const randomIndex = Math.floor(Math.random() * 8);
    document.querySelector(".container .image img").src = data_img[randomIndex]
    const words = data[0].author.split(' ');
    new_query = words.map(word => `<span class="green-start">${word[0]}</span>${word.slice(1)}`).join(' ');
    document.querySelector("#author").innerHTML = new_query;
    document.querySelector("#quote").innerHTML = data[0].quote;
    document.querySelector("#actor").innerHTML = `
      <form>
        <select id="actorSelect">
          ${data[0].quote.split(' ').map(word => `<option value="${word}">${word}</option>`)}
        </select>
      </form>
    `
    function updateAuthor(){
      document.querySelector("#author").innerHTML = document.querySelector("#actorSelect").value
    }

    document.querySelector("#actorSelect").addEventListener("change",function(){
      updateAuthor() ;
    })

}
get()