export default function BoardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="flex flex-row w-full">
                <div className="flex-col basis-1/4">
                    <div className="border-r-2 h-dvh">sidebar</div>
                </div>
                <div className="flex-col basis-1">
                    <div className="flex-row ">
                        <nav className="w-full border-solid border-b-2 h-8">Nav</nav>
                        {children}
                    </div>
                </div>

            </div>

        </section>
    )
}