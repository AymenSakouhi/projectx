import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#ffffff] text-center">
      <h1 className="text-[25px]">PAGE NOT FOUND</h1>
      <h2 className="text-[25px]">404</h2>
      <p>
        back to{" "}
        <Link href="/" className="text-blue text-blue-800 underline">
          home
        </Link>{" "}
        page ?
      </p>
    </div>
  );
}
