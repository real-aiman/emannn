export default function Skills() {
  const skills = [
    "HTML (Structuring Web Pages)",
    "Search Engine Optimization (SEO)",
    "Microsoft Word, Excel & PowerPoint"
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
    </section>
  );
}