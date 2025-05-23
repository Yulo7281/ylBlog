import Image from 'next/image';

interface AvatarCirclesProps {
  numPeople?: number;
  avatarUrls: string[];
}

function AvatarCircles({ numPeople = 0, avatarUrls }: AvatarCirclesProps) {
  return (
    <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
      {avatarUrls.map((url, index) => (
        <Image
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          key={url}
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        href="/more/links"
      >
        +{numPeople}
      </a>
    </div>
  );
}

export default AvatarCircles;
