import React, { useState } from "react";
import RecipeReviewCard from "./cards";
import { Box, Paper } from "@material-ui/core";
import User from "./User";
import Story from "./Story";

const data = [
  { image: "https://picsum.photos/200/300", username: "abcsbacb", like: false },
  { image: "https://picsum.photos/200/301", username: "data ke 2", like: true },
  { image: "https://picsum.photos/200/302", username: "data ke 2", like: true },
  { image: "https://picsum.photos/200/303", username: "data ke 2", like: true },
];

// const usersData = ;

const dataStory = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "e" },
];
const HomePage = () => {
  const [stories, setStories] = useState(dataStory);
  const [posts, setPosts] = useState(data);

  function handleClick(id) {
    const newStoriesData = stories.filter((element) => element.id !== id);
    setStories(newStoriesData);
  }

  const [users, setUsers] = useState([
    {
      username: "hello",
      avatar: "https://picsum.photos/200/302",
      followed: true,
    },
    {
      username: "hello1",
      avatar: "https://picsum.photos/200/342",
      followed: true,
    },
    {
      username: "hello2",
      avatar: "https://picsum.photos/200/304",
      followed: false,
    },
  ]);

  function handleUserClick(index) {
    const newUsersData = users.filter((element, i) => {
      if (i !== index) return element;
      else if (!element.followed) return element;
      else return false;
    });
    setUsers(newUsersData);
  }

  function handleLikePost(index) {
    setPosts((posts) => {
      return posts.map((element, i) => {
        if (i === index) {
          return {
            ...element,
            like: !element.like,
          };
        } else return element;
      });
    });
  }

  
  function handleDeletePost(index) {
    const selectedCard = [];
    for (let i = 0; i < posts.length; i++) {
      if (i !== index) {
        selectedCard.push(posts[i]);
      }else if(posts[i].like === true) {
        selectedCard.push(posts[i]);
      }
    }
    setPosts(selectedCard);
  }

  return (
    <div className="cards">
      <Box px={1} flexGrow={1}>
        <Box
          padding={1}
          marginY={2}
          component={Paper}
          elevation={3}
          display="flex"
          alignItems="center"
        >
          {stories.map((element, index) => (
            <Story
              name={element.name}
              profile_pic={`https://picsum.photos/200/30${index}`}
              onClick={() => handleClick(element.id)}
            />
          ))}
        </Box>
        <Box flexGrow={1}>
          {posts.map((element, index) => (
            <RecipeReviewCard
              image={element.image}
              username={element.username}
              like={element.like}
              post={element.posts}
              onDoubleClick={() => handleLikePost(index)}
              onPostLikeClick={() => handleLikePost(index)}
              onPostDelete={() => handleDeletePost(index)}
            />
          ))}
        </Box>
      </Box>
      <Box width="200px">
        {users.map((element, index) => (
          <User
            onClick={() => handleUserClick(index)}
            name={element.username}
            avatar={element.avatar}
            followed={element.followed}
            users={users}
            setUsers={setUsers}
            index={index}
          />
        ))}
      </Box>
    </div>
  );
};
export default HomePage;
