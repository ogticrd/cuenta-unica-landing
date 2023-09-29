'use client';

import styles from './styles.module.css';

import Image from 'next/image';

import { GridContainer, GridItem } from '../grid';
import { Typography } from '../typography';
import { theme } from '@/app/theme';
import { Step } from '@/app/types';

export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className={styles.info}>
      <GridContainer alignItems="flex-end">
        <GridItem lg={6}>
          {steps.map((step, index) => (
            <div className={styles.steps_info} key={index}>
              <div className={styles.info_subtitle}>
                <div
                  className={styles.number}
                  style={{ background: theme.palette.info.main }}
                >
                  <Typography variant="subtitle2" color="#ffffff">
                    {index + 1}
                  </Typography>
                </div>
                <Typography variant="subtitle2" color="#ffffff">
                  {step.title}
                </Typography>
              </div>
              {step.items.map((item, index) => (
                <Typography variant="body2" color="#ffffff" key={index}>
                  • {item}
                </Typography>
              ))}
            </div>
          ))}
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
