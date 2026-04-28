export default function Home() {
  return (
    <>
      <style>{css}</style>

      <div className="wrap">
        <div className="app">

          {/* 상단 */}
          <div className="top">
            <div>☰</div>
            <div className="bell">🔔<span /></div>
          </div>

          {/* 로고 */}
          <div className="brand">
            <div className="ice">🧊</div>
            <div>
              <div className="logo">
                빙고 <span>氷庫</span>
              </div>
              <div className="slogan">작은일도 최선을 다해요 💚</div>
            </div>
          </div>

          {/* 서비스 */}
          <div className="grid">
            <div className="card blue">
              <div className="icon">❄️</div>
              <div>냉동창고 시공 ›</div>
            </div>

            <div className="card gray">
              <div className="icon">🌬️</div>
              <div>에어컨 설치 ›</div>
            </div>

            <div className="card green">
              <div className="icon">🌿</div>
              <div>해썹 전문 시공 ›</div>
            </div>

            <div className="card red">
              <div className="icon">🚨</div>
              <div>긴급고장출동 ›</div>
            </div>
          </div>

          {/* 중고 */}
          <div className="market">
            <div>
              <h2>중고거래</h2>
              <p>냉동기, 에어컨, 쇼케이스,<br/>부품까지 한눈에!</p>
              <button>바로가기 ›</button>
            </div>
            <div className="cart">🛒</div>
          </div>

          {/* 하단 */}
          <div className="nav">
            <button className="on">홈</button>
            <button>중고거래</button>
            <button>요청내역</button>
            <button>채팅</button>
            <button>마이</button>
          </div>

        </div>
      </div>
    </>
  );
}

const css = `
body {
  margin:0;
  background:#eef5f8;
  font-family:sans-serif;
}

.wrap {
  display:flex;
  justify-content:center;
  padding:20px;
}

.app {
  width:390px;
  background:white;
  border-radius:30px;
  padding:20px;
  box-shadow:0 20px 60px rgba(0,0,0,0.1);
}

.top {
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.bell {
  position:relative;
}
.bell span {
  position:absolute;
  top:-2px;
  right:-2px;
  width:8px;
  height:8px;
  background:red;
  border-radius:50%;
}

.brand {
  display:flex;
  align-items:center;
  gap:10px;
  justify-content:center;
  margin:15px 0;
}

.ice { font-size:50px; }

.logo {
  font-size:38px;
  font-weight:900;
  color:#1469e8;
}

.logo span {
  font-size:12px;
  border:1px solid #1469e8;
  padding:2px 6px;
  border-radius:6px;
  margin-left:5px;
}

.slogan { font-size:13px; }

.grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.card {
  height:140px;
  border-radius:20px;
  padding:15px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.icon { font-size:28px; }

.blue { background:#dff0ff; }
.gray { background:#f1f1f1; }
.green { background:#e8f8e5; }
.red { background:#ffe4e4; }

.market {
  margin-top:15px;
  background:linear-gradient(#ffe08a,#ffd34d);
  padding:20px;
  border-radius:20px;
  display:flex;
  justify-content:space-between;
}

.market button {
  margin-top:10px;
  background:#ff9800;
  color:white;
  border:none;
  padding:8px 12px;
  border-radius:10px;
}

.cart { font-size:40px; }

.nav {
  margin-top:15px;
  display:flex;
  justify-content:space-around;
  border-top:1px solid #eee;
  padding-top:10px;
}

.nav button {
  border:none;
  background:none;
  font-size:12px;
}

.nav .on {
  color:#1469e8;
  font-weight:900;
}
`;
