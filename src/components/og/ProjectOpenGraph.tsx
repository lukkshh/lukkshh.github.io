type ProjectOpenGraphProps = {
  title: string;
  subtitle: string;
  label: string;
};

export default function ProjectOpenGraph({ title, subtitle, label }: ProjectOpenGraphProps) {
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
          width: 650,
          height: 650,
          top: -180,
          right: -190,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(151, 101, 255, 0.4) 0%, rgba(91, 61, 180, 0.14) 45%, transparent 72%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 530,
          height: 530,
          top: 45,
          right: -40,
          border: "1px solid rgba(203, 172, 249, 0.28)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 330,
          height: 330,
          top: 145,
          right: 60,
          border: "1px solid rgba(203, 172, 249, 0.42)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 14,
          height: 14,
          top: 145,
          right: 218,
          borderRadius: "50%",
          background: "#cbacf9",
          boxShadow: "0 0 28px #cbacf9",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "64px 76px",
        }}
      >
        <span style={{ color: "#cbacf9", fontSize: 22, fontWeight: 650, letterSpacing: 3, marginBottom: 28 }}>
          {label}
        </span>
        <span style={{ fontSize: title.length > 18 ? 76 : 88, fontWeight: 800, letterSpacing: -4, lineHeight: 1.05, maxWidth: 800 }}>
          {title}
        </span>
        <span style={{ color: "#d2c2ef", fontSize: 35, lineHeight: 1.28, marginTop: 22, maxWidth: 790 }}>
          {subtitle}
        </span>
        <span style={{ position: "absolute", bottom: 62, left: 76, color: "#b8bbd6", fontSize: 23 }}>
          Luka Shvelidze · Full-Stack Web Developer
        </span>
      </div>
    </div>
  );
}
