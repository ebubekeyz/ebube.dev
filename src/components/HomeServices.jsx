import Wrapper from "../assets/wrappers/HomeServices";

const HomeServices = () => {
  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const home = document.querySelectorAll(".home-info");
    home.forEach((item) => {
      const homeHeight = item.getBoundingClientRect().height;

      if (scrollHeight > homeHeight) {
        item.classList.add("anim2");
      } else {
        item.classList.remove("anim2");
      }
    });
  });
  return (
    <Wrapper>
      <div className="homeServices">
        <article className="home-info">
          <img src="/bulb.svg" alt="problem solving" className="home-img" />
          <h3>Problem Solving</h3>
          <p>
            I enjoy breaking down complex requirements and turning them into
            clean, efficient, and scalable software solutions.
          </p>
        </article>

        <article className="home-info">
          <img src="/diamond.svg" alt="reliability" className="home-img" />
          <h3>Reliability</h3>
          <p>
            Writing maintainable code, meeting deadlines, and delivering stable
            applications you can trust in production.
          </p>
        </article>

        <article className="home-info">
          <img
            src="/service.svg"
            alt="full stack services"
            className="home-img"
          />
          <h3>Full-Stack Services</h3>
          <p>
            End-to-end development covering frontend, backend, APIs, databases,
            and deployment.
          </p>
        </article>

        <article className="home-info">
          <img
            src="/search.svg"
            alt="attention to detail"
            className="home-img"
          />
          <h3>Attention to Detail</h3>
          <p>
            From UI consistency to backend logic, every feature is carefully
            implemented for accuracy and performance.
          </p>
        </article>

        <article className="home-info">
          <img src="/history.svg" alt="experience" className="home-img" />
          <h3>Experience</h3>
          <p>
            Hands-on experience building dashboards, APIs, authentication
            systems, and real-world applications.
          </p>
        </article>

        <article className="home-info">
          <img
            src="/globe.svg"
            alt="modern technologies"
            className="home-img"
          />
          <h3>Modern Tech Stack</h3>
          <p>
            Working with modern tools like React, Next.js, Node.js, TypeScript,
            and cloud-based deployment platforms.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};
export default HomeServices;
