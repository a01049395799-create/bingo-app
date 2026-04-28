export default function Home() {
  return (
    <>
      <style>{css}</style>

      <div className="app">

        {/* 상단 */}
        <div className="top">
          <div>☰</div>
          <div className="bell">🔔<span /></div>
        </div>

        {/* 로고 영역 */}
        <div className="logoWrap">
          <div className="ice">🧊</div>
          <div>
            <div className="logo">
              빙고 <span>氷庫</span>
            </div>
            <div className="sub">작은일도 최선을 다해요 💚</div>
          </div>
        </div>

        {/* 카드 */}
        <div className="grid">

          <div className="card blue">
            <div className="icon">❄️</div>
            냉동창고 시공
          </div>

          <div className="card gray">
            <div className="icon">🌬️</div>
            에어컨 설치
          </div>

          <div className="card green">
            <div className="icon">🌿</div>
            해썹 전문 시공
          </div>

          <div className="card red">
            <div className="icon">🚨</div>
            긴급고장출동
          </div>

        </div>

        {/* 중고 */}
        <div className="market">
          <div>
            <h2>중고거래</h2>
            <p>냉동기, 에어컨, 쇼케이스, 부품</p>
            <button>바로가기</button>
          </div>
          <div className="cart">🛒</div>
        </div>

        {/* 하단 */}
        <div className="nav">
          <div className="on">홈</div>
          <div>중고거래</div>
          <div>요청내역</div>
          <div>채팅</div>
          <div>마이</div>
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

.app {
  max-width:390px;
  margin:0 auto;
  background:white;
  min-height:100vh;
  padding:20px;
  box-sizing:border-box;
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
  width:8px;
  height:8px;
  background:red;
  border-radius:50%;
  top:-2px;
  right:-2px;
}

.logoWrap {
  display:flex;
  align-items:center;
  justify-content:center;
  margin:20px 0;
  gap:10px;
}

.ice {
  font-size:50px;
}

.logo {
  font-size:36px;
  font-weight:900;
  color:#1b6ef3;
}

.logo span {
  font-size:12px;
  border:1px solid #1b6ef3;
  padding:2px 5px;
  border-radius:6px;
}

.sub {
  font-size:13px;
  text-align:center;
}

.grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.card {
  height:120px;
  border-radius:20px;
  padding:15px;
  font-weight:bold;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.icon {
  font-size:24px;
}

.blue { background:#dff0ff; }
.gray { background:#f1f1f1; }
.green { background:#e8f8e5; }
.red { background:#ffe4e4; }

.market {
  margin-top:20px;
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

.cart {
  font-size:40px;
}

.nav {
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  max-width:390px;
  margin:auto;
  background:white;
  display:flex;
  justify-content:space-around;
  padding:10px;
  border-top:1px solid #eee;
}

.nav div {
  font-size:12px;
}

.nav .on {
  color:#1b6ef3;
  font-weight:bold;
}
`;
