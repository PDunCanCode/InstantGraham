import React from 'react';
import Modal from 'react-modal';
import { usePostModalStyles } from '../../styles';
import { useHistory, useParams } from 'react-router-dom';
import { CloseIcon } from '../../icons';
import Post from './Post';

function PostModal() {
  const classes = usePostModalStyles();
  const { postId } = useParams();
  const history = useHistory();

  return (
    <>
      <Modal
        overlayClassName={classes.overlay}
        onRequestCLose={() => history.goBack()}
        style={{
          conntent: {
            display: 'flex',
            alignITems: 'center',
            maxWidth: 935,
            width: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            padding: 0,
            overflow: 'none',
            WebkitOverflowScrolling: 'touch',
          },
        }}
      >
        <Post id={post.Id} />
      </Modal>
      <div onClick={() => history.goBack()} className={classes.close}>
        <CloseIcon />
      </div>
    </>
  );
}

export default PostModal;
