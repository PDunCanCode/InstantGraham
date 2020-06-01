import { v4 as uuid } from 'uuid';

export const defaultUser = {
  id: uuid(),
  username: 'username',
  name: 'name',
  profile_image: 'https://i.redd.it/90l5uix2ozw41.jpg',
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: 'username',
    name: 'name',
    profile_image: 'https://i.redd.it/j9zl9n20lzw41.jpg',
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class=""> A Prayer of LovingKindness? 🤔⚛️👇<br>•<br>•<br>👉 All DESIRE • HEALTH & HAPPINESS • May you be free of all suffering and find joy & ease  🔥</span>`,
  user: defaultUser,
  media: 'https://i.redd.it/9o1gp5v730x41.jpg',
  comments: [],
  created_at: '2020-02-28T03:08:14.522421+00:00',
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Prayer of LovingKindness 🤔⚛️👇<br>•<br>•<br>👉 All DESIRES, HEALTH & HAPPINESS: May you find JOY & EASE 🔥</span>`,
    user: defaultUser,
    media: 'https://i.redd.it/9o1gp5v730x41.jpg',
    comments: [],
    created_at: '2020-02-28T03:08:14.522421+00:00',
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: 'follow',
    user: defaultUser,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
  {
    id: uuid(),
    type: 'like',
    user: defaultUser,
    post: defaultPost,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: 'me',
  name: 'myself',
  profile_image: 'https://i.redd.it/rtnsgacmjsw41.jpg',
  website: 'https://github.com/PDunCanCode',
  email: 'pause.duncan@gmail.com',
  bio: 'Clovis is not THAT bad',
  phone_number: '555-555-5555',
  posts: [],
  followers: [defaultUser],
  following: [defaultUser],
};
