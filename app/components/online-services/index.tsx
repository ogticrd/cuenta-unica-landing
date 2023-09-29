'use client';

import { theme } from '@/app/theme';
// import { Button } from "@ogticrd/ui-kit"
import { Typography } from '../typography';
import { Button } from '../button';

import styles from './styles.module.css';
import { Container } from '../container';
import { GridContainer, GridItem } from '../grid';
import Image from 'next/image';

export default function Index() {
  return (
    <Container maxWidth="xl">
      {/* <div className={styles.layer_logo} /> */}
      <div className={styles.layer_point} />

      <div className={styles.content}>
        <Container>
          <GridContainer alignItems="center">
            <GridItem lg={6}>
              <Typography gutterBottom variant="subtitle2" color="#ffffff">
                ¿Quieres activar la Autenticación para{' '}
                <span style={{ color: theme.palette.primary.main }}>
                  tus servicios en línea?
                </span>
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                gutterBottom
              >
                Todas las entidades públicas deben hacer accesibles sus
                servicios en línea a través del SAG, pero los particulares
                también pueden hacerlo.
              </Typography>
              <br />
              <br />
              <Button notFullWidth>Solicitar Información</Button>
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
