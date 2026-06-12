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
  const status = document.getElementById("status");

  status.textContent = "🎥 動画生成中...";

  setTimeout(() => {
    status.textContent = "✅ 動画生成完了！";
  }, 3000);
});
</script>