import { VideoList } from "@/widgets/videoList/index";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("HI");
    }, 3000);
  });
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <section className="max-w-7xl mx-auto">
        <VideoList />
      </section>
    </div>
  );
}
