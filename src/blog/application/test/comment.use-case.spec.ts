import { Comment } from 'src/blog/domain/models/comment';
import { CommentUseCase } from '../use-cases/comment.use-case';

describe('PostsUseCase (with full mock repo)', () => {
  const mockPost: Comment = {
    id: '1',
    post_id: '1',
    avatar:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    content: `informed us that you are a potential candidate. For the next step, they would like to bring you an assignment, please see below`,
    author: 'Mr. John Doe',
    createdAt: new Date().toISOString(),
  };

  const mockRepo = {
    getByPostId: jest.fn().mockReturnValue([mockPost]),
    addComment: jest.fn().mockReturnValue(mockPost),
    updateComment: jest.fn().mockImplementation(
      (id: string, data: Partial<Comment>): Comment => ({
        ...mockPost,
        ...data,
      }),
    ),
    deleteComment: jest.fn(),
  };

  const useCase = new CommentUseCase(mockRepo);

  it('should return all posts', () => {
    const result = useCase.execute('1');
    expect(result).toEqual([mockPost]);
    expect(mockRepo.getByPostId).toHaveBeenCalledTimes(1);
  });

  it('should create a post', () => {
    const result = useCase.create(mockPost);
    expect(result).toEqual(mockPost);
    expect(mockRepo.addComment).toHaveBeenCalledWith(mockPost);
  });

  it('should update a post', () => {
    const result = useCase.update('1', { content: 'Updated content' });
    expect(result.content).toBe('Updated content');
    expect(mockRepo.updateComment).toHaveBeenCalledWith('1', {
      content: 'Updated content',
    });
  });

  it('should delete a post', () => {
    useCase.delete('1');
    expect(mockRepo.deleteComment).toHaveBeenCalledWith('1');
  });

  it('should throw error when updating non-existing post', () => {
    const emptyRepo = {
      ...mockRepo,
      updateComment: jest.fn().mockImplementation(() => {
        throw new Error('Not found');
      }),
    };
    const useCaseWithEmptyRepo = new CommentUseCase(emptyRepo);
    expect(() =>
      useCaseWithEmptyRepo.update('999', { content: 'X' }),
    ).toThrow();
  });

  const emptyRepo = {
    ...mockRepo,
    deleteComment: jest.fn().mockImplementation(() => {
      throw new Error('Not found');
    }),
  };
  const useCaseWithEmptyRepo = new CommentUseCase(emptyRepo);

  expect(() => useCaseWithEmptyRepo.delete('999')).toThrow();
  expect(() => useCaseWithEmptyRepo.delete('999')).toThrow();
});
