import { Container } from '../components/container';
import { generalFaqQuestions } from '../content/general-faq';
import { Typography } from '../components/typography';
import { Questions } from '../types';

export default function QuestionsPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <Container maxWidth="md">
        <Typography color="primary" variant="h1" gutterBottom>
          Preguntas frecuentes
        </Typography>

        {generalFaqQuestions.map((item: Questions, index) => (
          <div key={index}>
            <Typography color="primary" variant="h5" gutterBottom>
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
