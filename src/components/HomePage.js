import React from "react";
import OfferBanner from "./sliders/OfferBanner";
import ProductCollections from "./sliders/ProductCollections";
import MainProductSliders from "./sliders/MainProductSliders";
import FrequentlyViewedProducts from "./FrequentlyViewedProducts";

export default function HomePage() {
  return (
    <>
      <OfferBanner />
      <ProductCollections />
      <FrequentlyViewedProducts />
      <MainProductSliders />
    </>
  );
}
