export default function AboutProject({ pool }) {
  return (
    <section className="about-project">
      <h1>About the Project</h1>
      <div className="">
        <p>{pool[0]?.aboutProject}</p>
        {console.log(pool)}
        <ul>
          {pool[0].projectBenefits?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>MENZY ECOSYSTEM</p>
      </div>
    </section>
  );
}
