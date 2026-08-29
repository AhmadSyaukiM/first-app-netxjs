import NotFoundContent from "@/components/sections/NotFoundContent";
import Footer from "@/components/layout/Footer";

export default function ErrorPage() {
  return (

    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <NotFoundContent />
      </div>
      <Footer />
    </div>
  );
}