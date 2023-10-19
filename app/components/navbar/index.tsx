'use client';

import AppsIcon from '@mui/icons-material/Apps';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../button';
import { Navbar } from '@/app/types';

export default function Index({ data }: { data: Navbar }) {
  const handleClick = () => {
    window.location.href = data.button.href;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" elevation={0}>
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: 'auto',
            padding: '0 5px',
          }}
        >
          <Toolbar sx={{ padding: '0px', height: '72px' }}>
            <div style={{ flexGrow: 1, paddingTop: '8px' }}>
              <Link href={'/'}>
                <Image src="/logo.svg" alt="logo" width="105" height="52" />
              </Link>
            </div>
            <AppsIcon
              fontSize="large"
              color="primary"
              sx={{ marginRight: '24px', display: 'none' }}
            />
            <Button notFullWidth variant="outlined" onClick={handleClick}>
              {data?.button.label}
            </Button>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
