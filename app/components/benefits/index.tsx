'use client';

import styles from './styles.module.css';

import Image from 'next/image';

import { GridContainer, GridItem } from '../grid';
import { Typography } from '../typography';
import { Container } from '../container';
import { Benefits } from '@/app/types';
export default function Index({ data }: { data: Benefits }) {
  return (
    <Container>
      <div className={styles.content}>
        <Typography gutterBottom variant="h1">
          {data.title}
        </Typography>
        <div className={styles.content_info}>
          <GridContainer alignItems="center">
            <GridItem lg={6}>
              <Image
                src="/benefits/layer1.svg"
                alt="imagen"
                className={styles.image}
                width={680}
                height={510}
              />
            </GridItem>
            <GridItem lg={6}>
              <Typography gutterBottom variant="h2">
                {data.subTitleOne}
              </Typography>
              <Typography variant="body2">{data.descriptionOne}</Typography>
            </GridItem>
            <GridItem lg={6}>
              <Typography gutterBottom variant="h2">
                {data.subTitleTwo}
              </Typography>
              <Typography variant="body2">{data.descriptionTwo}</Typography>
            </GridItem>
            <GridItem lg={6}>
              <Image
                src="/benefits/layer1.svg"
                alt="imagen"
                className={styles.image}
                width={680}
                height={510}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Container>
  );
}
