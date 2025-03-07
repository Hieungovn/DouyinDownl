async function downloadVideo() {
    let urlInput = document.getElementById("tiktok-url").value;
    let resultDiv = document.getElementById("result");

    if (!urlInput) {
        resultDiv.innerHTML = "<p style='color:red;'>Vui lòng nhập URL TikTok!</p>";
        return;
    }

    let apiURL = `https://godownloader.com/api/tiktok-no-watermark-free?key=godownloader.com&url=${encodeURIComponent(urlInput)}`;

    try {
        let response = await fetch(apiURL);
        let data = await response.json();

        if (data && data.video_no_watermark) {
            resultDiv.innerHTML = `
                <video width="100%" controls>
                    <source src="${data.video_no_watermark}" type="video/mp4">
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
                <a href="${data.video_no_watermark}" download>
                    <button>Tải Xuống</button>
                </a>
            `;
        } else {
            resultDiv.innerHTML = "<p style='color:red;'>Không thể lấy video. Hãy thử lại!</p>";
        }
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = "<p style='color:red;'>Lỗi khi tải video!</p>";
    }
}