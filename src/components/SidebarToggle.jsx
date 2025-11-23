"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SidebarToggle({ onClick }) {
    return (
        <Button
            onClick={onClick}
            variant="outline"
            size="sm"
            className="lg:hidden fixed top-20 left-4 z-30 bg-white shadow-lg hover:shadow-xl transition-all rounded-full w-12 h-12 p-0"
        >
            <Menu className="w-5 h-5" />
        </Button>
    )
}
