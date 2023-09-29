'use client';

import { theme } from '@/app/theme';
import { Container } from '../container';
import { GridContainer, GridItem } from '../grid';
import { Typography } from '../typography';
import styles from './styles.module.css';

export default function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.layer_point} />
      <div className={styles.layer_logo} />

      <Container maxWidth="lg">
        <GridContainer>
          <GridItem lg={8}>
            <div className={styles.info}>
              <Typography gutterBottom variant="h1">
                ¿Qué es{' '}
                <span style={{ color: theme.palette.info.main }}>
                  Cuenta Única?
                </span>
              </Typography>
              <Typography>
                <span style={{ color: theme.palette.primary.main }}>
                  Esta plataforma es la forma en la que puedes crear tu Cuenta
                  Única Ciudadana. Su objetivo principal es{' '}
                  <b>hacer más fácil</b> para todos obtener servicios del
                  gobierno. Esto significa que, con una única cuenta, podrás
                  acceder a los sitios web, trámites y servicios que las
                  instituciones gubernamentales ofrecen en línea. Para
                  registrarte, solo necesitas tu número de cédula, realizar una
                  breve verificación de identidad y elegir un correo electrónico
                  y una contraseña.
                </span>
              </Typography>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
