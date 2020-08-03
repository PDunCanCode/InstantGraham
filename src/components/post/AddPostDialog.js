import React from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import {
  Appbar,
  Typography,
  Toolbar,
  Divider,
  Dialog,
  Avatar,
  TextField,
  Button,
  Paper,
  InputAdornment,
} from '@material-ui/core';
import { useAddPostDialogStyles } from '../../styles';
import { ArrowBackIos, PinDrop } from '@material-ui/icons';
import { UserContext } from '../../App';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];
function AddPostDialog({ media, handleClose }) {
  const classes = useAddPostDialogStyles();
  const { me } = React.useContext(UserContext);
  const editor = React.useMemo(() => withReact(createeditor()), []);
  const [value, setValue] = React.useState(initialValue);
  const [location, setLocation] = React.useState('');

  return (
    <Dialog fullscreen open onClose={handleClose}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <ArrowBackIos onClick={handleClose} />
          <Typography align='center' variant='body1' className={classes.title}>
            New Post
          </Typography>
          <Button color='primary' className={classes.share}>
            Share
          </Button>
        </Toolbar>
      </AppBar>
      <Divider />
      <Paper className={classes.paper}>
        <Avatar src={me.profile_image} />
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <Editable
            className={classes.editor}
            placeholder='Write Your Caption...'
          />
        </Slate>
        <Avatar
          src={URL.createObjectURL(media)}
          className={classes.avatarLarge}
          variant='square'
        />
      </Paper>
      <TextField
        fullWidth
        placeholder='Location'
        inputProps={{
          classes: {
            root: classes.root,
            input: classes.input,
            underline: classes.underline,
          },
          startAdornment: (
            <InputAdornment>
              <PinDrop />
            </InputAdornment>
          ),
        }}
        onChange={(event) => setLocation(event.target.value)}
      />
    </Dialog>
  );
}

export default AddPostDialog;
