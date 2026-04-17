import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blog/latest`);
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err.message);
        // Fallback to empty if fetch fails
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export const useYouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API_URL}/api/youtube/latest`);
        if (!response.ok) throw new Error('Failed to fetch YouTube videos');
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
        setError(err.message);
        // Fallback to empty if fetch fails
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
};
