import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <h1 className="text-4xl text-white">Page not found</h1>
      <Link className="text-orange-600">Back to home page</Link>
    </div>
  );
};

export { ErrorPage };
