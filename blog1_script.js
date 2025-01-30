const videos = {
    entertainment: [
        { title: "エンタメ動画1", id: "fG_NIYUQV3Q", desc: "エンタメ動画の面白さを紹介！楽しんでください。" },
        { title: "エンタメ動画2", id: "fG_NIYUQV3Q", desc: "話題のエンタメ動画。最新のトレンドをチェック！" }
    ],
    vtuber: [
        { title: "VTuber動画1", id: "fG_NIYUQV3Q", desc: "今話題のVTuber動画。魅力的な配信をお届け！" },
        { title: "VTuber動画2", id: "fG_NIYUQV3Q", desc: "VTuberのおすすめ動画を紹介します。" }
    ],
    science: [
        { title: "科学動画1", id: "fG_NIYUQV3Q", desc: "科学の驚きの発見を紹介する動画です。" },
        { title: "科学動画2", id: "fG_NIYUQV3Q", desc: "最新のテクノロジーについての解説。" }
    ],
    history: [
        { title: "歴史動画1", id: "fG_NIYUQV3Q", desc: "歴史の知られざる物語を解説します。" },
        { title: "歴史動画2", id: "fG_NIYUQV3Q", desc: "歴史好きにはたまらない動画です。" }
    ],
    cute: [
        { title: "かわいい動画1", id: "fG_NIYUQV3Q", desc: "かわいい動物たちの癒しの時間。" },
        { title: "かわいい動画2", id: "fG_NIYUQV3Q", desc: "赤ちゃんと動物のキュートな瞬間。" }
    ]
};

// ジャンルを切り替えたときに動画を表示
function showCategory(category) {
    const container = document.getElementById("video-container");
    container.innerHTML = "";  // 既存の動画をクリア

    videos[category].forEach(video => {
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
