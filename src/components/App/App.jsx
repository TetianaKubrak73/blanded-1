import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import article from '../../data/article.json';

import data from '../../data/data.json'

import forbes from '../../data/forbes.json'

import transactions from '../../data/transactions.json'

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={article.poster}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
          tag={article.tag}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics data={data} title="Main Statistics" />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList
          forbes={forbes}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory
          transactions={transactions}
        />
      </Container>
    </Section>
  );
};


