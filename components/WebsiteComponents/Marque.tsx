// @ts-ignore
import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";

const reviews = [
  {
    name: "CENTURY",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.plots360.com/images/1719490732444-CENTURY.svg",
  },
  {
    name: "LIVING",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://api.plots360.com/images/1719490824661-LIVING%20WALLS.svg",
  },
  {
    name: "EMBASSY",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.plots360.com/images/1719490740657-EMBASSY.svg",
  },
  {
    name: "ENVIRONMENT",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.plots360.com/images/1719490763013-TOTAL%20ENVIRONMENT.svg",
  },
  {
    name: "SATTVA",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.plots360.com/images/1719490771397-SATTVA.svg",
  },
  {
    name: "BLACK",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.plots360.com/images/1719490799236-BRIGADE%20BLACK.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <>
      <div className="flex justify-center">
        <blockquote className="mt-6 border-l-2 pl-6 italic text-2xl">
        &quotwann know who are the best builders in bangalore? check out the
          reviews below!&quot
        </blockquote>
      </div>
      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg container mx-auto">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            // @ts-ignore
            <ReviewCard key={review?.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            // @ts-ignore
            <ReviewCard key={review?.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
