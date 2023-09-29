'use client';

import { theme } from '@/app/theme';
import { Button } from '../button';
import { Container } from '../container';
import { Typography } from '../typography';
// import { Button } from "@ogticrd/ui-kit"

import styles from './styles.module.css';
import Image from 'next/image';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <div className={styles.content}>
        <div className={styles.content_info}>
          <Typography gutterBottom variant="h1">
            ¡Bienvenido al Servicio de Autenticación <br />
            <span style={{ color: theme.palette.secondary.main }}>
              de Cuenta Única!
            </span>
          </Typography>
          <Typography gutterBottom variant="body1">
            Una manera fácil y cómoda de identificarte, para realizar trámites
            desde tu computadora o celular sin necesidad de trasladarte a los
            organismos gubernamentales.
          </Typography>
          <br />
          <Button notFullWidth>Registrar Cuenta</Button>
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
