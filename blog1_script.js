const videos = {
    entertainment: [
        { title: "面白動画1", id: "動画ID1" },
        { title: "面白動画2", id: "動画ID2" }
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
    sexy: [
        { title: "セクシー動画1", id: "動画ID9" },
        { title: "セクシー動画2", id: "動画ID10" }
    ]
};

// 動画リストを表示
function showCategory(category) {
    const container = document.getElementById("video-container");
    container.innerHTML = ""; 

    videos[category].forEach((video, index) => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-card");
        videoElement.style.animationDelay = `${index * 0.1}s`; // 遅延アニメーション

        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <iframe width="100%" height="180" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
        `;
        container.appendChild(videoElement);
    });
}
