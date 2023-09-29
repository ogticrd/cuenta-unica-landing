'use client';

import styles from './styles.module.css';

import Image from 'next/image';

import { Typography } from '../typography';
import { Container } from '../container';
import { theme } from '@/app/theme';
import { Button } from '../button';
import { Hero } from '@/app/types';

export default function Index({ data }: { data: Hero }) {
  const handleClick = () => {
    window.location.href = data.button.href;
  };

  return (
    <Container maxWidth="lg">
      <div className={styles.content}>
        <div className={styles.content_info}>
          <Typography gutterBottom variant="h1">
            {data.title} <br />
            <span style={{ color: theme.palette.secondary.main }}>
              {data.titleRed}
            </span>
          </Typography>
          <Typography gutterBottom variant="body1">
            {data.description}
          </Typography>
          <br />
          <Button notFullWidth onClick={handleClick}>
            {data.button.label}
          </Button>
        </div>

        <div>
          <Image
            src="/hero.svg"
            alt="logo"
            className={styles.image}
            width={762}
            height={429}
          />
        </div>
      </div>
    </Container>
  );
}
