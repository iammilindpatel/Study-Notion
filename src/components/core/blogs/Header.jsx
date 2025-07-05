import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="mt-0.5 p-2 border-b-2 border-b-gray-300 drop-shadow-md rounded-sm top-0 inset-x-0 bg-[white] text-richblack-800">
      
      <Link to={'/catalog/blogs'}>
        <h1 className="font-bold text-md uppercase text-center">
          Learn With Blogs
        </h1>
      </Link>
    </header>
  );
}
