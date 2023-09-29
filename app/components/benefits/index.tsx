'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { Container } from '../container';
import { Typography } from '../typography';
import { theme } from '@/app/theme';
import { GridContainer, GridItem } from '../grid';

export default function Index() {
  return (
    <Container>
      <div className={styles.content}>
        <Typography gutterBottom variant="h1">
          Beneficios
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
                Acceso sencillo
              </Typography>
              <Typography variant="body2">
                No necesitas crear cuentas en varios sitios web gubernamentales.
                Con tu Cuenta Única Ciudadana, solo tendrás que{' '}
                <span style={{ color: theme.palette.secondary.main }}>
                  <b>iniciar sesión</b>
                </span>{' '}
                una vez para usar muchos servicios digitales diferentes.
              </Typography>
            </GridItem>
            <GridItem lg={6}>
              <Typography gutterBottom variant="h2">
                Acceso sencillo
              </Typography>
              <Typography variant="body2">
                No necesitas crear cuentas en varios sitios web gubernamentales.
                Con tu Cuenta Única Ciudadana, solo tendrás que{' '}
                <span style={{ color: theme.palette.secondary.main }}>
                  <b>iniciar sesión</b>
                </span>{' '}
                una vez para usar muchos servicios digitales diferentes.
              </Typography>
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
