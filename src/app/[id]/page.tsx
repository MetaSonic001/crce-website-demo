import React from "react";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 4fd0fff4c2ae8dfff077d99463045906220f4facf0ee634eb14f95174b9f107146345e687460180f30cb1cc65c0658647c5e4e35c9ea91b13b51ede43328626f20510d8c256164fa40ff38d9d83c659ff2cb6637aecc251c6ad1948c82fb92a794ee2466f6b8489d0131a6366a408969d1f5a84c3dda9a0d2c81b2502db416d0",
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(
    `http://localhost:1337/api/sites/${params.id}?populate=*`,
    requestOptions,
  );

  const data = await res.json();

  const { header, p1, p2, image } = data.data.attributes;
  const largeImageUrl = image.data.attributes.formats.large.url;

  return (
    <div className="bg-[#fafafa] h-fit min-h-screen text-black w-full px-64 py-10">
      <div className="bg-white text-black px-32 mx-32 py-12 shadow-md hover:shadow-lg">
        <div className="flex-row flex items-center pb-10">
          <div className="h-[1rem] bg-blue-800 w-1"></div>
          <span className="font-semibold text-xl px-2">{header}</span>
        </div>

        <div className="flex flex-row space-x-10">
          <div className="flex-col space-y-6">
            <Image
              src={`http://localhost:1337${largeImageUrl}`}
              height={200}
              width={200}
              alt={header}
            />
          </div>
          <div className="flex-col space-y-5">
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
