import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center gap-5">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
      <Link href="/" className="underline text-blue-500">
        Return Home
      </Link>
    </div>
  );
}
