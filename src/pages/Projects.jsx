const projects = [
  {
    id: 1,
    title: "Pharmacy inventory system",
    description:
      "ASB Pharmacy is a web-based inventory system that tracks medicine stock and expiration dates, with barcode scanning and automatic alerts for low stock and items nearing expiry.",
    image: "/image/Image1.jpg",
  },
  {
    id: 2,
    title: "EUNOIA",
    description:
      "EUNOIA is a student mental-health support app with mood tracking, journaling, and an AI companion that flags high-risk cases for school counselors.",
    image: "/image/Image2.jpg",
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "A web calculator built with HTML, CSS, and JavaScript, with Standard and Scientific modes you can switch between from a ☰ menu.",
    image: "/image/Image3.jpg",
  },
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      {projects.map((p) => (
        <article key={p.id}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </article>
      ))}
    </section>
  );
}