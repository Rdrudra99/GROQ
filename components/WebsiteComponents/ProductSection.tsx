// @ts-nocheck
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Badge } from "../ui/badge";

export const productData = [
  {
    name: "Purva Tivoli Hills",
    location: "Doddaballapura Main Road, STRR, Devanahalli",
    status: "Ready To Move",
    developer: "Purvankara",
    price: "86 Lakh*",
    plotSize: "1,200 - 8,000",
    area: "61 Acres",
    totalUnits: "839",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719481784836-Purva%20Tivoli%20Banner%20.webp&w=640&q=75",
  },
  {
    name: "Brigade Oasis",
    location: "Devanahalli, near STRR Road",
    status: "Under Construction",
    developer: "Brigade",
    price: "73.38 Lakhs*",
    plotSize: "1,200 - 3,000",
    area: "65 Acres",
    totalUnits: "1000+",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719481871196-Brigade%20Oasis%20Banner.webp&w=640&q=75",
  },
  {
    name: "Hush Fields",
    location: "Hennur Main Road",
    status: "Under Construction",
    developer: "LivingWalls",
    price: "3.4 Cr*",
    plotSize: "1,000 - 3,900",
    area: "10 Acres",
    totalUnits: "103",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719482031423-Living%20Wall%20Hush%20Fields%20Banner.webp&w=640&q=75",
  },
  {
    name: "Oakshire",
    location: "Avalahalli main road, off Hennur Main Road",
    status: "Under Construction",
    developer: "Purvankara",
    price: "40 Lakhs*",
    plotSize: "1,200 - 2,400",
    area: "34 Acres",
    totalUnits: "175",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1718946624055-03.webp&w=640&q=75",
  },
  {
    name: "The Earth",
    location: "Nandi Hills",
    status: "Under Construction",
    developer: "Earth",
    price: "57 Lakhs*",
    plotSize: "1,500 - 3,000",
    area: "35 Acres",
    totalUnits: "254",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719482374336-SRK%20Infra%20The%20Earth%20Banner.webp&w=640&q=75",
  },
  {
    name: "Green Groves",
    location: "Off Tumkur Road near Nelmangala, Bangalore",
    status: "New Launch",
    developer: "GreenGroves",
    price: "35 Lakhs*",
    plotSize: "600 - 1,500",
    area: "45 Acres",
    totalUnits: "743",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719482536774-Sattav%20Green%20Grove%20Banner.webp&w=640&q=75",
  },
  {
    name: "The Akshara Valley Address",
    location: "Bluejay Ardley, Bengaluru",
    status: "Under Construction",
    developer: "Akshara Valley Address",
    price: "71 Lakhs*",
    plotSize: "1,500 - 2,400",
    area: "30 Acres",
    totalUnits: "378",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl: "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719482671115-Address%20Maker%20The%20Akshara%20Valley%20Banner.webp&w=1080&q=75",
  },
  {
    name: "Artemis Address",
    location: "Off Tumkur road - Nelamangala main road",
    status: "Under Construction",
    developer: "Artemis Address",
    price: "71 Lakhs*",
    plotSize: "1,200 - 1,500",
    area: "22 Acres",
    totalUnits: "401",
    projectType: "Plotted Development",
    buttonText: "View More",
    scheduleText: "Schedule Site Visit",
    imageUrl:
      "https://plots360.com/_next/image?url=https%3A%2F%2Fapi.plots360.com%2Fimages%2F1719482903049-Address%20Maker%20Artemis%20Address%20Banner.webp&w=1080&q=75",
  },
];

export default function ProductSection() {

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Explore Our Properties
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Find your dream home from our curated selection.
            </p>
            <div className="mt-4 sm:mt-0 sm:w-64">
              <Input
                type="search"
                placeholder="Search properties..."
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6 w-full">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-1/3">
            <Label htmlFor="sort" className="text-sm font-medium">
              Sort by:
            </Label>
            <Select id="sort" defaultValue="newest" className="w-40">
              <SelectTrigger>
                <SelectValue placeholder="Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="bedrooms">Bedrooms</SelectItem>
                <SelectItem value="bathrooms">Bathrooms</SelectItem>
                <SelectItem value="size">Size</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full md:w-1/3">
            <Label htmlFor="filter" className="text-sm font-medium">
              Filter by:
            </Label>
            <Select id="filter" defaultValue="all" className="w-40">
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="for-sale">For Sale</SelectItem>
                <SelectItem value="for-rent">For Rent</SelectItem>
                <SelectItem value="new-construction">
                  New Construction
                </SelectItem>
                <SelectItem value="open-house">Open House</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productData.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View property</span>
                </Link>
                <div className="absolute top-0 left-0 z-20 m-4">
                <Badge>{item.status}</Badge>
                </div>
                <img
                  src={item.imageUrl}
                  alt="Property Image"
                  width={360}
                  height={240}
                  className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item?.name}</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {item?.plotSize} , {item?.area}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                    >
                      <span>View</span>
                    </HoverBorderGradient>
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                    >
                      <span>Schedule Site Visit</span>
                    </HoverBorderGradient>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center w-full">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
