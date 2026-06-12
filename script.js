<script>
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});

document.getElementById("generateBtn").addEventListener("click", () => {

  const status = document.createElement("p");
  status.innerText = "生成中...";
  document.body.appendChild(status);

  setTimeout(() => {
    status.innerText = "生成完了！";
  }, 3000);

});
</script>