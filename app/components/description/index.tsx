'use client';

import styles from './styles.module.css';

import { GridContainer, GridItem } from '../grid';
import { Typography } from '../typography';
import { Description } from '@/app/types';
import { Container } from '../container';
import { theme } from '@/app/theme';

export default function Index({ data }: { data: Description }) {
  return (
    <div className={styles.content}>
      <div className={styles.layer_point} />
      <div className={styles.layer_logo} />

      <Container maxWidth="lg">
        <GridContainer>
          <GridItem lg={8}>
            <div className={styles.info}>
              <Typography gutterBottom variant="h1">
                {data.title + ' '}
                <span style={{ color: theme.palette.info.main }}>
                  {data.titleBlue}
                </span>
              </Typography>
              <Typography>
                <span style={{ color: theme.palette.primary.main }}>
                  {data.description}
                </span>
              </Typography>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
