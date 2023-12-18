import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const { id } = params;
  const [SearchParams] = useSearchParams();
  const status = SearchParams.get("status");
  const extraInfo = SearchParams.get("extraInfo");

  return (
    <div>
      <div>Product id: {id}</div>
      <div>Product status: {status}</div>
      <div>Product extra info: {extraInfo}</div>
    </div>
  );
}
