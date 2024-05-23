import { useEffect, useState } from 'react';

function useMediaQuery(query: string) {
  // matchesの初期値をfalseに設定
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // ウィンドウが定義されていない場合は何もせずにreturnする
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
