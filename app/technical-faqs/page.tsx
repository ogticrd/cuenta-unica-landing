'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Container } from '../components/container';
import { Typography } from '../components/typography';
import BasicAccordion from '../components/accordion';
import SearchBar from '../components/search';
import { theme } from '../theme';

interface Question {
  id: number;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch('/api/faqs');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setQuestions(data.questions);
        setFilteredQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(questions, {
        keys: ['question', 'answer'],
        threshold: 0.35,
        ignoreLocation: true,
        ignoreDiacritics: true,
      }),
    [questions],
  );

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredQuestions(questions);
      return;
    }

    const results = fuse.search(query);
    setFilteredQuestions(results.map((r) => r.item));
  };

  return (
    <div
      style={{ padding: '60px 0', minHeight: '60vh', background: '#eff7ff' }}
    >
      <Container maxWidth="md">
        <Typography color="primary" variant="h1" gutterBottom>
          Preguntas Frecuentes Técnicas
        </Typography>
        <div style={{ marginBottom: '40px' }}>
          <Typography variant="body1" gutterBottom>
            Encuentra soluciones a los problemas técnicos más comunes de tu{' '}
            <span
              style={{ color: theme.palette.info.main, fontWeight: 'bold' }}
            >
              Cuenta Única Ciudadana
            </span>
            .
          </Typography>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <SearchBar
            onSearch={handleSearch}
            placeholder="Buscar por palabra clave..."
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h6">Cargando preguntas...</Typography>
          </div>
        ) : filteredQuestions.length > 0 ? (
          <BasicAccordion questions={filteredQuestions} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Typography variant="body1">
              No se encontraron resultados para tu búsqueda.
            </Typography>
          </div>
        )}
      </Container>
    </div>
  );
}
