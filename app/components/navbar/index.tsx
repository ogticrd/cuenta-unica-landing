'use client';

import AppsIcon from '@mui/icons-material/Apps';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/app/theme';

export default function Index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" elevation={0}>
        <div style={{ width: '100%', maxWidth: '1400px', margin: 'auto' }}>
          <Toolbar sx={{ padding: '0px', height: '72px' }}>
            <div style={{ flexGrow: 1, paddingTop: '8px' }}>
              <Link href={'/'}>
                <Image src="/logo.svg" alt="logo" width="200" height="48" />
              </Link>
            </div>
            <AppsIcon fontSize="large" color="primary" />
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
