/* eslint-disable prettier/prettier */
import { Comment } from '../../domain/models/comment';

export const MOCK_COMMENTS: Comment[] = [
  {
    id: '1',
    post_id: '1',
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    content: `informed us that you are a potential candidate. For the next step, they would like to bring you an assignment, please see below`,
    author: 'Mr. John Doe',
    createdAt: new Date('2025-05-20T14:37:55.123Z').toISOString(),
  },
  {
    id: '2',
    post_id: '1',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    content: `you finish this assignment please save as a Github and reply back to this email ka. `,
    author: 'Teerapon',
    createdAt: new Date('2025-05-21T14:37:55.123Z').toISOString(),
  },
  {
    id: '3',
    post_id: '1',
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    author: 'Mr. Teerapon Suksangpleng',
    createdAt: new Date('2025-05-21T14:37:55.123Z').toISOString(),
  },
  {
    id: '4',
    post_id: '2',
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    content: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
    author: 'Mr. Teerapon Suksangpleng',
    createdAt: new Date('2025-05-25T14:37:55.123Z').toISOString(),
  },
];


