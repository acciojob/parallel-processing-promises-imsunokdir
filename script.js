//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages(img){
	return new Promise((resolve, reject)=>{
		const image = new Image();
	image.src=img.url;

	image.onload = ()=>{
		resolve(image)
	}
	image.onerror = () =>{
		reject("Loading error");
	}
	}) 
}


const imagePromises = images.map(downloadImages);
btn.addEventListener("click",()=>{
	output.innerHTML = "";
	Promise.all(imagePromises).then((imgs)=>{
		imgs.forEach((i)=>{
			output.append(i)
		})
	})
	.catch((err)=>{
		console.log(`Failed to load image's URL: ${imgs.url}`)
	})
})













