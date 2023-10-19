'use client';

import styles from './styles.module.css';

import Image from 'next/image';

import { GridContainer, GridItem } from '../grid';
import { Typography } from '../typography';
import { Container } from '../container';
import { theme } from '@/app/theme';
import { Button } from '../button';
import { OnlineServices } from '@/app/types';

export default function Index({ data }: { data: OnlineServices }) {
  const handleClick = () => {
    window.location.href = `mailto:${data.button.href}`;
  };

  return (
    <Container maxWidth="xl">
      <div className={styles.layer_point} />

      <div className={styles.content}>
        <Container>
          <GridContainer alignItems="center">
            <GridItem lg={6}>
              <Typography gutterBottom variant="subtitle2" color="#ffffff">
                {data.title + ' '}
                <span style={{ color: theme.palette.primary.main }}>
                  {data.titleBlue}
                </span>
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                gutterBottom
              >
                {data.description}
              </Typography>
              <br />
              <br />
              <Button notFullWidth onClick={handleClick}>
                {data.button.label}
              </Button>
            </GridItem>

            <GridItem lg={6}>
              <Image
                src="/city.svg"
                alt="ciudad"
                className={styles.image}
                width={469}
                height={366}
              />
            </GridItem>
          </GridContainer>
        </Container>
      </div>
    </Container>
  );
}
