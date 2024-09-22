import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BOOKS } from "@/app/constants";
import Link from "next/link";

function Books() {
  return (
    <section className="books w-full bg-[#cf2025] p-8">
      <div className="w-full">
        <div className="flex justify-between items-center text-center mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            Featured Books
          </h3>
          <Link href="#" className="text-white">
            View all <span className="pointer_view">{">"}</span>
          </Link>
        </div>
        <div className="separator"></div>
        <div className="flex justify-between items-center">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {BOOKS.map((book, id) => (
                <CarouselItem
                  className="pl-1 basis-3/4 md:basis-1/2 lg:basis-1/5"
                  key={id}
                >
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="flex flex-col aspect-square items-center justify-center">
                        <Image
                          src={book.image}
                          width={600} // Set desired width
                          height={600} // Set desired height
                          style={{ objectFit: "cover" }}
                          className="book_image max-w-24 md:max-w-30 xl:max-w-48 mt-4"
                          alt="book image"
                        />
                      </CardContent>
                      <div className="px-8 mb-6">
                        <h3 className="text-[#350203] font-bold text-xl md:text-lg text-nowrap">
                          {book.name}
                        </h3>
                        <h4 className="font-bold">{book.price}</h4>
                      </div>
                      <CardFooter className="flex justify-center">
                        <Link
                          href="#"
                          className="bg-[#cf2025] rounded-md p-2 font-semibold text-white text-sm w-full text-center"
                        >
                          Add to Cart
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Books;
