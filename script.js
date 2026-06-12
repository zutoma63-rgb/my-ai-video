console.log("script.js loaded!");
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
    const progressBar = document.getElementById("progressBar");

    let progress = 0;

    status.textContent = "🎥 動画生成中...";
    progressBar.value = 0;

    const interval = setInterval(() => {

        progress += 5;

        progressBar.value = progress;
        status.textContent =
            `🎥 動画生成中... ${progress}%`;

       if (progress >= 100) {

    clearInterval(interval);

    status.textContent =
        "✅ 動画生成完了！";

    const video =
        document.getElementById("videoPreview");

    video.style.display = "block";

    video.src =
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

}

    }, 200);

});
const slider =
document.getElementById("motionStrength");

const strengthValue =
document.getElementById("strengthValue");

slider.addEventListener("input", () => {
    strengthValue.textContent =
    slider.value;
});