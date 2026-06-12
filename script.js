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
    alert("動画生成開始！");
});
</script>