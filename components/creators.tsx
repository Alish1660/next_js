import React from "react";
import rasm from "@/public/image/avatar1.png";
import Image from "next/image";

const card = [
  {
    id: "1",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "2",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "3",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "4",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "5",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "6",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "7",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "8",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "9",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "10",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "11",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "12",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
];

let list = card?.map((el, inx) => (
  <div className="card" key={el.id}>
    <span>{inx + 1}</span>
    <Image src={el.img} alt="avatar1" />
    <h5>{el.title}</h5>
    <p>
      {el.sale} <span>{el.price}</span>
    </p>
  </div>
));
const Index = () => {
  return (
    <div>
      <div className="grid grid-cols-4	">{list}</div>
    </div>
  );
};

export default Index;
