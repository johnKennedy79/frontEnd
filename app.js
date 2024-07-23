const app = document.getElementById("app");

async function getimg() {
  const res = await fetch("http://localhost8080/");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.src = data[i];
    app.appendChild(img);
  }
}
