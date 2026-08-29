import NotFoundContent from "@/components/sections/NotFoundContent";
import Footer from "@/components/layout/Footer";

export default function ErrorPage() {
  return (
    // flex-col + min-h-screen -> NotFoundContent mengisi ruang tersisa (flex-1),
    // Footer otomatis "terdorong" ke dasar layar, nempel persis di bawah viewport
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <NotFoundContent />
      </div>
      <Footer />
    </div>
  );
}