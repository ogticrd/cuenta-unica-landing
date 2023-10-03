'use client';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';

import { GridContainer, GridItem } from '../grid';
import { theme } from '@/app/theme';
import { Footer } from '@/app/types';

export default function Index({ data }: { data: Footer }) {
  const handleSocialNetworkClick = (url: string) => () => {
    window.open(url);
  };

  return (
    <>
      <div
        style={{ padding: '75px 25px', background: theme.palette.primary.main }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: 'auto',
            padding: '0px 24px',
          }}
        >
          <GridContainer spacing={4}>
            <GridItem md={12} lg={2}>
              <div style={{ display: 'flex' }}>
                <Image src="/logo-gob.svg" alt="logo" width="198" height="80" />
              </div>
            </GridItem>
            <GridItem md={12} lg={2}>
              <div style={{ display: 'flex' }}>
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width="166"
                  height="82"
                />
              </div>
            </GridItem>
            <GridItem md={12} lg={8}>
              <GridContainer spacing={4}>
                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    {data.knowUs.title}
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    {data.knowUs.text}
                  </Typography>
                </GridItem>

                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    {data.contact.title}
                  </Typography>
                  <br />
                  {data.contact.items.map((item, index) => (
                    <Typography
                      color="white"
                      fontWeight="400"
                      fontSize="16"
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                </GridItem>

                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    {data.search.title}
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    {data.search.text}
                  </Typography>
                </GridItem>

                <GridItem md={6} lg={3}>
                  <Typography fontWeight="500" fontSize={16} color="white">
                    {data.info.title}
                  </Typography>
                  <br />
                  <Typography color="white" fontWeight="400" fontSize="16">
                    {data.info.text}
                  </Typography>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <div style={{ background: 'white', padding: '12.5px 25px' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: 'auto',
            padding: '0px 24px',
          }}
        >
          <GridContainer>
            <GridItem md={6} lg={6}>
              <div style={{ marginTop: '8px' }}>
                <Typography variant="caption" fontWeight="600" color="primary">
                  © {new Date().getFullYear()} Todos los Derechos Reservados.
                  Desarrollado por
                </Typography>
                <Image
                  style={{
                    marginBottom: '-10px',
                    marginLeft: '5px',
                    cursor: 'pointer',
                  }}
                  src="/logo-ogtic.svg"
                  alt="logo ogtic"
                  width="55"
                  height="29"
                />
              </div>
            </GridItem>

            <GridItem md={6} lg={6}>
              <div style={{ display: 'flex' }}>
                <Typography
                  sx={{ margin: 'auto', marginRight: '10px' }}
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                >
                  SÍGUENOS
                </Typography>

                <IconButton
                  color="primary"
                  onClick={handleSocialNetworkClick(
                    data.socialNetworks.facebook.url,
                  )}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  onClick={handleSocialNetworkClick(
                    data.socialNetworks.youtube.url,
                  )}
                >
                  <YouTubeIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  onClick={handleSocialNetworkClick(
                    data.socialNetworks.twitter.url,
                  )}
                >
                  <TwitterIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  onClick={handleSocialNetworkClick(
                    data.socialNetworks.instagram.url,
                  )}
                >
                  <InstagramIcon />
                </IconButton>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  );
}
