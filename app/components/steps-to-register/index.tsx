'use client';

import { theme } from '@/app/theme';
import { Container } from '../container';
import { Typography } from '../typography';
import styles from './styles.module.css';
import Image from 'next/image';
// import { GridContainer, GridItem } from "@ogticrd/ui-kit"
import { GridContainer, GridItem } from '../grid';

import Steps from './steps';

export default function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.layer_logo} />

      <Container>
        <Typography variant="h1" color="#ffffff">
          Pasos para{' '}
          <span style={{ color: theme.palette.info.main }}>registrarnos</span>
        </Typography>

        <Steps />
      </Container>
    </div>
  );
}
