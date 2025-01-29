const videos = {
    entertainment: [
        { title: "エンタメ動画1", id: "動画ID1" },
        { title: "エンタメ動画2", id: "動画ID2" }
    ],
    vtuber: [
        { title: "VTuber動画1", id: "動画ID3" },
        { title: "VTuber動画2", id: "動画ID4" }
    ],
    science: [
        { title: "科学動画1", id: "動画ID5" },
        { title: "科学動画2", id: "動画ID6" }
    ],
    history: [
        { title: "歴史動画1", id: "動画ID7" },
        { title: "歴史動画2", id: "動画ID8" }
    ],
    cute: [
        { title: "かわいい動画1", id: "動画ID9" },
        { title: "かわいい動画2", id: "動画ID10" }
    ]
};

// ジャンルを切り替えたときに動画を表示
function showCategory(category) {
    const container = document.getElementById("video-container");
    container.innerHTML = "";  // 既存の動画をクリア

    videos[category].forEach((video, index) => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-card");
        videoElement.style.animationDelay = `${index * 0.1}s`; // 遅延アニメーション

        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
        `;
        container.appendChild(videoElement);
    });
}

// 初回は「エンタメ」ジャンルを表示
document.addEventListener("DOMContentLoaded", () => showCategory("entertainment"));
