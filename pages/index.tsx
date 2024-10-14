import React from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/views/home/Header";
import Body from "@/components/views/home/Body";
import Features from "@/components/views/home/Features";
import FeatureCards from "@/components/views/home/FeatureCards";
import CustomizationOptions from "@/components/views/home/CustomizationOptions";
import CertifiedIntegrations from "@/components/views/home/CertifiedIntegrations";
import SuccessStories from "@/components/views/home/SuccessStories";
import Testimonials from "@/components/views/home/Testimonials";
import GetLMS from "@/components/views/home/GetLMS";
import FAQ from "@/components/views/home/FAQ";
import NeedAdvice from "@/components/views/home/NeedAdvice";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudMind Academy - Learning Management System</title>
        <meta
          name="description"
          content="CloudMind Academy - The best LMS for personalised learning experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Header />
        <Body />
        <Features />
        <FeatureCards />
        <CustomizationOptions />
        <CertifiedIntegrations />
        <SuccessStories />
        <Testimonials />
        <GetLMS />
        <FAQ />
        <NeedAdvice />
      </main>

      <Footer />
    </>
  );
}