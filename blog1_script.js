/* --- シックなダークテーマの基本設定 --- */
body {
    font-family: "Arial", sans-serif;
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
}

/* --- ヒーローヘッダー（タイトル部分） --- */
.hero {
    background: linear-gradient(135deg, #1f1f1f, #292929);
    text-align: center;
    padding: 50px 20px;
}

.hero h1 {
    font-size: 2.5em;
    font-weight: bold;
    color: #ffffff;
}

/* --- ジャンルボタン（横スクロール） --- */
.genre-container {
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    background: #1a1a1a;
}

.genre-scroll {
    display: flex;
    gap: 10px;
    padding: 10px;
}

.genre-btn {
    background: #333;
    color: #ffffff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.genre-btn:hover {
    background: #555;
}

/* --- 動画コンテナ（2列グリッド配置） --- */
.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1000px;
    margin: auto;
}

/* --- 動画カードデザイン（影・アニメーション付き） --- */
.video-card {
    background: #222;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: 0.3s;
}

.video-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
}

.video-card h3 {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 10px;
}

iframe {
    width: 100%;
    height: 180px;
    border-radius: 10px;
        }
