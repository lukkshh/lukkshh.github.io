export default function LandingOpenGraph() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "linear-gradient(135deg, #05071c 0%, #0b0a26 55%, #160e35 100%)",
        color: "#f4f2ff",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 680,
          height: 680,
          top: -230,
          right: -150,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(151, 101, 255, 0.38) 0%, rgba(91, 61, 180, 0.15) 42%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 560,
          height: 560,
          top: 30,
          right: -65,
          border: "1px solid rgba(203, 172, 249, 0.26)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 390,
          height: 390,
          top: 115,
          right: 20,
          border: "1px solid rgba(203, 172, 249, 0.38)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 220,
          height: 220,
          top: 200,
          right: 105,
          border: "1px solid rgba(203, 172, 249, 0.5)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 18,
          height: 18,
          top: 192,
          right: 113,
          borderRadius: "50%",
          background: "#cbacf9",
          boxShadow: "0 0 30px #cbacf9",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          padding: "64px 76px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <span style={{ fontSize: 86, fontWeight: 800, letterSpacing: -5, lineHeight: 1.05 }}>
            Luka Shvelidze
          </span>
          <span style={{ color: "#cbacf9", fontSize: 44, fontWeight: 650, marginTop: 18 }}>
            Full-Stack Web Developer
          </span>
        </div>

        <div style={{ position: "absolute", bottom: 64, left: 76, display: "flex", alignItems: "center", color: "#b8bbd6", fontSize: 23 }}>
          <span>Transforming concepts into seamless user experiences.</span>
        </div>
      </div>
    </div>
  );
}
