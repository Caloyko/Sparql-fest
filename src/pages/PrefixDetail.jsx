import React, { useEffect, useState } from 'react';
import InProgress from '../components/reusable/InProgress'
import { useParams } from 'react-router-dom';
import { sparqlPrefixes } from '../data/prefixes';




const PrefixDetail = () => {
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = sparqlPrefixes.filter(query => query.prefix === slug);
    console.log(findDetail)
    if (findDetail.length > 0){
      setDetail(findDetail[0]);
    }else{
      window.location.href = '/';
    }
  }, [slug])

  if (!detail) {
      return <div className="text-center py-10">Loading or not found...</div>;
    }
  console.log(slug)

  return (
    <div><InProgress/>Test {detail.prefix}</div>
  )
}

export default PrefixDetail