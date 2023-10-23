import { Container } from '../components/container';
import { Typography } from '../components/typography';
import { Content, Questions } from '../types';

export default async function QuestionsPage() {
  const contentUrl = process.env.CONTENT_JSON_URL as string;
  const response = await fetch(contentUrl, {
    cache: 'no-store',
  });
  const { questions }: Content = await response.json();

  return (
    <div style={{ padding: '60px 0' }}>
      <Container maxWidth="md">
        {questions.map((item: Questions, index) => (
          <div key={index}>
            <Typography color="primary" variant="h4" gutterBottom>
              {item?.question}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {item?.answer}
            </Typography>
            <br />
          </div>
        ))}
      </Container>
    </div>
  );
}
