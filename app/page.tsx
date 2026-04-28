export default function Home() {
  return (
    <main style={{ maxWidth: 430, margin: "0 auto", padding: 20 }}>
      
      <h1 style={{ fontSize: 32, fontWeight: "bold", color: "blue" }}>
        빙고
      </h1>

      <p>고장나면 바로, 빙고!</p>

      <div style={{
        background: "red",
        color: "white",
        padding: 20,
        borderRadius: 10,
        marginTop: 20
      }}>
        <h2>긴급 고장 접수</h2>
        <button style={{
          marginTop: 10,
          padding: 10,
          background: "white",
          color: "red",
          borderRadius: 20
        }}>
          접수하기
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>중고거래</h2>
        <button>바로가기</button>
      </div>

    </main>
  );
}
