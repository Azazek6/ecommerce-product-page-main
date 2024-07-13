/* eslint-disable react/prop-types */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import Link from "./Link";

const HeaderMobil = ({ onOpen, OnClose }) => {
  return (
    <Sheet onOpenChange={OnClose} defaultOpen={onOpen} open={onOpen}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetDescription className="flex flex-col items-start gap-5 mt-14">
            <Link title={"Collections"} />
            <Link title={"Men"} />
            <Link title={"Women"} />
            <Link title={"About"} />
            <Link title={"Contact"} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobil;
