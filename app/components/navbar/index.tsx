'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
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
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
