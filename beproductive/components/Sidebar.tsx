import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Sidebar() {
    const menuOptions = (
        <>
            <NewDocumentButton />

            {/** My Documents */}
            {/** List */}

            {/** Shared with me */}
            {/** List */}
        </>
    )

    return (
        <div className="p-2 md:p-5 bg-gray-200 relative">
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <div>
                                {menuOptions}
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="hidden md:inline">
                <NewDocumentButton />
            </div>
        </div>
    )
}

export default Sidebar