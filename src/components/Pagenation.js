import React from 'react'

export const Pagenation = ({PostsPerPage,totalPosts, paginate}) => {
    const pageNumbers =[];
    for(let i = 1;i<=Math.ceil(totalPosts/PostsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagenation'>
            {pageNumbers.map(number =>(
                <li key={number} className='page-item'>
                    <button className="btn btn-dark"onClick={()=>{
                        paginate(number)     
                    }}>{number}</button>
                </li>
            ))}
        </ul>
    </nav>
  )
}










{/* <a onClick={()=>{
   paginate(number)     
}}
 className='page-link'>
    {number}
</a> */}