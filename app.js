const container = document.getElementById("container");

async function getimg() {
  const res = await fetch("http://localhost:8080/images");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.src = data[i];
    container.appendChild(img);
  }
}
getimg();
