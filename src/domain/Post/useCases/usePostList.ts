import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const list = await postService.getList(page);
      setPage(prev => prev + 1);
      setPostList(prev => [...prev, ...list]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { postList, loading, error, refetch: fetchData, fetchNextPage };
}
