import LogoHeader from "./LogoHeader";
import { MidHeader } from "./MidHeader";
import { Button } from "./ui/Button";
const Header = () => {
  return (
    <div className="px-4 py-2 flex w-screen items-center justify-between">
      <div className="basis-[100px]">
        <LogoHeader />
      </div>
      <div className="flex-1">
        <MidHeader />
      </div>
      <div className="basis-[100px] flex justify-end gap-4">
        <Button variant="secondary" className="text-[12px] py-0 h-7">
          LOG IN
        </Button>
        <Button className="h-7 text-[12px]">TRY FOR FREE</Button>
      </div>
    </div>
  );
};

export default Header;
