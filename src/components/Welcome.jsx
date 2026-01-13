import Wrapper from "../assets/wrappers/Welcome";

const Welcome = () => {
  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const welcome = document.querySelector(".welcome");
    const welcomeHeight = document
      .querySelector(".welcome")
      .getBoundingClientRect().height;

    if (scrollHeight > welcomeHeight) {
      welcome.classList.add("add-anim");
    } else {
      welcome.classList.remove("add-anim");
    }
  });

  return (
    <Wrapper>
      <div className="welcome">
        <h1>
          Welcome to <span className="col">My Portfolio</span>
        </h1>
        <p>
          I’m a Full-Stack Developer specializing in building modern, scalable
          web applications. From intuitive user interfaces to secure backend
          systems, I deliver end-to-end solutions using modern technologies that
          turn ideas into production-ready software.
        </p>
      </div>
    </Wrapper>
  );
};
export default Welcome;
