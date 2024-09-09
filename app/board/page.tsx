"use client"
import { useEffect, useState } from "react"

interface T {
    id: string;
    name: string;
}
export default function Board() {
    const [cols, setCols] = useState<T[]>([])
    // const [cards]
    useEffect(() => {
        (async function Promise<T>() {
            let boards = await fetch(`https://api.trello.com/1/members/me/boards?key=96d5ba9649cca1643aef3e5a9510c004&token=ATTA5101be44220bf20f29ef3cf48f43b06b56de37eb1e30020dcc5ea7e7b764036500186ACA`)
            console.log(boards, 'boards')
            let data = await fetch(`https://api.trello.com/1/boards/5e280b39ae75c86be47dd94e/lists/?key=96d5ba9649cca1643aef3e5a9510c004&token=ATTA5101be44220bf20f29ef3cf48f43b06b56de37eb1e30020dcc5ea7e7b764036500186ACA`)
            const cols = await data.json()
            console.log(cols);
            setCols(cols)
        })()

    }, [])
    return <>

        <div className="flex flex-row gap-x-8">
            {cols.map(col => <div key={col.id}
                className="w-48 text-white border border-sky-500"
                draggable
                onDrag={(event) => { }}
                onDragOver={() => { }}
            >{col.name}</div>)}
        </div>
    </>
}
