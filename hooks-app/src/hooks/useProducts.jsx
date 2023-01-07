import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_': ''}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log('데이터 잘받음')
      setProducts(data);
    })
    .catch(e => setError('에러발생'))
    .finally(() => setLoading(false));
    return ()=>{
      console.log('청소합니다')
    }
  },[salesOnly])

  return [loading, error, products];
}