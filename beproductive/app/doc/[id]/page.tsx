"use client"

import Plan from "@/components/Plan";

function PlanPage({ params: { id } }: {
    params: {
        id: string;
    }
}) {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Plan id={id} />
        </div>
    )
}

export default PlanPage