const apiKey = "FoXmOXVXdU3BUHUnKYinpuuh9OpLD0iV";

export default function getGifs({keyword = 'eevee'}={}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      if (Array.isArray(data)) {
        const gifs = data.map(image =>{
            const {title, id, type} = image
            const { url } = image.images.downsized_medium
            
            return {title, id, type, url}
         });
        return gifs;
      }
    })
}

/*
USANDO ASYNC AWAIT
const apiKey = "FoXmOXVXdU3BUHUnKYinpuuh9OpLD0iV";

export default async function getGifs({ keyword = "eevee" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  const res = await fetch(apiUrl);
  const response = await res.json();
  const { data } = response;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { title, id } = image;
      const { url } = image.images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
}

*/