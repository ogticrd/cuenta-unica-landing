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
            <GridItem lg={12} md={12}>
              <div className={styles.items}>
                <Image
                  src="/benefits/layer1.svg"
                  alt="imagen"
                  className={styles.image}
                  width={680}
                  height={510}
                />
                <div>
                  <Typography gutterBottom variant="h2">
                    {data.subTitleOne}
                  </Typography>
                  <Typography variant="body2">{data.descriptionOne}</Typography>
                </div>
              </div>
            </GridItem>
            <GridItem lg={12} md={12}>
              <div className={styles.items_reverse}>
                <div>
                  <Typography gutterBottom variant="h2">
                    {data.subTitleTwo}
                  </Typography>
                  <Typography variant="body2">{data.descriptionTwo}</Typography>
                </div>
                <Image
                  src="/benefits/layer2.svg"
                  alt="imagen"
                  className={styles.image}
                  width={680}
                  height={510}
                />
              </div>
            </GridItem>
            <GridItem lg={12} md={12}>
              <div className={styles.items}>
                <Image
                  src="/benefits/layer3.svg"
                  alt="imagen"
                  className={styles.image}
                  width={680}
                  height={510}
                />
                <div>
                  <Typography gutterBottom variant="h2">
                    {data.subTitleThree}
                  </Typography>
                  <Typography variant="body2">
                    {data.descriptionThree}
                  </Typography>
                </div>
              </div>
            </GridItem>
            <GridItem lg={12} md={12}>
              <div className={styles.items_reverse}>
                <div>
                  <Typography gutterBottom variant="h2">
                    {data.subTitleFour}
                  </Typography>
                  <Typography variant="body2">
                    {data.descriptionFour}
                  </Typography>
                </div>
                <Image
                  src="/benefits/layer4.svg"
                  alt="imagen"
                  className={styles.image}
                  width={680}
                  height={510}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Container>
  );
}
