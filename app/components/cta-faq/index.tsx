'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../container';
import { Typography } from '../typography';
import { theme } from '@/app/theme';
import Button from '@mui/material/Button';

export default function CtaFaq() {
  return (
    <div
      style={{
        padding: '40px 0',
        backgroundColor: '#eff7ff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h5" color="primary" gutterBottom>
          ¿Tienes problemas técnicos con tu cuenta?
        </Typography>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="body1" gutterBottom>
            Encuentra respuestas a preguntas frecuentes y guías paso a paso para
            resolver inconvenientes.
          </Typography>
        </div>
        <Link href="/technical-faqs" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              padding: '10px 24px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#002652',
              },
            }}
          >
            Ver Preguntas Frecuentes
          </Button>
        </Link>
      </Container>
    </div>
  );
}
