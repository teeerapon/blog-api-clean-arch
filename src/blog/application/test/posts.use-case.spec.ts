import { PostBlog } from 'src/blog/domain/models/post';
import { PostsUseCase } from '../use-cases/posts.use-case';

describe('PostsUseCase (with full mock repo)', () => {
  const mockPost: PostBlog = {
    id: '1',
    title: 'Test Post',
    content: 'Content',
    author: 'Author',
    avatar: '',
    category: 'Category',
    commentCount: 0,
    comments: [],
    createdAt: new Date().toISOString(),
  };

  const mockRepo = {
    getAll: jest.fn().mockReturnValue([mockPost]),
    addPost: jest.fn().mockReturnValue(mockPost),
    updatePost: jest.fn().mockImplementation(
      (id: string, data: Partial<PostBlog>): PostBlog => ({
        ...mockPost,
        ...data,
      }),
    ),
    deletePost: jest.fn(),
    findById: jest
      .fn()
      .mockImplementation((id) => (id === '1' ? mockPost : undefined)),
  };

  const useCase = new PostsUseCase(mockRepo);

  it('should return all posts', () => {
    const result = useCase.execute();
    expect(result).toEqual([mockPost]);
    expect(mockRepo.getAll).toHaveBeenCalledTimes(1);
  });

  it('should create a post', () => {
    const result = useCase.create(mockPost);
    expect(result).toEqual(mockPost);
    expect(mockRepo.addPost).toHaveBeenCalledWith(mockPost);
  });

  it('should update a post', () => {
    const result = useCase.update('1', { title: 'Updated' });
    expect(result.title).toBe('Updated');
    expect(mockRepo.updatePost).toHaveBeenCalledWith('1', { title: 'Updated' });
  });

  it('should delete a post', () => {
    useCase.delete('1');
    expect(mockRepo.deletePost).toHaveBeenCalledWith('1');
  });

  it('should throw error when updating non-existing post', () => {
    const useCaseWithEmptyRepo = new PostsUseCase({
      ...mockRepo,
      findById: jest.fn().mockReturnValue(undefined),
    });

    expect(() => useCaseWithEmptyRepo.update('999', { title: 'X' })).toThrow();
  });

  it('should throw error when deleting non-existing post', () => {
    const useCaseWithEmptyRepo = new PostsUseCase({
      ...mockRepo,
      findById: jest.fn().mockReturnValue(undefined),
    });

    expect(() => useCaseWithEmptyRepo.delete('999')).toThrowError();
  });
});
