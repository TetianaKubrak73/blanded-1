import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
// import { IconContext } from 'react-icons';

export const StatisticItem = ({ title, total, Icon }) => {
  return (
    <StatisticBox>
      {/* <IconContext.Provider
        value={{ color: 'blue',size: 24 }}
      >
        {icon}
      </IconContext.Provider> */}
      <Icon size = {'24px'} color = 'blue'/>

      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
