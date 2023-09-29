'use client';

import styles from './styles.module.css';

import { Typography } from '../typography';
import { Container } from '../container';
import { theme } from '@/app/theme';
import Steps from './steps';
import { StepsToRegister } from '@/app/types';

export default function Index({ data }: { data: StepsToRegister }) {
  return (
    <div className={styles.content}>
      <div className={styles.layer_logo} />

      <Container>
        <Typography variant="h1" color="#ffffff">
          {data.title + ' '}
          <span style={{ color: theme.palette.info.main }}>
            {data.titleBlue}
          </span>
        </Typography>

        <Steps steps={data.steps} />
      </Container>
    </div>
  );
}
