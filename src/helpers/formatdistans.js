import { formatDistanceToNow } from 'date-fns';

function formatDistance(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
export default formatDistance;
