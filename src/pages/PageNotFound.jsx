import AnimatedLogo from '../components/AnimatedLogo.jsx';

function PageNotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-full">
      <h2>Page Not Found</h2>
      <AnimatedLogo dotColor={'bg-text'} />
    </div>
  );
}

export default PageNotFound;
