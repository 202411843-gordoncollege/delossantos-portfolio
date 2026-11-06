export default function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub"];

  return (
    <section>
      <h1>About Me</h1>
      <p>
        I'm a student learning web development. I enjoy building things that
        solve real problems and I'm always looking to learn more.
      </p>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}