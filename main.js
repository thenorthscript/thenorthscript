const btn = document.querySelector(".btn")
const youtube = document.querySelector(".youtube")
btn.onclick = function () {
	  navigator.clipboard.writeText(youtube.textContent);
}