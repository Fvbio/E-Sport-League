import data from "../data/about.json";
import '../assets/css/style.css';

const Tournament = () => {
  return (
    <div className="Tournament">
      {data.map((value, index) => {
        return (
          <article className={value.title} key={index}>
            <a href={value.link}>
              <h4 className="about-item-title">{value.title}</h4>
              <img src={value.picture} alt={value.description} />
            </a>
          </article>
        );
      })}
    </div>
  );
};

export default Tournament;
