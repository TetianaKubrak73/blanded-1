import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';


// const icons = [<FaRegThumbsUp />, <MdPeople />, <MdOutlineProductionQuantityLimits />, <GiTreeDoor />,];
const icons = [
  FaRegThumbsUp ,
  MdPeople ,
  MdOutlineProductionQuantityLimits ,
  GiTreeDoor ,
];

export const Statistics = ({ data, title }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {data.map((statistic, i) => {

          return (
            <StatisticItem
              key={Statistics.id}
              title={statistic.title}
              total={statistic.total}
              Icon = {icons[i]}
            />
          );
        })}
        
      </StatisticsList>{' '}
    </>
  );
};
