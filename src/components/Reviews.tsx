export const Reviews = () => {
  const reviews = [
    {
      name: "Local Client",
      text: "Super clean cut and great attention to detail. Definitely coming back.",
    },
    {
      name: "Walk-in Customer",
      text: "Came in as a walk-in and got taken care of fast. Fade came out perfect.",
    },
    {
      name: "Apopka Resident",
      text: "Professional vibe, on time, and the beard work is A1. Highly recommend.",
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2 style={{ textAlign: "center", color: "white" }}>Reviews</h2>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "white",
            opacity: 0.9,
          }}
        >
          Real clients. Real results.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16p
