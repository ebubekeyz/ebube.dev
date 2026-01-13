import Wrapper from "../assets/wrappers/Founder";

const Founder = () => {
  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const founder = document.querySelector(".founder");
    const founderHeight = document
      .querySelector(".founder")
      .getBoundingClientRect().height;

    if (scrollHeight > founderHeight) {
      founder.classList.add("add-anim");
    } else {
      founder.classList.remove("add-anim");
    }
  });
  return (
    <Wrapper>
      <div className="founder">
        <article className="founder-info">
          <h2>Ebube Joseph Offor</h2>
          <h3>Full-Stack Developer</h3>
          <p>
            I’m a Full-Stack Developer with a strong focus on building scalable,
            user-centered web applications. I work across the entire development
            stack—crafting responsive interfaces, developing secure backend
            systems, and integrating efficient APIs and databases. With a
            passion for clean code and problem-solving, I enjoy turning complex
            ideas into reliable, production-ready software.
          </p>
          <img src="/signature.png" alt="signature" className="signature" />
        </article>

        <img
          src="/ebube.jpg"
          alt="Ebube Joseph Offor"
          className="founder-img"
        />
      </div>
    </Wrapper>
  );
};
export default Founder;
