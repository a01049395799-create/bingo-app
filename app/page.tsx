"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const submitRequest = async () => {
    const res = await fetch(
      "https://ijuxtimblcengcoltcxe.supabase.co/rest/v1/requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "sb_publishable_S4AOBjTFbVE4FMXtjJWFdw_EO7S0ZV-",
          Authorization: "Bearer sb_publishable_S4AOBjTFbVE4FMXtjJWFdw_EO7S0ZV-"
        },
        body: JSON.stringify({
          name,
          phone,
          description
        })
      }
    );

    if (res.ok) {
      alert("접수 완료!");
      setName("");
      setPhone("");
      setDescription("");
    } else {
      alert("오류 발생");
    }
  };

  return (
    <main style={{ maxWidth: 430, margin: "0 auto", padding: 20 }}>
      <h1 style={{ fontSize: 32, color: "blue" }}>빙고</h1>

      <p>고장나면 바로, 빙고!</p>

      <div style={{
        background: "red",
        color: "white",
        padding: 20,
        borderRadius: 10,
        marginTop: 20
      }}>
        <h2>긴급 고장 접수</h2>
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          value={name}
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          value={phone}
          placeholder="전화번호"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /><br />

        <textarea
          value={description}
          placeholder="고장 내용"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />

        <button onClick={submitRequest}>
          접수하기
        </button>
      </div>
    </main>
  );
}
