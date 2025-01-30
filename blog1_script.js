const videos = {
    entertainment: [
        { title: "エンタメ動画1", id: "fG_NIYUQV3Q", desc: "エンタメ動画の面白さを紹介！楽しんでください。" },
        { title: "エンタメ動画2", id: "動画ID2", desc: "話題のエンタメ動画。最新のトレンドをチェック！" }
    ],
    vtuber: [
        { title: "VTuber動画1", id: "動画ID3", desc: "今話題のVTuber動画。魅力的な配信をお届け！" },
        { title: "VTuber動画2", id: "動画ID4", desc: "VTuberのおすすめ動画を紹介します。" }
    ]
};

// ジャンルを切り替えたときに動画を表示
function showCategory(category) {
    const container = document.getElementById("video-container");
    container.innerHTML = "";  // 既存の動画をクリア

    videos[category].forEach((video, index) => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-card");
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
            <p>${video.desc}</p>
        `;
        container.appendChild(videoElement);
    });

    observeCards(); // スクロールアニメーション適用
}

// スクロールアニメーションの適用
function observeCards() {
    const cards = document.querySelectorAll(".video-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    cards.forEach(card => observer.observe(card));
}

// 初回表示（エンタメカテゴリ）
document.addEventListener("DOMContentLoaded", () => showCategory("entertainment"));
