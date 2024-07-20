import { auth } from "@clerk/nextjs/server"
import RoomProvider from "@/components/RoomProvider"

function PlanLayout({
    children,
    params: { id } 
}: { 
    children: React.ReactNode
    params: { id: string }
}) {
    auth().protect()

    return <RoomProvider roomId={id}>{children}</RoomProvider>
}

export default PlanLayout