const cache = new Map<string, HTMLImageElement>();

export default function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    if (cache.has(src)) {
      resolve(cache.get(src));
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      cache.set(src, img);
      resolve(img);
    };
    img.onerror = (err) => reject(err);
  });
}
