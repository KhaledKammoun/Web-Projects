async function get(){
  let data;
  try{
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    data = await response.json()
    
  }catch(e){
    document.querySelector("body").innerHTML = `
      <h1> Breaking Bad</h1>
      <h2> Sorry We Have an issue in Our API .</h1>
      <h3>We Are Working To Fix It .
      `
  }
  const data_img = ["https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/1ad0719c-1943-4824-9a0b-6fca536c4ebc.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/0916f3f5-70c8-4081-b138-3771ceebae75.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/34013cbb-ca25-4690-9b27-04364f228a7d.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/4996b178-838f-4b00-940d-55ca08112173.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/2adcbf50-52e4-4def-b6b3-ba758de7703c.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/95a5d396-696c-4c27-88e6-f1d385f0ed55.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/af32ad35-ed72-4de0-b65b-e4e8da70fb93.webp",
  "https://img-03.stickers.cloud/packs/28433c89-8065-416c-9c19-b8ca1e497d4b/webp/c705a333-4fd5-47ac-9915-6dc291f7ae54.webp"
]
    // let Dict = new Map(data_img.map((url, index) => [url, index])) ;
    let Dict = new Map(data_img.map(url => [data_img.indexOf(url), url]));
    console.log(Dict) ; 
    console.log(data) ;
    function changeImg(){
      const randomIndex = Math.floor(Math.random() * 8);
      return Dict.get(randomIndex)
    }
    function addQuoteAuthor(name = data[0].author){
      const words = name.split(' ');
      new_query = words.map(word => `<span class="green-start">${word[0]}</span>${word.slice(1)}`).join(' ');
      document.querySelector("#author").innerHTML = new_query;

    }
    document.querySelector("#quote").innerHTML = data[0].quote;
    document.querySelector("#actor").innerHTML = `
      <form>
        <select id="actorSelect">
        <option value="" selected disabled>Choose</option>
          ${data[0].quote.split(' ').map(word => `<option value="${word}">${word}</option>`)}
        </select>
      </form>
    `
    function updateAuthor(){
      document.querySelector("#author").innerHTML = document.querySelector("#actorSelect").value
      return document.querySelector("#actorSelect").value ;
    }
    function updateImage(){
      document.querySelector(".image img").src = changeImg()
    }

    addQuoteAuthor() ;
    updateImage() ;

    document.querySelector("#actorSelect").addEventListener("change",function(){
      new_name = updateAuthor() ;
      updateImage() ;
      addQuoteAuthor(new_name) ;
    })

}
get()


// async function getData(){
//   const response = await fetch("URL")
//   const data = response.json()

//   document.getElementById("actor").innerHTML = `
//     <select>
//       ${data.map(m => `<option>${m.name}</option>`)}
//     </select>
//   `

// }