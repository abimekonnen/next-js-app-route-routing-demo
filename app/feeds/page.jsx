"use client"
import Image from "next/image";
import Link from 'next/link';


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PictureDetail from '@/app/pictures/[id]/page'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Feedes() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const photos = [
    {
      id:'1'
    },
    {
      id:'2'
    },
  ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
        <h1 className="text-4xl">Feedes Page</h1>
        {photos.map((photo) => (
        <Link className="text-2xl hover:bg-blue-600" key={photo.id} href={`/pictures/${photo.id}`}  passHref>
          Open Picture {photo.id}
        </Link>
      ))}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Intecepting route
            </Typography>
            <Typography id="modal-modal-description" className="h-24">
              <PictureDetail params={{id:'1'}}/>
            </Typography>
          </Box>
        </Modal>
    </div>
  );
}
