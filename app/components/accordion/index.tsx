'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from '@/app/theme';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface AccordionProps {
  questions: {
    id: number | string;
    question: string;
    answer: string;
    images?: string[];
  }[];
}

export default function BasicAccordion({ questions }: AccordionProps) {
  const [open, setOpen] = React.useState(false);
  const [slides, setSlides] = React.useState<{ src: string }[]>([]);

  const handleOpenLightbox = (images: string[]) => {
    setSlides(images.map((src) => ({ src })));
    setOpen(true);
  };

  return (
    <>
      <div>
        {questions.map((item) => (
          <Accordion
            key={item.id}
            sx={{
              marginBottom: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px !important',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
              }
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: item.answer }}
                style={{ fontFamily: 'inherit' }}
              />
              {item.images && item.images.length > 0 && (
                <div style={{ marginTop: '16px' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Imágenes de ayuda (Clic para ampliar):
                  </Typography>
                  <div
                    style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
                  >
                    {item.images.map((img, index) => (
                      <div
                        key={index}
                        style={{
                          cursor: 'pointer',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          position: 'relative',
                          width: '150px',
                          height: '100px',
                        }}
                        onClick={() => handleOpenLightbox(item.images || [])}
                      >
                        <img
                          src={img}
                          alt={`Ayuda paso ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </>
  );
}
