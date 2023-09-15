import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { RegularButton } from '@chainlit/components';

import AccentButton from 'components/atoms/buttons/accentButton';

import useClearChat from 'hooks/clearChat';

export default function NewChatButton() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const clearChat = useClearChat();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    clearChat();
    navigate('/');
    handleClose();
  };

  return (
    <Box>
      <AccentButton
        id="new-chat-button"
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        چت جدید
      </AccentButton>
      <Dialog
        open={open}
        onClose={handleClose}
        id="new-chat-dialog"
        PaperProps={{
          sx: {
            backgroundImage: 'none'
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {'میخواهید یک چت جدید ایجاد کنید؟'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          با این کار پیام های فعلی پاک می شوند و یک چت جدید شروع می شود.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <RegularButton onClick={handleClose}>لغو</RegularButton>
          <AccentButton
            id="confirm"
            variant="outlined"
            onClick={handleConfirm}
            autoFocus
          >
            تایید
          </AccentButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
