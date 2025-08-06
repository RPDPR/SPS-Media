import { AcceptButton } from "shared/ui/button/index";

export default function NotFound() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <AcceptButton>{"404 | NIKITA IS NOT FOUND"}</AcceptButton>
    </div>
  );
}
