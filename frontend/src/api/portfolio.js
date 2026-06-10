import { http } from './client';

// In-memory cache so navigating between pages (e.g. Home → Project → Home)
// doesn't re-hit the API. Entries expire after CACHE_TTL_MS.
const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map();

const cachedGet = async (path) => {
  const entry = cache.get(path);
  if (entry && Date.now() - entry.time < CACHE_TTL_MS) return entry.data;

  const data = await http.get(path);
  cache.set(path, { data, time: Date.now() });
  return data;
};

export const getSkills = () => cachedGet('/skills/all');
export const getProjects = () => cachedGet('/projects/all');
export const getExperiences = () => cachedGet('/experiences/all');
export const getProject = (id) => cachedGet(`/projects/${id}`);
export const sendContactForm = (payload) => http.post('/contact', payload);
