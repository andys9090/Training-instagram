import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TrashIcon from "@material-ui/icons/Delete";
import { Box, Button, InputBase, Typography } from "@material-ui/core";

const LikeComponent = (props) => {
  const { liked, onLikeClick } = props;

  return (
    <IconButton onClick={onLikeClick}>
      <FavoriteIcon className={liked ? "liked" : ""} />
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "1rem auto",
    textAlign: "left",
  },
  media: {
    height: 350,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Comment = (props) => {
  const { username, comment, like, onDeleteClick, onCommentLikeClick } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography>
        <b>{username}</b> {comment}
      </Typography>
      <Box>
        <LikeComponent liked={like} onLikeClick={onCommentLikeClick} />
        <IconButton onClick={onDeleteClick}>
          <TrashIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const data = [{ username: "andy", comment: "hello", like: true }];

export default function RecipeReviewCard(props) {
  const { username, image, like, onPostLikeClick, onDoubleClick, onPostDelete } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // start from here

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(data);

  function handleSubmitComment(event) {
    event.preventDefault();
    setCommentList([...commentList, { username: "andy", comment }]);
    setComment("");
  }

  function onDeleteClick(index) {
    const selectedComment = [];
    for (let i = 0; i < commentList.length; i++) {
      if (i !== index) {
        selectedComment.push(commentList[i]);
      } else if (commentList[i].like === true) {
        selectedComment.push(commentList[i]);
      }
    }
    setCommentList(selectedComment);
  }

  function handleLikeComment(index) {
    const newCommentList = commentList.map((element, i) => {
      if (i === index) {
        return {
          ...element,
          like: !element.like,
        };
      } else return element;
    });

    setCommentList(newCommentList);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton onClick={onPostDelete}>
            <TrashIcon />
          </IconButton>
        }
        title={username}
      />
      <CardMedia
        className={classes.media}
        image={image}
        onDoubleClick={onDoubleClick}
      />
      <CardActions disableSpacing>
        <LikeComponent liked={like} onLikeClick={onPostLikeClick} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Box px={2}>
        <p>
          {commentList.map((element, index) => (
            <div className="Comment">
              <Comment
                username={element.username}
                comment={element.comment}
                like={element.like}
                onDeleteClick={() => onDeleteClick(index)}
                onCommentLikeClick={() => handleLikeComment(index)}
              />
            </div>
          ))}
        </p>
      </Box>
      <form onSubmit={handleSubmitComment}>
        <Box
          p={1}
          px={2}
          display="flex"
          alignItems="center"
          borderTop={"1px solid #f5f5f5"}
        >
          <InputBase
            name="comment"
            placeholder="Tambahkan komentar...."
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button color="primary" variant="text" type="submit">
            Kirim
          </Button>
        </Box>
      </form>
    </Card>
  );
}
