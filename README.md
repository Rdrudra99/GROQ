<!-- "use client";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        console.log(products, "Rudra");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(products, "Rudra");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto">
      <table className="table-auto">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>des</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((items: any, index: number) => {
            return (
              <tr>
                <td>
                    {items?.id}
                </td>
                <td>
                    {items?.title}
                </td>
                <td>
                    {items?.description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList; -->

<!-- 
"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network Issue");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>laoding...</p>;
  }

  if (error) {
    return <p>something went wrong</p>;
  }

  console.log(products)

  return(
    <section className="container mx-auto">
            {
                products.map((items:any,index:number)=> {
                    return (
                        <Link href={`/interview/${items.id}`}  key={index} >
                            {items.title}
                        </Link>
                    )
                })
            }
    </section>
  )
};

export default page; -->
