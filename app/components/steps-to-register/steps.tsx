'use client';

import { theme } from '@/app/theme';
import { Container } from '../container';
import { Typography } from '../typography';
import styles from './styles.module.css';
import Image from 'next/image';
// import { GridContainer, GridItem } from "@ogticrd/ui-kit"
import { GridContainer, GridItem } from '../grid';

export default function Steps() {
  return (
    <div className={styles.info}>
      <GridContainer alignItems="flex-end">
        <GridItem lg={6}>
          <div className={styles.steps_info}>
            <div className={styles.info_subtitle}>
              <div
                className={styles.number}
                style={{ background: theme.palette.info.main }}
              >
                <Typography variant="subtitle2" color="#ffffff">
                  1
                </Typography>
              </div>
              <Typography variant="subtitle2" color="#ffffff">
                Registro de identidad:
              </Typography>
            </div>

            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
          </div>
          <div className={styles.steps_info}>
            <div className={styles.info_subtitle}>
              <div
                className={styles.number}
                style={{ background: theme.palette.info.main }}
              >
                <Typography variant="subtitle2" color="#ffffff">
                  2
                </Typography>
              </div>
              <Typography variant="subtitle2" color="#ffffff">
                Confirmación:
              </Typography>
            </div>

            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
          </div>
          <div className={styles.steps_info}>
            <div className={styles.info_subtitle}>
              <div
                className={styles.number}
                style={{ background: theme.palette.info.main }}
              >
                <Typography variant="subtitle2" color="#ffffff">
                  3
                </Typography>
              </div>
              <Typography variant="subtitle2" color="#ffffff">
                Activa la autenticación de doble factor.
              </Typography>
            </div>

            <Typography variant="body2" color="#ffffff">
              • Click aceptar y confirmar, proceda a completar con la activación
              de autenticación de doble factor.
            </Typography>
          </div>
          <div className={styles.steps_info}>
            <div className={styles.info_subtitle}>
              <div
                className={styles.number}
                style={{ background: theme.palette.secondary.main }}
              >
                <Typography variant="subtitle2" color="#ffffff">
                  4
                </Typography>
              </div>
              <Typography variant="subtitle2" color="#ffffff">
                ¡Registro completo!
              </Typography>
            </div>

            <Typography variant="body2" color="#ffffff">
              • Ingresa tu número de <b>cédula.</b>
            </Typography>
          </div>
        </GridItem>

        <GridItem lg={6}>
          <Image
            src="/layer-steps.svg"
            alt="logo"
            className={styles.image}
            width={735}
            height={543}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
