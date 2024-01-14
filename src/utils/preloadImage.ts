const MAX_CACHE_SIZE = 1000;
const cache = new Map<string, HTMLImageElement>();

function evictCache() {
  while (cache.size > MAX_CACHE_SIZE) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
  }
}

export default function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    if (cache.has(src)) {
      resolve(cache.get(src));
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (cache.size >= MAX_CACHE_SIZE) {
        evictCache();
      }
      cache.set(src, img);
      resolve(img);
    };
    img.onerror = (err) => reject(err);
  });
}
