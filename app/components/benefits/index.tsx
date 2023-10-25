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
            {data.benefits.map((item, index) =>
              index % 2 === 0 ? (
                <GridItem key={index} lg={12} md={12}>
                  <div className={styles.items_reverse}>
                    <div>
                      <Typography gutterBottom variant="h2">
                        {item.title}
                      </Typography>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </div>
                    <Image
                      src={item.image}
                      alt="imagen"
                      className={styles.image}
                      width={680}
                      height={510}
                    />
                  </div>
                </GridItem>
              ) : (
                <GridItem key={index} lg={12} md={12}>
                  <div className={styles.items}>
                    <Image
                      src={item.image}
                      alt="imagen"
                      className={styles.image}
                      width={680}
                      height={510}
                    />
                    <div>
                      <Typography gutterBottom variant="h2">
                        {item.title}
                      </Typography>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                </GridItem>
              ),
            )}
          </GridContainer>
        </div>
      </div>
    </Container>
  );
}
