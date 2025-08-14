function switchMode() {
  const html = document.documentElement
  const div = document.getElementById("profile")
  const imagem = div.querySelector("img")

  if (html.classList.contains("light")) {
    html.classList.remove("light"),
      (imagem.src = "./assets/channels4_profile.jpg")
  } else {
    html.classList.add("light"), (imagem.src = "./assets/avatar-light.png")
  }
}
