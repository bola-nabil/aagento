import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import {useData} from "./hooks/useData";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Integration = lazy(() => import("./pages/Integration"));
const Terms = lazy(() => import("./pages/Terms"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Faq = lazy(() => import("./pages/Faq"));
const NotFound = lazy(() => import("./pages/NotFound"));

import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const {content} = useData();
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/terms-condition" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails blogs={content?.blogs || []} />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
