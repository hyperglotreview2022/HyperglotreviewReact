import React from 'react'

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const items = await res.json();

  const paths = items.map((item) =>{
    return{
      params:{
        id : item.id.toString(),
      } 
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/art/${id}`)
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const singlepage = ({ data }) => {
  return (
    <div key={data.id}>
    {data.heading}
    </div>
  )
}

export default singlepage;