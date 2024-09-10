export default function BoardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="overflow-y-hidden">
            <nav className="w-full sticky top-0 border-solid border-b-2 h-8 box-border">Nav</nav>
            <div className="flex flex-row w-full flex-grow-0 h-screen overflow-x-hidden">
                {/* <div className="flex-col basis-1/6 flex-shrink-0">
                    <div className="border-r-2 h-dvh">sidebar</div>
                </div> */}
                <div className="flex-col w-full">
                    <div className="flex-row  flex-grow-0">
                        {children}
                    </div>
                </div>

            </div>

        </section>
    )
}