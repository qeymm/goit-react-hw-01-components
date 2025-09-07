import PropTypes from 'prop-types';
import style from './StatisticsStyle.module.css';

//Random Color Generator
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>

      <ul className={style.statList}>
        {stats.map(stat => (
          <li
            className={style.item}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

//Checking PropTypes//
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
