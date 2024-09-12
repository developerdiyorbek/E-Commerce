import { ImSpinner6 } from "react-icons/im";

function Loading() {
  return (
    <div
      className="min-h-[80vh] w-full flex items-center justify-center"
      role="status"
    >
      <ImSpinner6 className="animate-spin text-muted-foreground" size={30} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
