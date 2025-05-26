/* eslint-disable prettier/prettier */
import { PostBlog } from '../../domain/models/post';

export const MOCK_POSTS: PostBlog[] = [
  {
    id: '1',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    title: 'Hello World',
    content: `นี่คือโพสต์แรกของระบบ`,
    category: 'History',
    author: 'Teerapon',
    createdAt: new Date('2025-05-20T14:37:55.123Z').toISOString(),
    commentCount: 3,
  },
  {
    id: '2',
    avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'You’ve gone Incognito',
    content: `Others who use this device won’t see your activity, so you can browse more privately. This won't change how data is collected by websites you visit and the services they use, including Google. Downloads, bookmarks and reading list items will be saved. `,
    category: 'History',
    author: 'Admin',
    createdAt: new Date('2025-05-22T14:37:55.123Z').toISOString(),
    commentCount: 1,
  },
  {
    id: '3',
    avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'What is a Profile Picture?',
    content: `A profile pic is a photo that appears in your online accounts, regardless of whether it’s a social media or professional site. Each social media site has its own unique way of displaying profile photographs as an avatar next to an account name.`,
    category: 'History',
    author: 'Admin',
    createdAt: new Date('2025-05-25T14:37:55.123Z').toISOString(),
    commentCount: 0,
  },
];
