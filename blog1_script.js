let videos = {};

// JSONファイルを取得
fetch("blog1_videos.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        videos = data;
        showCategory("entertainment"); // 初回表示
    })
    .catch(error => console.error("JSONデータの読み込みに失敗:", error));

// ジャンルを切り替えたときに動画を表示
function showCategory(category) {
    const container = document.getElementById("video-container");
    container.innerHTML = "";

    if (!videos[category]) {
        console.error(`カテゴリ "${category}" のデータがありません。`);
        return;
    }

    videos[category].forEach((video, index) => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-card");
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <iframe width="100%" height="180" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
            <p>${video.desc}</p>
        `;
        container.appendChild(videoElement);
    });

    observeCards();
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
