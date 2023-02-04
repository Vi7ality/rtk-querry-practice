import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useGetCommentsQuery } from '../../redux/commentApi';
import { selectFilter } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';
// import { comments } from '../../helpers/comments';

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  const filter = useSelector(selectFilter);
 
  const visibleComments = () => {
  return comments.filter(comment => comment.content.toLowerCase().includes(filter.toLowerCase()))
  }
  if (!comments) {
    return
  }
  return (
    <Grid>
      {comments &&
        visibleComments().map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
